// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT_MarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    mapping(address => uint256[]) private ownedNFTs;
    mapping(uint256 => Token) private _item;

    struct Token {
        uint256 tokenId;
        uint256 price;
        address payable seller;
    }

    Token[] private _items;

    function createNFT(string calldata tokenURI) public {
        _tokenIds.increment();
        uint256 currentId = _tokenIds.current();
        _safeMint(msg.sender, currentId);
        _setTokenURI(currentId, tokenURI);
        ownedNFTs[msg.sender].push(currentId);
    }

    function getOwnedNFts() public view returns (uint256[] memory) {
        return ownedNFTs[msg.sender];
    }

    function listNFT(uint256 _tokenID, uint256 _price) public {
        require(_price > 0, "NFT Market: price must be greater than 0");
        require(
            ownerOf(_tokenID) == msg.sender,
            "NFT Market: You are not the owner"
        );

        transferFrom(msg.sender, address(this), _tokenID);

        _item[_tokenID] = Token({
            tokenId: _tokenID,
            price: _price,
            seller: payable(msg.sender)
        });
        _items.push(_item[_tokenID]);

        for(uint i=0; i<ownedNFTs[msg.sender].length; i++){
            if(ownedNFTs[msg.sender][i]==_tokenID){
                ownedNFTs[msg.sender][i] = ownedNFTs[msg.sender][ownedNFTs[msg.sender].length-1];
                ownedNFTs[msg.sender].pop();
                break;
            }
        }
    }

    function getListedNFTs() public view returns(Token[] memory){
        return _items;
    }

    function buyNFT(uint256 _tokenID) public payable returns(bool) {
        require(_item[_tokenID].price > 0, "NFT Market: Item is not for sale");
        require(msg.value == _item[_tokenID].price, "NFT Market: Not sufficient Money transferred");

        // NFT Transfer
        (ERC721(address(this))).transferFrom(address(this), msg.sender, _tokenID);
        ownedNFTs[msg.sender].push(_tokenID);

        // Ether Transfer
        (bool success, ) = _item[_tokenID].seller.call{value: msg.value}("");

        _item[_tokenID] = Token({
            tokenId: 0,
            price: 0,
            seller: payable(address(0))
        });

        for(uint256 i=0; i<_items.length; i++){
            if(_items[i].tokenId == _tokenID){
                _items[i] = _items[_items.length-1];
                _items.pop();
                break;
            }
        }

        return success;
    }

}

# 🚀SpaceWars

**SpaceWars** is an innovative gaming platform that merges the excitement of a space shooter game with the possibilities of blockchain technology. Players can enhance their gaming experience by purchasing and owning unique rocket skins and stunning cosmic backgrounds as NFTs. These digital assets are securely stored on the blockchain, providing players with true ownership and the ability to trade or showcase their collectibles.

---

## Features

- **Space Shooter Gameplay**: A fun and engaging space shooter game where players control rockets, destroy asteroids, and collect items.
  
- **NFT Collectibles**: Unique rocket skins and cosmic backgrounds are represented as NFTs stored on the blockchain.
  
- **Decentralized Storage**: NFTs' metadata and assets are stored securely using IPFS.
  
- **Marketplace**: Players can buy, sell, and trade their NFTs with others.
  
- **True Ownership**: Blockchain ensures players own their digital assets.



## Technology Stack

### Backend
- **Solidity**: Smart contracts for minting and managing NFTs.
- **Truffle**: Framework for Ethereum smart contract development and deployment.
- **IPFS**: Decentralized storage for storing NFT metadata and images.

### Frontend
- **React**: Frontend framework for building a responsive and interactive user interface.
- **Ethers.js**: Library for interacting with the blockchain and MetaMask.



## Installation Guide

### Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Truffle**: Install globally with `npm install -g truffle`
- **MetaMask**: Browser extension wallet for connecting to the blockchain.
- **IPFS CLI**: [Install IPFS](https://docs.ipfs.tech/install/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ArkaD-23/TDOC-SpaceWars.git
   cd TDOC-SpaceWars
   ```

2. Navigate to the `contracts` directory:
   ```bash
   cd contracts
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Compile the smart contracts:
   ```bash
   truffle compile
   ```

5. Deploy the contracts to a local or test blockchain (e.g., Ganache):
   ```bash
   truffle migrate --network development
   ```

6. Test the smart contracts:
   ```bash
   truffle test
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   npm i
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```



## Usage

1. **Connect Wallet**: Use MetaMask to connect your wallet to the game.
2. **Play the Game**: Destroy asteroids, collect in-game items, and enjoy space adventures.
3. **Purchase NFTs**: Buy rocket skins and backgrounds in the marketplace using cryptocurrency.
4. **Trade Collectibles**: Use the marketplace to trade NFTs with other players.

## Project Structure

```plaintext
spacewars/
├── build/contracts/          
├── client/                   
├── contracts/                
├── migrations/               
├── test/
├── package.json
├── truffle-config.js
└── README.md               
```

## License

This project is licensed under the [MIT License](LICENSE).

---

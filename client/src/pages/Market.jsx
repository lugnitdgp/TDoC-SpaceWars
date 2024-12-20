import React from "react";

const Market = () => {
  var nft = {};
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 flex flex-col items-center text-white">
      <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-8">
        Galactic Marketplace
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        Buy exclusive rocket skins and space backgrounds
      </p>
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-h-80 overflow-y-auto ">
        <div className='"grid grid-cols-3 gap-6'>
          <div className="w-64 p-4 rounded-lg bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-lg">
            <div className="w-full h-48 flex items-center justify-center bg-gray-400 rounded-md overflow-hidden">
              <img src={nft.image}></img>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold text-gray-200">nft.name</h4>
              <p className="text-sm text-gray-400 mt-2">nft.description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-h-80 overflow-y-auto ">
        <div className='"grid grid-cols-3 gap-6'>
          <div className="w-64 p-4 rounded-lg bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-lg">
            <div className="w-full h-48 flex items-center justify-center bg-gray-400 rounded-md overflow-hidden">
              <img src={nft.image}></img>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold text-gray-200">nft.name</h4>
              <p className="text-sm text-gray-400 mt-2">nft.description</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  );
};

export default Market;

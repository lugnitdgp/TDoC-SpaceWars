import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col justify-center items-center text-white relative overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        SPACEWARS
      </h1>
      <p className="text-gray-400 mt-4 text-lg">
        The Ultimate Space Shooter Game
      </p>
      <div className="mt-10 bg-gray-800 p-5 rounded-lg shadow-lg">
        <button className="w-64 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 text-lg rounded-lg hover:to-blue-500 transition-all py-3 duration-3">
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
};

export default Home;

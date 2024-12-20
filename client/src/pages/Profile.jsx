import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 flex flex-col items-center text-white'>
        <div className='text-center mt-10'>
            <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>username</h1>
            <p className='text-gray-400 mt-2 text-lg '>Your exclusive collection of nfts</p>
        </div>
        <div className='mt-10 w-11/12 bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-semibold text-center text-gray-200 mb-6'>Owned Nfts</h2>
            <p className='text-center text-gray-400'>No Nfts in your collection</p>
        </div>
        <button className='mt-8 p-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-blue-500 py-3'>
            Mint New Nft
        </button>
    </div>
  )
}

export default Profile

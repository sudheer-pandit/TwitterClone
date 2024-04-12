import React from 'react'
import Avatar from "react-avatar"
import { CiImageOn } from "react-icons/ci";
function CreatePost() {
  return (
    <div className='w-[100%]'>
      <div className='flex items-center justify-evenly border-b border-gray-100 '>
        <div className='cursor-pointer hover:bg-gray-200  px-6 py-2  text-center '>
          <h1 className='font-semibold text-gray-600 text-lg '>For You</h1>
        </div>
        <div className='cursor-pointer hover:bg-gray-200  px-6 py-2 text-center'>
          <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
        </div>
      </div>

      <div >
        <div className='flex items-center p-4 '>
          <div>
          <Avatar src="https://img.freepik.com/free-photo/3d-rendering-teenager-boy-with-backpack-city_1142-55311.jpg?size=626&ext=jpg" size="50" round={true} />
          </div>
        <input type="text" className='outline-none ml-2 border-none text-lg' placeholder='What is heppining?!' />
        </div>
        <div className='flex items-center justify-between p-4 border-b border-grey-300'>
          <div >
            <CiImageOn size={"20px"}/>
            </div>
            <button className='text-while bg-[#1D9BF0] rounded-full text-lg px-4 py-1'>Post</button>
          
        </div>
      </div>
    </div>
  )
}

export default CreatePost
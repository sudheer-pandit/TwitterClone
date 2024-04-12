import React from "react";
import { MdHome } from "react-icons/md";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="w-[20%]">
      <div>
        <div className="my-4 ml-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLEVQwlV8yr1zrmZeKhP0NqSsUpywXL9uj8cQSVZ7JhC95MTCMcmBI30pPuzcpnR2YoI&usqp=CAU"
            width={"34px"}
            alt=""
          />
        </div>
        <div className=" my-4">
          <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
            <div className="mr-2">
              <MdHome size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ">Home</h1>
          </Link>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
            <div className="mr-2">
              <CiHashtag size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
            <div className="mr-2">
              <IoIosNotificationsOutline size={"24px"} />
            </div>
            <h1 className="font-semibold text-lg ">Notification</h1>
          </div>
          <Link to="/Profile" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
          <div className="mr-2">
            <CgProfile size={"24px"}/>
          </div>
          
          <h1 to="/Profile" className="font-semibold text-lg ">Profile</h1>
         </Link>
         <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
          <div className="mr-2">
            <IoBookmarksOutline size={"24px"}/>
          </div>
          <h1 className="font-semibold text-lg ">Bookmarks</h1>
         </div>
         <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full  ">
          <div className="mr-2">
            <AiOutlineLogout size={"24px"}/>
          </div>
          <h1 className="font-semibold text-lg ">Logout</h1>
         </div>
         <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-[70%] text-white rounded-full">Post</button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;

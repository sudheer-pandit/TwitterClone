import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { PiHeartStraight } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
function Tweet() {
  return (
    <div className=" border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?w=740"
            size="50"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center ">
              <h1 className="font-bold">Sudheer </h1>
              <p className="text-grey-500 font-sm ml-1">
                @sudheerdeveloper . 1m
              </p>
            </div>
            <div>
              <p>Hello Developers This is sudheer pandit</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="p-4 hover:bg-green-200 rounded-full cursor-pointer">
                <FaRegComment size={"20px"}/>
                </div>
              
              <p className="ml-1">0</p>
              </div >
              <div className="flex items-center">
                <div className="p-4 hover:bg-pink-200 rounded-full cursor-pointer">
                <PiHeartStraight size={"24px"}/>
                </div>
               
              <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-4 hover:bg-yellow-200 rounded-full cursor-pointer">
                <FaRegBookmark size={"21px"}/>
                </div>
                
              <p className="ml-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

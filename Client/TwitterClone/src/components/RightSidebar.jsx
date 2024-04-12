import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
function RightSidebar() {
  return (
    <div className="w-[25%] mt-2 ml-4">
      <div className="flex  items-center p-2 bg-gray-200 rounded-full ">
        <CiSearch size={"19px"} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent px-2"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4 w-full">
        <h1 className="font-bold text-lg ">Who to follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
          <div>
          <Avatar
              src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?w=740"
              size="50"
              round={true}
            />
          </div>
            <div className="ml-2">
              <h1 className="font-bold">Sudheer</h1>
              <p className="text-sm">@sudheerdeveloper</p>
            </div>
          </div>
          <div>
            <button className="bg-black text-white rounded-full px-4 py-1 ml-2">Profile</button>
          </div>
        </div>

        
      </div>

      
    </div>
  );
}

export default RightSidebar;

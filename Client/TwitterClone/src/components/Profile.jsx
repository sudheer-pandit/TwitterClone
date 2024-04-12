import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import useGetProfile from "./hooks/useGetProfile";
// import profile from "../components/redux/userSlice"
function Profile() {
  const { user, profile } = useSelector((store)=>store.user);
  console.log("user id is:",user?.id);
  console.log("profile Is:", profile?.id)
  useEffect(() => {
    if (user || profile) {
      // console.log("user id is:", user);
      useGetProfile(user?._id);
    }
  }, [user, profile]); 

  return (
    <div className="w-[50%] border border-gray-200 mt-2">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer mr-2"
          >
            <IoArrowBack size={"24px"} />
          </Link>
          <div>
            <h1 className="font-bold text-lg ">sudheer</h1>
            <p className="text-sm text-gray-500">20 Post</p>
          </div>
        </div>
        <img
          src="https://careerswithstem.com.au/wp-content/uploads/2017/07/Highlight-banner_8stages.jpg"
          height={"20px"}
          alt=""
        />
        <div className="absolute top-52 ml-2 border-white rounded-full">
          <Avatar
            src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-glasses-backpack_1142-56780.jpg?w=740"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4">
          <button className="px-4 py-1 hover:bg-gray-200 border border-gray-400 rounded-full ">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">sudheer </h1>
          <p>sudheer12</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            I am B.Tech Student of Katihar Engineering College.|| I am FullStack
            Developer || Problem solver{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

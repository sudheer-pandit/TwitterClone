import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMyProfile from "../redux/userSlice";

const useGetProfile = (id) => {
  console.log(id)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredential: true,
        });
        console.log(res);


        dispatch(getMyProfile(res.data.user));
      
    };
    fetchMyProfile();
  }, []);
};

export default useGetProfile;

import {createSlice} from "@reduxjs/toolkit"
// import { getOtherUser } from "../../../../../Server/controllers/RegisterController";

const userSlice = createSlice({
  name:"user",
  initialState:{
    user:null,
    otherUsers:null,
    profile:null,
  },
  reducers:{
    // multiple action
    getUsers:(state, action)=>{
      state.user= action.payload;
    },
    getOtherUsers:(state, action)=>{
      state.otherUsers= action.payload
    },
    getMyProfile:(state, action)=>{
      state.profile= action.payload
    }
  }
})

export const {getUsers, getOtherUsers, getMyProfile}=userSlice.actions;
export default userSlice.reducer;
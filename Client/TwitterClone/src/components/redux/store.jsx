import {configureStore} from "@reduxjs/toolkit"
import userSlices from "./userSlice";


const store = configureStore({
  reducer:{
//actions
     user:userSlices
  }
})

export default store;
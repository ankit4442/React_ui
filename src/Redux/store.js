
import { configureStore } from '@reduxjs/toolkit';
import  userDetail  from './UserDetailSlice';



const store = configureStore({
  reducer: {
    userDetail: userDetail,
    
  },
});

export default store;
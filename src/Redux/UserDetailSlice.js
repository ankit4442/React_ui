import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Read action===
export const showUser = createAsyncThunk("showUser", async (data, thunkAPI) => {

  try {
    const response = await axios.post(
      "https://apimedharva.softwaremathematics.com/login-service-mongo/api/loginservice/v2/login",
      data
    );
 
    return await response.data;
  } catch (error) {
    // Handle errors and optionally reject the promise
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const logout = createAsyncThunk("logout", async (thunkAPI) => {
  localStorage.removeItem("vite-auth");
  return {
    auth: [],

    isAuthenticated: false,
  };
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    auth: localStorage.getItem("vite-auth")
      ? JSON.parse(localStorage.getItem("vite-auth"))
      : [],
    loading: false,
    error: null,
    isAuthenticated: localStorage.getItem("vite-auth") ? true : false,
  },

  extraReducers: (builder) => {
    builder

      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUser.fulfilled, (state, action) => {
     
        state.loading = false;
        state.auth = action.payload.data.dto;
        if (action.payload.dto !== "") {
          localStorage.setItem(
            "vite-auth",
            JSON.stringify(action.payload.data.dto)
          );
          state.isAuthenticated = true; // Update isAuthenticated directly
        }
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errorMessage;
      })

      .addCase(logout.fulfilled, (state, action) => {
       
        return action.payload;
      });
  },
});

export default userDetail.reducer;

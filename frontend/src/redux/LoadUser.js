import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../server";
import { useDispatch } from "react-redux";
const initialState = {
  isAuthenticated: false,
};
const LoadUserSlice = createSlice({
  name: "LoadUserRequest",
  initialState,
  reducers: {
    LoadUserReq: async (state) => {
      try {
        const { data } = await axios.get(`${server}/user/getuser`, {
          withCredentials: true,
        });
        state.isAuthenticated = true;
      } catch (err) {}
      //   const { data } = axios.get(`${server}/user/getuser`, {
      //     withCredentials: true,
      //   });
    },
  },
});
export const { LoadUserReq } = LoadUserSlice.actions;

export default LoadUserSlice.reducer;

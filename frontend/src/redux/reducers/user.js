import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("LoadUserSuccess", (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    })
    .addCase("LoadUserFail", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    })
    .addCase("clearErrors", (state) => {
      return {
        ...state,
        error: null,
        isAuthenticated: false,
      };
    });

  // update user information
  // updateUserInfoRequest: (state) => {
  //   state.loading = true;
  // },
  // updateUserInfoSuccess: (state, action) => {
  //   state.loading = false;
  //   state.user = action.payload;
  // },
  // updateUserInfoFailed: (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // },

  // // update user address
  // updateUserAddressRequest: (state) => {
  //   state.addressloading = true;
  // },
  // updateUserAddressSuccess: (state, action) => {
  //   state.addressloading = false;
  //   state.successMessage = action.payload.successMessage;
  //   state.user = action.payload.user;
  // },
  // updateUserAddressFailed: (state, action) => {
  //   state.addressloading = false;
  //   state.error = action.payload;
  // },

  // // delete user address
  // deleteUserAddressRequest: (state) => {
  //   state.addressloading = true;
  // },
  // deleteUserAddressSuccess: (state, action) => {
  //   state.addressloading = false;
  //   state.successMessage = action.payload.successMessage;
  //   state.user = action.payload.user;
  // },
  // deleteUserAddressFailed: (state, action) => {
  //   state.addressloading = false;
  //   state.error = action.payload;
  // },

  // // get all users --- admin
  // getAllUsersRequest: (state) => {
  //   state.usersLoading = true;
  // },
  // getAllUsersSuccess: (state, action) => {
  //   state.usersLoading = false;
  //   state.users = action.payload;
  // },
  // getAllUsersFailed: (state, action) => {
  //   state.usersLoading = false;
  //   state.error = action.payload;
  // },
  // clearErrors: (state) => {
  //   state.error = null;
  // },
  // clearMessages: (state) => {
  //   state.successMessage = null;
  // },
});

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      return {
        ...state,
      };
    })
    .addCase("LoadUserSuccess", (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    })
    .addCase("LoadUserFail", (state, action) => {
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    })
    .addCase("clearErrors", (state) => {
      return {
        ...state,
        error: null,
      };
    });
});
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },

//   LoadUserSuccess: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.user = action.payload;
//   },

//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import LoadUserReducer from "./LoadUser";
const Store = configureStore({
  reducer: {
    user: userReducer,
    // LoadUserRequest: LoadUserReducer,
  },
});

export default Store;
// export const { dispatch } = Store;

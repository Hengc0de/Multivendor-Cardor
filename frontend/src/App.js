import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { server } from "./server.js";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
} from "./Route.js";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    // axios
    // .get(`${server}/user/get-user`, { withCredentials: true })
    // .then((res) => {
    //   toast.success(res.data.message);
    // })
    // .catch((err) => {
    //   toast.error(err.response.data.message);
    // });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        ></Route>
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;

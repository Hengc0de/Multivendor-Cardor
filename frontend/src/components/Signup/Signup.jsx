import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import style from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return false;
    // }

    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("email", email);
    newForm.append("name", name);
    newForm.append("password", password);
    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto flex-col sm:w-full sm:max-w-md flex">
        <img
          src="../1x/Asset 1.png"
          className="w-1/3 items-center text-center self-center"
          alt=""
        />

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8  px-6 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative ">
                <input
                  type={visible ? "password" : "text"}
                  name="password"
                  autoComplete="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    onClick={() => setVisible(!visible)}
                    className="absolute text-xl right-2 cursor-pointer top-2"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setVisible(!visible)}
                    className="absolute text-xl right-2 cursor-pointer top-2"
                  />
                )}
              </div>
            </div>
            {/* <div>
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative ">
                <input
                  type={visible ? "password" : "text"}
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    onClick={() => setVisible(!visible)}
                    className="absolute text-xl right-2 cursor-pointer top-2"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setVisible(!visible)}
                    className="absolute text-xl right-2 cursor-pointer top-2"
                  />
                )}
              </div>
            </div> */}
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h=8 w-8 rounded-full ">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      onChange={handleFileInputChange}
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="text-3xl" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  {" "}
                  <span>Upload a profile </span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only "
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
              >
                Submit
              </button>
            </div>
            <div className={`${style.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link
                to="/login"
                className="font-medium ml-2 text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

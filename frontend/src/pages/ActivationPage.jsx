import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { useNavigate } from "react-router-dom";
const ActivationPage = () => {
  const navigate = useNavigate();
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(activation_token);
    if (activation_token) {
      const activationEmail = async () => {
        try {
          await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          //   console.log(res.data.message);
        } catch (error) {
          //   console.log(error.res.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, []);
  return (
    <div className="w-100 h-100 flex items-center flex-col p-20 ">
      {error ? (
        <p className="text-center font-Gilroy items-center text-2xl flex font-bold">
          Your Token is expired <br />
        </p>
      ) : (
        <p className="text-center font-Gilroy items-center text-2xl flex font-bold">
          Your account has been created successfully <br />
          You can now close this window...
        </p>
      )}
    </div>
  );
};

export default ActivationPage;

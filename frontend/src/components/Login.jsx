import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; //google logo
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          autoPlay
          muted
          controls={false}
          type="video/mp4"
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

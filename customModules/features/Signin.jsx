import React from "react";
import { SignIn, Username } from "../../modules/onboarding/signin";

const Signin = (props) => {
  //   // ('signin', props);
  return (
    <div className="font-lexend bg-dashBg">
      <div className="w-full h-[100vh] fixed flex justify-center flex-col items-center bg-dashBg">
        <p className="text-lg mb-8 font-bold">Log In or Sign Up</p>
        <div className="p-2 w-2/6 max-w-[400px] min-w-[250px] max-h-[508px] bg-dashSides border border-opacity-5 border-white rounded ">
          <p className="text-left p-2 ">
            Sign in to access your tickets, viewed events and much more
          </p>

          <Username
            redirectOnAuth={"/browse"}
            {...props}
            prompt={"Username"}
            confirm={"Continue"}
          />

          {/* <p className="text-dashtext m-4">Or</p> */}

          <SignIn redirectOnAuth={"/browse"} {...props} />
        </div>
        <p className="p-4">
          New here?{" "}
          <a href="">
            <span className="text-accentY">Sign up instead</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;

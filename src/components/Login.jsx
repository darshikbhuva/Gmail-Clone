import React from "react";
import { useDispatch } from "react-redux";
import { setUSer } from "../redux/appSlice";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../firebase"

const Login = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      dispatch(
        setUSer({
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 bg-white flex flex-col gap-3 rounded-md">
        <h1 className="text-center text-xl font-medium mb-5">LOGIN</h1>

        <GoogleButton onclick={signInWithGoogle} />
      </div>
    </div>
  );
};

export default Login;

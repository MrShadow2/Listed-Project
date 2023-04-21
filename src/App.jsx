import React from "react";
import { useState, useEffect } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from './Home'
import "./App.css";
const App = () => {
  const [value, setValue] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  async function handleClick() {
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      console.log(data.user);
      localStorage.setItem("email", data.user.email);
      console.log(data.user.photoURL);
      setPhotoURL(data.user.photoURL);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
    {value ? (
      <Home photoURL={photoURL} />
    ) : (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-5/12 bg-black h-screen md:block hidden">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-5xl">Board.</h1>
        </div>
      </div>
      {/* items-center   bg-gray-100*/}
      {/* <div className="items-center flex flex-col my-auto mx-auto justify-center  w-7/12  "> */}
      <div className=" grid items-center my-auto mx-auto justify-center w-7/12  ">
        {/* align item start using flex */}
        <h1 className="signin  text-3xl font-bold flex-row text-gray-900 dark:text-black text-left ">
          Sign In
        </h1>
        <h1 className=" sitext  text-gray-900 dark:text-black text-2sm ">
          Sign in to your account
        </h1>
        <div className="flex justify-center items-center w-96 ">
          <div className="flex justify-center items-center max-w-xs mx-auto bg-white-1000 border border-white-100 rounded-lg shadow md:p-2 dark:bg-white-400 dark:border-white-800 hover:bg-emerald-50  hover:shadow-lg transform hover:-translate-y-1  transition duration-300 ease-in-out">
            <button onClick={handleClick} className="flex items-center justify-center p-2 ">
              <div className="flex items-center justify-center w-4 h-2 mr-5 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 dark:text-black text-sm signinbtn">
                Sign in with Google
              </h1>
            </button>
          </div>

          <div className="flex justify-center items-center max-w-xs mx-auto bg-white-1000 border border-white-100 rounded-lg shadow md:p-2 dark:bg-white-400 dark:border-white-800 m-4 hover:bg-emerald-50  hover:shadow-lg transform hover:-translate-y-1  transition duration-300 ease-in-out">
            <button className="flex justify-center items-center p-2  ">
              <div className="flex items-center justify-center w-4 h-3 mr-5 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 dark:text-black text-sm signinbtn">
                Sign in with Apple
              </h1>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full max-w-sm p-4 bg-white-1000 border border-white-100 rounded-lg shadow sm:p-6 md:p-8 dark:bg-white-400 dark:border-white-800">
          <form className="space-y-2  " action="#">
            <div>
              <label
                htmlFor="email"
                className=" emailpasstxt block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-emerald-50 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className=" ep block mb-2 text-sm font-medium text-gray-100 dark:text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border  text-gray-800 text-sm rounded-lg focus:ring-emerald-50 focus:border-emerald-200 block w-full p-2.5 dark:bg-gray-300  dark:placeholder-gray-400 "
                required
              />
            </div>
            <a
              href="#"
              className=" forgotpass ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </a>
            <button onClick={handleClick} 
              type="submit"
              className="w-full text-white bg-black hover:bg-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
            >
              Sign In
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default App;
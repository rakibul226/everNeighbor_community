"use client"
import Link from 'next/link'
import { IoEye,IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";

const Login = () => {

  const [showPassField, setShowPassField] = useState(false);

  return <div  className="h-screen"
  style={{
    backgroundImage: "url(reg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
           <h2 className="text-5xl my-10 m text-center font-bold">Login</h2>
      <div className="">
        <form  className="md:w-3/4 lg:w-1/3 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassField ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            required
          />

          <span
            className="absolute top-9 text-2xl right-0 pr-3 pt-3 cursor-pointer"
            onClick={() => setShowPassField(!showPassField)}
          >
            {showPassField ? <IoEyeOffSharp /> : <IoEye />}
          </span>
          <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary text-white text-lg">Login</button>
          </div>
        </form>
        <Link href="/registration">
        <p className="md:w-3/4 lg:w-1/3 mx-auto pt-2">
          {"Don't have an account.? "}
          <span className="text-blue-500 underline hover:text-white">Register now</span>
        </p>

        </Link>
      </div>
         </div>;
};

export default Login;
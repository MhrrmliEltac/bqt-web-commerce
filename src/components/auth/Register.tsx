import React from "react";
import Heading from "../general/Heading";
import eye from "../../assets/solar_eye-linear.svg";
import Button from "../general/Button";
import "../general/general.css";
import { Link } from "react-router";

const Register: React.FC = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="flex w-full justify-center items-center my-20">
      <div className="rounded-lg px-[55px] py-[50px] bg-white flex flex-col gap-5 w-[538px] h-full justify-center auth-card">
        <Heading name="Log in" />
        <form>
          <input
            type="text"
            placeholder="Name"
            className="outline-none border-bottom border-[#2C4B42] w-full my-[30px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="outline-none border-bottom border-[#2C4B42] w-full my-[30px]"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="outline-none border-bottom border-[#2C4B42] w-full my-[30px]"
          />

          <div className="relative flex">
            <input
              type="password"
              placeholder="Password"
              className="outline-none border-bottom border-[#2C4B42] w-full my-[30px]"
            />
            <img src={eye} alt="" className="absolute right-0 top-7" />
          </div>
          <div className="relative flex">
            <input
              type="password"
              placeholder="Confirm password"
              className="outline-none border-bottom border-[#2C4B42] w-full my-[30px]"
            />
            <img src={eye} alt="" className="absolute right-0 top-7" />
          </div>
          <div className="flex justify-end">
            <button className="text-sm text-[#2C4B42]">Forgot password</button>
          </div>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e)
            }
            buttonName="Sign up"
          />
        </form>
        <div className="flex justify-center">
          <p className="text-[#2C4B42] text-center text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-[#2C4B42] underline font-bold pl-2 text-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import Button from "../general/Button";
import Heading from "../general/Heading";
import "../general/general.css";

const PasswordReset: React.FC = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full justify-center items-center my-20">
      <div className="rounded-lg px-[55px] py-[50px] bg-white flex flex-col gap-5 w-[538px] h-full justify-center auth-card">
        <Heading name="Password reset" />
        <p className="text-[#2C4B42] text-md font-medium">
          Please, enter your phone number and we will <br />
          send you a password recovery code
        </p>
        <form>
          <div className="flex flex-col outline-none gap-2 mb-[60px]">
            <input
              type="tel"
              placeholder="+994 (XX) XXX-XX-XX"
              className="border-bottom outline-none"
            />
            <span className="text-end cursor-pointer">Use my email</span>
          </div>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e)
            }
            buttonName="Send code"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;

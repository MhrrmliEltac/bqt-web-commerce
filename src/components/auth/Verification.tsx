import Button from "../general/Button";
import Heading from "../general/Heading";

const Verification = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full justify-center items-center my-20">
      <div className="rounded-lg px-[55px] py-[50px] bg-white flex flex-col gap-5 w-[538px] h-full justify-center auth-card">
        <Heading name="Verification" />
        <p className="text-[#2C4B42] text-md font-medium">
          We have sent a verification code to <br />
          <span className="font-bold">+994501234567</span> phone number
        </p>
        <form>
          <div className="grid grid-flow-row grid-cols-4 gap-5">
            <input
              type="number"
              name="number"
              id="number"
              className="rounded-3xl border-2 border-[#2C4B42] w-[90px] h-[90px] flex justify-center items-center text-black text-2xl text-center appearance-none"
            />
            <input
              type="number"
              name="number"
              id="number"
              className="rounded-3xl border-2 border-[#2C4B42] w-[90px] h-[90px] flex justify-center items-center text-black text-2xl text-center appearance-none"
            />
            <input
              type="number"
              name="number"
              id="number"
              className="rounded-3xl border-2 border-[#2C4B42] w-[90px] h-[90px] flex justify-center items-center text-black text-2xl text-center appearance-none"
            />
            <input
              type="number"
              name="number"
              id="number"
              className="rounded-3xl border-2 border-[#2C4B42] w-[90px] h-[90px] flex justify-center items-center text-black text-2xl text-center appearance-none"
            />
          </div>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e)
            }
            buttonName="Verify"
          />
        </form>
        <p className="font-medium text-md text-[#2c4842] text-center">
          Resend code in 00:56
        </p>
      </div>
    </div>
  );
};

export default Verification;

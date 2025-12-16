import { useNavigate } from "react-router";
import success from "../../assets/icon-park-outline_success.svg";

const PaymentSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center flex-col gap-16">
      <div className="flex items-center flex-col justify-center gap-5">
        <img width={81} height={81} src={success} alt="" />
        <p className="text-[#2C4B42] font-[500] text-[28px] font-kodchasan">
          Payment successful!
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center md:w-1/2 w-full">
        <button
          onClick={() => navigate("/")}
          className="w-full font-[500] h-[60px]  font-kodchasan border border-[#2C4B42] rounded-[20px] bg-[#2C4B42] text-white"
        >
          Go to home page
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="w-full font-[500] h-[60px] text-[#2C4B42] font-kodchasan border border-[#2C4B42] rounded-[20px] bg-transparent"
        >
          View order
        </button>
      </div>
    </section>
  );
};

export default PaymentSuccessfull;

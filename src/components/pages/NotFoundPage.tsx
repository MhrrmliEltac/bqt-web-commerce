import { useNavigate } from "react-router-dom";
import notfound from "../../assets/404.png";
import Button from "../general/Button";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center flex-col gap-5">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-5">
          <motion.img
            initial={{ rotate: -5, y: -100, transition: { duration: 0.5 } }}
            animate={{ rotate: 0, y: 0, transition: { duration: 0.5 } }}
            whileHover={{ rotate: 4, scale: 1.05 }}
            src={notfound}
            alt=""
          />
          <motion.p
            initial={{ y: 100, transition: { duration: 0.5 } }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            className="text-[24px] text-[#2C4B42] font-[500] font-kodchasan"
          >
            the page you were looking for doesn't exist
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, transition: { duration: 0.5 } }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          className="w-[80%]"
        >
          <Button buttonName="Back to home page" onClick={navigateHome} />
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;

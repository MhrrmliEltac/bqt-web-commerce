import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { IonItem, IonSpinner } from "@ionic/react";
import "../style/changepassword.css";

const ChangePassword = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: (id: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * id,
      },
    }),
  };

  const [show, setShow] = useState({
    current: false,
    password: false,
    confirm: false,
  });

  const [value, setValue] = useState<{
    current: string;
    password: string;
    confirm: string;
  }>({
    current: "",
    password: "",
    confirm: "",
  });

  const [loading, setLoading] = useState<boolean>(true);

  let isValid = Object.values(value).every((val) => val.trim().length >= 6);
  let isSame = value.confirm === value.password;

  const togglePasswordVisibility = (field: keyof typeof show) => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = () => {
    setLoading((prev) => !prev);
    setTimeout(() => {
      setValue({ current: "", password: "", confirm: "" });
      toast.success("Reset password successful", {
        style: { background: "#ECFDF3", color: "#2C4B42" },
      });
      setLoading((prev) => !prev);
    }, 2000);
  };

  return (
    <section className="mt-10 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col rounded-[20px] bg-[#FFF9F3] dropshadow gap-10 md:w-[550px] md:h-[450px] p-6">
        {["current", "password", "confirm"].map((field, index) => (
          <motion.div
            key={index}
            className="border-b border-[#2c4b42] flex justify-between sm:w-[408px] w-full"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <input
              type={show[field as keyof typeof show] ? "text" : "password"}
              placeholder={
                field === "password"
                  ? "Password"
                  : field.charAt(0).toUpperCase() + field.slice(1) + " password"
              }
              name={field}
              className="bg-transparent text-lg outline-none w-full pr-8"
              value={value[field as keyof typeof value]}
              onChange={handleChange}
            />
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="flex items-center"
            >
              <Icon
                icon={
                  show[field as keyof typeof show]
                    ? "solar:eye-closed-outline"
                    : "solar:eye-linear"
                }
                width="24"
                height="24"
                style={{ color: "#000", cursor: "pointer" }}
                onClick={() =>
                  togglePasswordVisibility(field as keyof typeof show)
                }
              />
            </motion.div>
          </motion.div>
        ))}

        <motion.button
          whileHover={isValid && isSame ? { scale: 1.1 } : {}}
          onClick={handleChangePassword}
          disabled={!isValid}
          className={`border border-[#2C4B42] hover:shadow-md px-10 rounded-[18px] h-[40px] text-lg max-sm:text-sm transition-colors duration-300 sm:w-[408px] w-full ${
            isValid && isSame
              ? "bg-[#2c4b42] text-[#FFF9F3] opacity-100"
              : "bg-[#2c4b42] text-[#FFF9F3] opacity-50"
          } mt-0 sm:mt-5 flex items-center justify-center`}
        >
          {loading == false ? (
            <IonItem className="text-[#FFF9F3]">
              <IonSpinner name="bubbles"></IonSpinner>
            </IonItem>
          ) : (
            "Change password"
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default ChangePassword;

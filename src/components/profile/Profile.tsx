import Heading from "../general/Heading";
import profile from "../../assets/profile.png";
import edit from "../../assets/edit-icon.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import AddNewNumber from "../payment/AddNewNumber";
import EditableField from "./EditableField";
import AddNewEmail from "./AddNewEmail";

interface User {
  name: string;
  email: string;
  phone: string;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("Personal info");
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: "Edward Norton",
    email: "emailtest@mail.com",
    phone: "+994 50 123 45 67",
  });

  const handleChangeActive = (text: string) => {
    setActiveTab(text);
  };

  const handleInputChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <section>
      <Heading name="Profile" />
      <div className="mt-10 flex flex-col gap-10 mb-10">
        <ul className="flex justify-between items-center w-full gap-5 md:w-[75%] text-lg">
          {["Personal info", "My addresses", "My cards", "Change password"].map(
            (item, index) => (
              <motion.li
                key={index}
                className={`${
                  activeTab === item && "border-b-2"
                } border-[#2C4B42] font-kodchasan cursor-pointer text-[#2C4B42] font-[500]`}
                onClick={() => handleChangeActive(item)}
              >
                {item}
              </motion.li>
            )
          )}
        </ul>

        <div className="flex flex-col gap-10 mt-5">
          <div className="rounded-full relative">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full object-cover bg-center bg-cover w-[150px] h-[150px]"
            />
            <div className="absolute top-[75%] left-[100px] bg-[#2C4B42] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
              <img src={edit} alt="Edit" />
            </div>
          </div>

          <EditableField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <EditableField
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            open={open}
            setOpen={setOpen}
            ModalComponent={AddNewNumber}
          />
          <EditableField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            open={open}
            setOpen={setOpen}
            ModalComponent={AddNewEmail}
          />
        </div>

        <div className="flex flex-col gap-5 justify-start items-start">
          <button className="text-[#2C4B42] font-[500] text-lg font-kodchasan">
            Log out
          </button>
          <button className="text-[#656565] font-[500] text-lg font-kodchasan">
            Delete account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;

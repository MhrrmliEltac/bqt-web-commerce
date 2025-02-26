import Heading from "../general/Heading";
import profile from "../../assets/profile.svg";
import edit from "../../assets/edit-icon.svg";
import { Box, FormControl, FormLabel } from "@mui/material";

const Profile = () => {
  return (
    <section>
      <div>
        <Heading name="Profile" />
      </div>
      <div className="mt-10 flex flex-col gap-10  mb-10">
        <ul className="flex justify-between items-center w-full gap-5 md:w-[75%] text-lg">
          <li className="border-b border-[#2C4B42] font-kodchasan cursor-pointer">
            Personal info
          </li>
          <li className="border-b border-[#2C4B42] font-kodchasan cursor-pointer">
            My addresses
          </li>
          <li className="border-b border-[#2C4B42] font-kodchasan cursor-pointer">
            My cards
          </li>
          <li className="border-b border-[#2C4B42] font-kodchasan cursor-pointer">
            Change password
          </li>
        </ul>
        <div className="flex flex-col gap-10 mt-5 ">
          <div className="rounded-full relative">
            <img
              src={profile}
              alt=""
              width={80}
              height={80}
              className="rounded-full object-cover bg-center bg-cover w-[150px] h-[150px]"
            />
            <div className="absolute top-[75%] left-[100px] bg-[#2C4B42] rounded-full w-10 h-10 flex justify-center items-center">
              <img src={edit} alt="" />
            </div>
          </div>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Name
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="name"
                name="name"
                id="name"
                disabled
                value="Edward Norton"
                className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
              />
              <p className="cursor-pointer">Edit</p>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Phone
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="tel"
                name="phone"
                id="phone"
                disabled
                value="+994 50 123 45 67"
                className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
              />
              <p className="cursor-pointer">Edit</p>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Email
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="email"
                name="email"
                id="email"
                value="emailtest@mail.com"
                disabled
                className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
              />
              <p className="cursor-pointer">Edit</p>
            </Box>
          </FormControl>
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

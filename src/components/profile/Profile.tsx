import profile from "../../assets/profile.png";
import edit from "../../assets/edit-icon.svg";
import { Box, FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
import AddNewNumber from "../payment/AddNewNumber";
import AddNewEmail from "./AddNewEmail";
import { motion } from "framer-motion";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface EditModeType {
  name: boolean;
  email: boolean;
  phone: boolean;
}

export const sectionVariant = {
  initial: { opacity: 0.2, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const Profile = () => {
  const [editMode, setEditMode] = useState<EditModeType>({
    name: false,
    email: false,
    phone: false,
  });

  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: "Edward Norton",
    email: "emailtest@mail.com",
    phone: "+994 50 123 45 67",
  });

  const [profileImg, setProfileImg] = useState<string>(profile);

  const handleEditClick = (text: string) => {
    if (text === "name") {
      setEditMode({ ...editMode, name: true });
    }
    if (text === "email") {
      setEditMode({ ...editMode, email: true });
      setOpen(!open);
    }
    if (text === "phone") {
      setEditMode({ ...editMode, phone: !editMode.phone });
      setOpen(!open);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClose = (editModeName: string) => {
    if (editModeName === "phone") {
      setEditMode({ ...editMode, phone: !editMode.phone });
      setOpen(!open);
    }
    if (editModeName === "email") {
      setEditMode({ ...editMode, email: !editMode.email });
      setOpen(!open);
    }
    if (editModeName === "name") {
      setEditMode({ ...editMode, name: !editMode.name });
      setOpen(!open);
    }
  };
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target?.files;
    if (imgFiles) {
      const imgSrc = URL.createObjectURL(imgFiles[0]);
      setProfileImg(imgSrc);
    }
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-10 mt-5">
        <div className="rounded-full relative">
          <img
            src={profileImg}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full object-cover bg-center bg-cover w-[150px] h-[150px]"
          />
          <label
            htmlFor="file-upload"
            className="absolute top-[75%] left-[100px] bg-[#2C4B42] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <img src={edit} alt="Edit" className="w-5 h-5" />
          </label>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputFileChange(e)
            }
          />
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
              type="text"
              name="name"
              id="name"
              readOnly={!editMode.name}
              value={user.name}
              onChange={handleInputChange}
              className="font-[400] font-kodchasan text-[#2C4B42] text-lg bg-transparent outline-none"
            />
            <div className="cursor-pointer text-[#2C4B42] text-base font-medium">
              {editMode.name ? (
                <div className="flex justify-between items-center w-12">
                  <Icon
                    icon="maki:cross"
                    className="cursor-pointer text-[#2c4b42]"
                    fontSize="20px"
                    onClick={() => handleClose("name")}
                  />
                  <Icon
                    icon="material-symbols:check"
                    fontSize="28px"
                    onClick={() => handleClose("name")}
                  />
                </div>
              ) : (
                <div onClick={() => handleEditClick("name")}>Edit</div>
              )}
            </div>
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
              readOnly={editMode.phone}
              value={user.phone}
              onChange={handleInputChange}
              className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
            />
            {editMode.phone ? (
              open && (
                <AddNewNumber
                  open={open}
                  handleClose={() => handleClose("phone")}
                />
              )
            ) : (
              <p
                onClick={() => handleEditClick("phone")}
                className="cursor-pointer text-[#2c4b42] text-base font-medium"
              >
                Edit
              </p>
            )}
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
              alignItems: "center",
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              readOnly={editMode.email}
              value={user.email}
              onChange={handleInputChange}
              className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
            />
            {editMode.email ? (
              open && (
                <AddNewEmail
                  open={open}
                  handleClose={() => handleClose("email")}
                />
              )
            ) : (
              <p
                onClick={() => handleEditClick("email")}
                className="cursor-pointer text-[#2c4b42] text-base font-medium"
              >
                Edit
              </p>
            )}
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
    </motion.section>
  );
};

export default Profile;

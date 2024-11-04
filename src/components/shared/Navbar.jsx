import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineSearch } from "react-icons/md";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUSer } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.appSlice);

  const [toggle, setToggle] = useState(false);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUSer(null));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex items-center  p-[8px] h-[64px] gap-[80px] ">
      <div className="flex items-center gap-4">
        <div className="w-[40px] h-[40px] p-[8px] cursor-pointer hover:bg-slate-100 rounded-full">
          <HiBars3 size={"25px"} color="#5F6368" />
        </div>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail-logo"
        />
      </div>
      <div className="flex items-center bg-[#EAF1FB] p-[5px] w-[50%] rounded-full">
        <div className="cursor-pointer w-[40px] h-[40px] p-[8px]  hover:bg-slate-200 rounded-full">
          <MdOutlineSearch size={"25px"} color="#444746" />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search mail"
          className="w-[80%] bg-transparent ml-2 placeholder:text-[#7b7f84] placeholder:font-normal border-none outline-none "
        />
        <div className="ml-auto cursor-pointer w-[40px] h-[40px] p-[8px]  hover:bg-slate-200 rounded-full">
          <LuSlidersHorizontal size={"20px"} color="#444746" />
        </div>
      </div>
      <div className="flex items-center ml-auto gap-[5px]">
        <div className="w-[40px] h-[40px] p-[8px] cursor-pointer hover:bg-slate-100 rounded-full">
          <GoQuestion size={"24px"} color="#5F6368" />
        </div>
        <div className="w-[40px] h-[40px] p-[8px] cursor-pointer hover:bg-slate-100 rounded-full">
          <IoSettingsOutline size={"24px"} color="#5F6368" />
        </div>
        <div className="w-[40px] h-[40px] p-[8px] cursor-pointer hover:bg-slate-100 rounded-full">
          <TbGridDots size={"24px"} color="#5F6368" />
        </div>
        <div className="w-[40px] h-[40px] cursor-pointer ">
          <Avatar
            src={user?.photoURL}
            size="40px"
            round={true}
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
              >
                <p onClick={() => signOutHandler} className="p-2 underline">
                  LogOut
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

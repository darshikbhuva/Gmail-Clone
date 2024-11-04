import React from "react";
import { LuPencil } from "react-icons/lu";
import { BiSolidInbox } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

let sideBarMenu = [
  {
    icon: <BiSolidInbox size={"20px"} color="#777A7A" />,
    text: "Inbox",
  },
  {
    icon: <FaRegStar size={"20px"} color="#777A7A" />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} color="#777A7A" />,
    text: "Snoozed",
  },
  {
    icon: <IoMdSend size={"20px"} color="#777A7A" />,
    text: "Sent",
  },
  {
    icon: <FaRegStickyNote size={"20px"} color="#777A7A" />,
    text: "Drafts",
  },
  {
    icon: <MdKeyboardArrowDown size={"20px"} color="#777A7A" />,
    text: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="flex items-center gap-4 py-5 px-[25px] bg-[#C2E7FF] w-fit ml-[8px] rounded-2xl hover:shadow-md cursor-pointer mt-[8px]">
        <LuPencil size={"20px"} />
        <button
          className="font-semibold text-sm"
          onClick={() => dispatch(setOpen(true))}
        >
          Compose
        </button>
      </div>

      <div className="mt-4">
        {sideBarMenu.map((item, index) => {
          return (
            <div
              className="flex items-center gap-4 pl-[26px] pr-[12px] hover:bg-[#D3E3FD] rounded-r-full py-1 cursor-pointer"
              key={index}
            >
              {item.icon}
              <p className="font-medium  text-[#4a545c]">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center mt-7 pl-[25px] cursor-pointer">
        <p className="text-lg font-medium text-[#4a545c]">Labels</p>
        <FaPlus size={"15px"} className="ml-auto" color="#4a545c" />
      </div>
    </div>
  );
};

export default Sidebar;

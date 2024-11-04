import React, { useState } from "react";
import { FaCaretDown, FaRegSquare, FaUserFriends } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Messages from "./Messages";
import { IoMdMore, IoMdRefresh } from "react-icons/io";

const mailType = [
  {
    type: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    type: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    type: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 py-2 text-gray-700">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="hover-rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover-rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>

      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                key={index}
                className={` ${
                  mailTypeSelected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                } flex items-center gap-5 p-4 w-52 hover:bg-gray-100`}
                onClick={() => setMailTypeSelected(index)}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;

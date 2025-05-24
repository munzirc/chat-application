import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidBellOff } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdOutlineInstallDesktop, MdUnfoldMore } from "react-icons/md";
import { PiListBulletsBold } from "react-icons/pi";
import { TbHelp, TbRefreshDot } from "react-icons/tb";

const TopBar = () => {
  return (
    <div className="absolute h-13 top-0 left-[53px] right-0 bg-white border-b border-gray-300 flex items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-1  text-gray-500">
        <AiFillMessage className="h-3.5" />
        <span className="font-semibold text-xs pb-1">chats</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3">
        {/* Refresh */}
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <TbRefreshDot className="h-4 w-4" />
          <p className="text-xs pb-0.5">Refresh</p>
        </button>
        {/* Help */}
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <TbHelp className="h-4 w-4" />
          <p className="text-xs pb-0.5">Help</p>
        </button>
        {/* Phones */}
        <div className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <GoDotFill className="h-4 w-4 text-yellow-500" />
          <p className="text-xs pb-0.5">5/6 phones</p>
          <MdUnfoldMore className="text-gray-400 text-xs" />
        </div>
        {/* Download */}
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <MdOutlineInstallDesktop className="text-gray-400" />
        </button>
        {/* Sound */}
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <BiSolidBellOff className="text-gray-400" />
        </button>
        {/* Menu */}
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm">
          <BsStars className="text-xs text-yellow-500" />
          <PiListBulletsBold className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;

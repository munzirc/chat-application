import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { LuPenLine, LuRefreshCw } from "react-icons/lu";
import {
  RiFolderImageFill,
  RiListCheck2,
  RiListSettingsFill,
} from "react-icons/ri";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";
import { FaAt } from "react-icons/fa";

const RightNavBar = () => {
  return (
    <div className="absolute top-13 right-0 bottom-0 p-3 bg-white border-l border-gray-300">
      <div className="h-full flex flex-col space-y-6">
        {/* Expand */}
        <button className="text-gray-300">
          <TbLayoutSidebarRightExpandFilled className="w-5 h-5" />
        </button>
        {/* Refresh */}
        <button className="text-gray-300">
          <LuRefreshCw className="w-5 h-5" />
        </button>
        {/* Write */}
        <button className="text-gray-300">
          <LuPenLine className="w-5 h-5" />
        </button>
        {/* List */}
        <button className="text-gray-300">
          <VscListSelection className="w-5 h-5" />
        </button>
        {/* List */}
        <button className="text-gray-300">
          <RiListCheck2 className="w-5 h-5" />
        </button>
        {/* User Group */}
        <button className="text-gray-300">
          <HiUserGroup className="w-5 h-5" />
        </button>
        {/* At */}
        <button className="text-gray-300">
          <FaAt className="w-5 h-5" />
        </button>
        {/* Folder */}
        <button className="text-gray-300">
          <RiFolderImageFill className="w-5 h-5" />
        </button>
        {/* List Settings */}
        <button className="text-gray-300">
          <RiListSettingsFill className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default RightNavBar;

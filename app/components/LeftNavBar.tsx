"use client";
import React from "react";

import { HiHome } from "react-icons/hi";
import { useApp } from "../context/AppContext";
import { AiFillMessage } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { TiFlowMerge } from "react-icons/ti";
import { RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
import { PiListBulletsBold } from "react-icons/pi";
import { MdOutlineChecklist } from "react-icons/md";
import { TbLayoutSidebarLeftExpandFilled, TbSettingsFilled, TbStarsFilled } from "react-icons/tb";


const LeftNavbar: React.FC = () => {
  const { selectedNavButton, setSelectedNavButton } = useApp();


  return (
    <div className="absolute left-0 bg-white border-r border-gray-300 h-full p-2">
      <div className="space-y-4 flex flex-col items-center">
        {/* Top Icon */}
        <div className="relative">
          <img src="/periskope_logo.png" className="h-8 w-8" alt="user"/>
        </div>
        {/* Home */}
        <button
          onClick={() => setSelectedNavButton("home")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "home"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <HiHome className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-2" />
      <div className="space-y-2 flex flex-col">
        {/* Messages */}
        <button
          onClick={() => setSelectedNavButton("messages")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "messages"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <AiFillMessage className="w-5 h-5 p-0" />
        </button>
        {/* Tickets */}
        <button
          onClick={() => setSelectedNavButton("tickets")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "tickets"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <IoTicket className="w-5 h-5" />
        </button>
        {/* Analytics */}
        <button
          onClick={() => setSelectedNavButton("analytics")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "analytics"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <GoGraph className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-2" />
      <div className="space-y-2 flex flex-col">
        {/* Menu */}
        <button
          onClick={() => setSelectedNavButton("menu")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "menu"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <PiListBulletsBold className="w-5 h-5" />
        </button>
        {/* Offers */}
        <button
          onClick={() => setSelectedNavButton("offers")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "offers"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <GrAnnounce className="w-5 h-5" />
        </button>
        {/* Merge */}
        <button
          onClick={() => setSelectedNavButton("merge")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "merge"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <TiFlowMerge className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-2" />
      <div className="space-y-2 flex flex-col">
        {/* Contacts */}
        <button
          onClick={() => setSelectedNavButton("contacts")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "contacts"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <RiContactsBookFill className="w-5 h-5" />
        </button>
        {/* Images */}
        <button
          onClick={() => setSelectedNavButton("images")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "images"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <RiFolderImageFill className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-2" />
      <div className="space-y-2 flex flex-col">
        {/* CheckList */}
        <button
          onClick={() => setSelectedNavButton("checklist")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "checklist"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <MdOutlineChecklist className="w-5 h-5" />
        </button>
        {/* Settings */}
        <button
          onClick={() => setSelectedNavButton("settings")}
          className={`p-2 rounded-xl
    ${
      selectedNavButton === "settings"
        ? "text-green-700 bg-gray-100"
        : "text-gray-500"
    }
    hover:bg-gray-200 
    transition-colors duration-150 ease-in-out`}
        >
          <TbSettingsFilled className="w-5 h-5" />
        </button>
      </div>


      {/* Bottom Icons */}
      <div className="space-y-2 flex flex-col absolute bottom-2">
        {/* AI */}
        <button
          className="p-2 text-gray-500"
        >
          <TbStarsFilled className="w-5 h-5" />
        </button>
        {/* Expand */}
        <button
          className="p-2 text-gray-500"
        >
          <TbLayoutSidebarLeftExpandFilled className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};

export default LeftNavbar;

import React from "react";
import { HiFolderArrowDown } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdCancel, MdFilterList } from "react-icons/md";

const Filter = () => {
  return (
    <div className="h-[56.8px] w-full bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <button className="flex gap-1 text-green-700 font-semibold items-center">
          <HiFolderArrowDown className="w-4 h-4"/>
          <p className="text-xs">Custom filter</p>
        </button>
        <button className="flex items-center gap-1 py-1 px-3 border border-gray-300 bg-white text-gray-500 font-semibold rounded-sm text-xs">
          Save
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex items-center gap-1 py-1 px-3 border border-gray-300 bg-white text-gray-500 rounded-sm">
          <IoIosSearch className="text-md"/>
          <p className="text-xs font-semibold pb-0.5">Search</p>
        </button>
        <button className="flex items-center gap-1 py-1 px-3 border border-gray-300 bg-white text-green-700 font-semibold rounded-sm text-sm relative">
          <MdFilterList className="w-4 h-4"/>
          <p className="text-xs">Filtered</p>
          <MdCancel className="absolute -top-[9px] -right-[9px] w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default Filter;

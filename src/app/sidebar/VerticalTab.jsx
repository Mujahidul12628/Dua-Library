import React from "react";
import Image from "next/image";

import { GoHome } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { TbDeviceWatchPlus } from "react-icons/tb";

import { FaRegComments } from "react-icons/fa6";

import { IoBulbOutline, IoBookOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";

const VerticalTab = () => {
  return (
    <div className=" h-screen w-4/6 bg-white flex flex-col items-center py-4 full-shadow rounded-2xl">
      <div className="mt-5 mb-16">
        <Image
          src="/image/handRise.png"
          alt="hand rise"
          width={48}
          height={48}
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-6">
        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <GoHome className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>
        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <HiOutlineViewGrid className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>
        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <IoBulbOutline className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>

        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <CiBookmark className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>
        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <TbDeviceWatchPlus className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>
        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <FaRegComments className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>

        <div className="p-2 bg-gray-200 rounded-full hover:scale-110 transform transition duration-300">
          <IoBookOutline className="text-gray-500 text-xl hover:scale-125 transform transition duration-300" />
        </div>
      </div>

      <div className="bg-green-600 p-3 rounded-full mb-8 flex justify-center items-center mt-16">
        <Image
          src="/image/handLove.png"
          alt="hand rise"
          width={24}
          height={24}
        />
      </div>

      {/* <div className="bg-green-500 p-3 rounded-full mb-8">
        <FaHandsHelping className="text-white text-2xl" />
      </div> */}
    </div>
  );
};

export default VerticalTab;

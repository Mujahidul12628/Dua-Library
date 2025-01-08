import React from "react";
import { FaLanguage } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFontDownload, MdOutlineColorLens } from "react-icons/md";

const Settings = () => {
  return (
    <div className=" p-6 bg-white rounded-lg shadow-md h-screen ">
      <h2 className="text-xl font-semibold text-center mb-6">Settings</h2>

      {/* Language Settings */}
      <div className="rounded-lg flex items-center space-x-4 mb-4">
        <div className="flex-1 border-2 rounded-lg">
          <div className="p-3 border-l-green-500 border-l-2 rounded-lg flex bg-gray-100 justify-start items-center space-x-4 mb-5">
            <div className="bg-gray-100 full-shadow rounded-full p-2">
              <FaLanguage className="text-2xl text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-700">Language Settings</h3>
          </div>

          <div className="flex justify-center items-center space-x-2 my-5">
            <button className="px-6 py-2 bg-green-500 text-white rounded-md">
              English
            </button>
            <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md">
              বাংলা
            </button>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="p-4 bg-gray-100 rounded-lg flex items-center space-x-4 mb-4">
        <IoSettingsOutline className="text-2xl text-gray-400" />
        <h3 className="font-semibold text-gray-500">General Settings</h3>
      </div>

      {/* Font Settings */}
      <div className="p-4 bg-gray-100 rounded-lg flex items-center space-x-4 mb-4">
        <MdFontDownload className="text-2xl text-gray-400" />
        <h3 className="font-semibold text-gray-500">Font Settings</h3>
      </div>

      {/* Appearance Settings */}
      <div className="p-4 bg-gray-100 rounded-lg flex items-center space-x-4">
        <MdOutlineColorLens className="text-2xl text-gray-400" />
        <h3 className="font-semibold text-gray-500">Appearance Settings</h3>
      </div>
    </div>
  );
};

export default Settings;

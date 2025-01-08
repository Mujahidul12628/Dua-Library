import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import {
  BsFillBookmarkFill,
  BsLightbulb,
  BsShareFill,
  BsExclamationCircleFill,
} from "react-icons/bs";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

import { CiBookmark } from "react-icons/ci";

import {
  IoCopyOutline,
  IoBulbOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

const DuaList = ({ duas }) => {
  return (
    // <div className="grid grid-cols-1 gap-6">
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 grid grid-cols-1 gap-6">
      {duas.map((dua) => (
        <div
          key={dua.dua_id}
          className="p-6 border rounded-md shadow-md bg-white"
        >
          <div className="text-xl font-semibold mb-2 text-green-700 flex justify-start items-center space-x-3">
            <Image
              src="/image/allah.png"
              alt="hand rise"
              width={36}
              height={36}
            />{" "}
            <div className="space-x-1">
              <span>{dua.dua_id}.</span> <span>{dua.dua_name_en}</span>
            </div>
          </div>

          {/* Top Section Icons */}

          {/* Top Description */}
          {dua.top_en && (
            <p className="mb-4 text-gray-700 text-sm">{dua.top_en}</p>
          )}

          {/* Arabic Content */}
          {dua.dua_arabic && (
            <p className="text-right font-serif text-xl text-gray-800 leading-loose mb-4">
              {dua.dua_arabic}
            </p>
          )}

          {/* Transliteration */}
          {dua.transliteration_en && (
            <p className="text-gray-700 italic mb-4">
              <span className="font-bold">Transliteration:</span>{" "}
              {dua.transliteration_en}
            </p>
          )}

          {/* Translation */}
          {dua.translation_en && (
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Translation:</span>{" "}
              {dua.translation_en}
            </p>
          )}

          {/* Reference */}
          {dua.refference_en && (
            <p className="text-gray-700 font-bold my-5">
              <p className=" text-green-700 mb-1">Reference:</p>{" "}
              {dua.refference_en}
            </p>
          )}

          {/* Audio Button */}

          <div className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
            {/* Audio Button */}
            <div className="flex-shrink-0">
              {dua.audio && (
                <button className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                  <FaPlay className="text-white" />
                </button>
              )}
            </div>

            {/* Icon Actions */}
            {/* <div className="flex items-center space-x-4 text-gray-500">
              <IoCopyOutline
                size={20}
                className="cursor-pointer hover:text-gray-700"
              />
              <CiBookmark
                size={22}
                className="cursor-pointer hover:text-gray-700"
              />
              <IoBulbOutline
                size={23}
                className="cursor-pointer hover:text-gray-700"
              />
              <IoShareSocialOutline
                size={21}
                className="cursor-pointer hover:text-gray-700"
              />
              <MdOutlineReportGmailerrorred
                size={23}
                className="cursor-pointer hover:text-gray-700"
              />
            </div> */}

            <div className="flex items-center space-x-4 text-gray-500">
              {/* Copy Icon with Tooltip */}
              <div className="relative group">
                <IoCopyOutline
                  size={20}
                  className="cursor-pointer hover:text-gray-700"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Copy
                </div>
              </div>

              {/* Bookmark Icon with Tooltip */}
              <div className="relative group">
                <CiBookmark
                  size={22}
                  className="cursor-pointer hover:text-gray-700"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Bookmark
                </div>
              </div>

              {/* Bulb Icon with Tooltip */}
              <div className="relative group">
                <IoBulbOutline
                  size={23}
                  className="cursor-pointer hover:text-gray-700"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Idea
                </div>
              </div>

              {/* Share Icon with Tooltip */}
              <div className="relative group">
                <IoShareSocialOutline
                  size={21}
                  className="cursor-pointer hover:text-gray-700"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Share
                </div>
              </div>

              {/* Report Icon with Tooltip */}
              <div className="relative group">
                <MdOutlineReportGmailerrorred
                  size={23}
                  className="cursor-pointer hover:text-gray-700"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded-md py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Report
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuaList;

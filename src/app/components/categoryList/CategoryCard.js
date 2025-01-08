import React from "react";

const categoryImages = {
  "Dua's Importance": "/image/svgFile/DuaImportance.jpg",
  "Dua's Excellence": "/image/svgFile/DuaExcellence.jpg",
  "Time of Dua": "/image/svgFile/TimeOfDua.jpg",
  "Dua Acceptance": "/image/svgFile/DuaAcceptence.jpg",
  "Morning & Evening": "/image/svgFile/Morning&Evening.jpg",
  Sleep: "/image/svgFile/Sleep.jpg",
  Cloths: "/image/svgFile/Cloth.jpg",
  Home: "/image/svgFile/Home.jpg",
  Toilet: "/image/svgFile/Toilet.jpg",
  "Adhaan & Iqamah": "/image/svgFile/Adhan&qamat.jpg",
};

const CategoryCard = ({ icon, name, subcategories, duas, onClick }) => {
  const imageSrc = categoryImages[name] || "/image/svgFile/DuaImportance.jpg";
  console.log("Category Name:", name);
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 cursor-pointer"
    >
      {/* Icon and Details */}
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={`${name} Icon`}
          className="w-12 h-12 rounded-full bg-white mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Subcategory: {subcategories}</p>
        </div>
      </div>

      {/* Number of Duas */}
      <div className="text-right">
        <p className="text-xl font-bold text-gray-800">{duas}</p>
        <p className="text-sm text-gray-500">Duas</p>
      </div>
    </div>
  );
};

export default CategoryCard;

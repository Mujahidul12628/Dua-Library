import React from "react";

const SubCategoryList = ({
  subcategories,
  onSubcategoryClick,
  selectedSubcatName,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md mb-5">
      <h3 className="font-semibold text-green-600  mb-4">
        Section:{" "}
        <span className="font-medium text-black">{selectedSubcatName}</span>
      </h3>
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory.subcat_id} className="w-full">
            <button
              onClick={() => onSubcategoryClick(subcategory.subcat_id)}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-md w-full text-left"
              aria-label={`Select subcategory ${subcategory.subcat_name_en}`}
            >
              <p className="font-medium">{subcategory.subcat_name_en}</p>
              <p className="text-sm text-gray-500">
                {subcategory.subcat_name_bn}
              </p>
              <p className="text-sm text-gray-500">
                {subcategory.no_of_dua} Duas
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategoryList;

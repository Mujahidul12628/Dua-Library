// import React, { useState } from "react";
// import CategoryCard from "./CategoryCard";
// import { FaBars } from "react-icons/fa";

// const CategoryList = ({
//   categories,
//   fetchSubcategories,
//   onSubcategoryClick,
//   fetchCategories,
// }) => {
//   const [openCategoryId, setOpenCategoryId] = useState(null);
//   const [subcategories, setSubcategories] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Handle category click to toggle subcategories
//   const handleCategoryClick = async (catId) => {
//     if (openCategoryId === catId) {
//       // Close the currently open category if clicked again
//       setOpenCategoryId(null);
//     } else {
//       // Open the clicked category
//       setOpenCategoryId(catId);

//       // Fetch subcategories if not already cached
//       if (!subcategories[catId]) {
//         const data = await fetchSubcategories(catId); // Fetch subcategories from the API
//         setSubcategories((prev) => ({
//           ...prev,
//           [catId]: data, // Cache fetched subcategories
//         }));
//       }
//     }
//   };

//   const filteredCategories = categories.filter((category) =>
//     category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   return (
//     <div className="p-4 border rounded-md shadow-md bg-white h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//       <div className="p-4 bg-white rounded-lg shadow-md">
//         <h3 className="font-semibold text-lg mb-4 text-center bg-green-500 text-white py-2 rounded">
//           Categories
//         </h3>
//         <div className="mb-4">
//           {/* Search Input */}
//           <input
//             type="text"
//             placeholder="Search Categories"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col gap-4">
//         {filteredCategories.map((category) => (
//           <React.Fragment key={category.cat_id}>
//             {/* Render the Category Card */}
//             <CategoryCard
//               icon={category.cat_icon} // Category icon
//               name={category.cat_name_en} // Category name
//               subcategories={category.no_of_subcat} // Number of subcategories
//               duas={category.no_of_dua} // Number of duas
//               onClick={() => handleCategoryClick(category.cat_id)} // Handle category click
//             />

//             {/* Render Subcategories Below the Open Category */}
//             {openCategoryId === category.cat_id && (
//               <div className="pl-8 mt-2 space-y-2">
//                 {subcategories[category.cat_id]?.map((subcat) => (
//                   <div
//                     key={subcat.subcat_id} // Subcategory key
//                     className="p-2 bg-gray-50 rounded-md border-l-4 border-green-500 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => onSubcategoryClick(subcat.subcat_id)} // Notify parent when a subcategory is clicked
//                   >
//                     <h4 className="text-gray-800 font-medium">
//                       {subcat.subcat_name_en}
//                     </h4>
//                     <p className="text-sm text-gray-500">
//                       {subcat.no_of_dua} Duas
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { FaBars } from "react-icons/fa";

const CategoryList = ({
  categories,
  fetchSubcategories,
  onSubcategoryClick,
  fetchCategories,
}) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = async (catId) => {
    if (openCategoryId === catId) {
      setOpenCategoryId(null);
    } else {
      setOpenCategoryId(catId);

      if (!subcategories[catId]) {
        const data = await fetchSubcategories(catId);
        setSubcategories((prev) => ({
          ...prev,
          [catId]: data,
        }));
      }
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-4 bg-green-500 text-white rounded-md shadow-md focus:outline-none z-20 relative"
      >
        <FaBars size={20} />
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-white z-10 md:hidden`}
      >
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 text-center bg-green-500 text-white py-2 rounded">
            Categories
          </h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Categories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredCategories.map((category) => (
            <React.Fragment key={category.cat_id}>
              <CategoryCard
                icon={category.cat_icon}
                name={category.cat_name_en}
                subcategories={category.no_of_subcat}
                duas={category.no_of_dua}
                onClick={() => handleCategoryClick(category.cat_id)}
              />

              {openCategoryId === category.cat_id && (
                <div className="pl-8 mt-2 space-y-2">
                  {subcategories[category.cat_id]?.map((subcat) => (
                    <div
                      key={subcat.subcat_id} // Subcategory key
                      className="p-2 bg-gray-50 rounded-md border-l-4 border-green-500 hover:bg-gray-100 cursor-pointer"
                      onClick={() => onSubcategoryClick(subcat.subcat_id)} // Notify parent when a subcategory is clicked
                    >
                      <h4 className="text-gray-800 font-medium">
                        {subcat.subcat_name_en}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {subcat.no_of_dua} Duas
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-green-500 text-lg font-bold"
        >
          Close
        </button>
      </div>

      <div
        className={`hidden md:block p-4 border rounded-md shadow-md bg-white h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
      >
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 text-center bg-green-500 text-white py-2 rounded">
            Categories
          </h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Categories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredCategories.map((category) => (
            <React.Fragment key={category.cat_id}>
              <CategoryCard
                icon={category.cat_icon} // Category icon
                name={category.cat_name_en} // Category name
                subcategories={category.no_of_subcat} // Number of subcategories
                duas={category.no_of_dua} // Number of duas
                onClick={() => handleCategoryClick(category.cat_id)} // Handle category click
              />

              {/* Render Subcategories Below the Open Category */}
              {openCategoryId === category.cat_id && (
                <div className="pl-8 mt-2 space-y-2">
                  {subcategories[category.cat_id]?.map((subcat) => (
                    <div
                      key={subcat.subcat_id} // Subcategory key
                      className="p-2 bg-gray-50 rounded-md border-l-4 border-green-500 hover:bg-gray-100 cursor-pointer"
                      onClick={() => onSubcategoryClick(subcat.subcat_id)} // Notify parent when a subcategory is clicked
                    >
                      <h4 className="text-gray-800 font-medium">
                        {subcat.subcat_name_en}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {subcat.no_of_dua} Duas
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

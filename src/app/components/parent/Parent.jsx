"use client";
import React, { useState, useEffect } from "react";
import CategoryList from "../categoryList/CategoryList";
import SubcategoryList from "../subcategoryList/SubCategoryList";
import DuaCard from "../duaList/DuaList";

import {
  fetchCategories,
  fetchSubcategories,
  fetchDuas,
} from "../../services/api-list/API";
import Settings from "@/app/sidebar/Settings";
import VerticalTab from "@/app/sidebar/VerticalTab";
import NavBar from "@/app/sidebar/NavBar";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const [selectedSubcatName, setSelectedSubcatName] = useState("");

  useEffect(() => {
    console.log("Subcategories State Updated:", subcategories);
  }, [subcategories]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        console.log("Categories in Component:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  // Handle category click
  // const handleCategoryClick = async (catId) => {
  //   console.log("Category Clicked:", catId);
  //   setSelectedCategoryId(catId);
  //   setSelectedSubcategoryId(null);
  //   setSelectedSubcatName("");
  //   setDuas([]);
  //   try {
  //     const data = await fetchSubcategories(catId);
  //     console.log("Fetched Subcategories for Category:", data);
  //     setSubcategories(data);
  //   } catch (error) {
  //     console.error("Error fetching subcategories:", error);
  //   }
  // };

  const handleCategoryClick = async (catId) => {
    console.log("Category Clicked:", catId); // Log the clicked category ID
    setSelectedCategoryId(catId);
    setSelectedSubcategoryId(null);
    setSelectedSubcatName("");
    setDuas([]);

    try {
      const data = await fetchSubcategories(catId); // Fetch subcategories
      console.log("Fetched Subcategories:", data); // Log the fetched subcategories
      setSubcategories(data); // Update state
    } catch (error) {
      console.error("Error fetching subcategories:", error); // Log any errors
    }
  };

  // Handle subcategory click
  // const handleSubcategoryClick = async (subcatId) => {
  //   console.log("Clicked Subcategory ID:", subcatId);

  //   setSelectedSubcategoryId(subcatId);

  //   const subcat = subcategories.find(
  //     (subcategory) => subcategory.subcat_id === subcatId
  //   );

  //   console.log("Matched Subcategory:", subcat);

  //   if (subcat) {
  //     setSelectedSubcatName(subcat.subcat_name_en);
  //   } else {
  //     setSelectedSubcatName("None Selected");
  //   }

  //   try {
  //     const data = await fetchDuas(subcatId);
  //     setDuas(data);
  //   } catch (error) {
  //     console.error("Error fetching duas:", error);
  //   }
  // };

  const handleSubcategoryClick = async (subcatId) => {
    console.log("Clicked Subcategory ID:", subcatId); // Log clicked ID
    console.log("Current Subcategories:", subcategories); // Log current subcategories

    const subcat = subcategories.find(
      (subcategory) => subcategory.subcat_id === subcatId
    );

    console.log("Matched Subcategory:", subcat); // Log the matched subcategory

    setSelectedSubcategoryId(subcatId);
    setSelectedSubcatName(
      subcat ? subcat.subcat_name_en : "The servant is dependent on his Lord"
    );

    try {
      const data = await fetchDuas(subcatId);
      console.log("Fetched Duas:", data); // Log fetched duas
      setDuas(data);
    } catch (error) {
      console.error("Error fetching duas:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="grid grid-cols-12 gap-4 p-4">
        <aside className="hidden xl:block xl:col-span-1 flex justify-center ">
          <VerticalTab></VerticalTab>
        </aside>
        <div className="col-span-12 xl:col-span-11">
          <NavBar></NavBar>
          <div className="grid grid-cols-12 gap-4">
            <aside className="col-span-1 md:col-span-4 xl:col-span-3">
              <CategoryList
                categories={categories}
                fetchCategories={fetchCategories}
                fetchSubcategories={fetchSubcategories}
                onSubcategoryClick={handleSubcategoryClick}
                onCategoryClick={handleCategoryClick}
              />
            </aside>

            <section className="col-span-11 md:col-span-8 xl:col-span-6 2xl:col-span-7">
              <SubcategoryList
                subcategories={subcategories}
                onSubcategoryClick={handleSubcategoryClick}
                selectedSubcatName={selectedSubcatName}
              />
              <DuaCard duas={duas} />
            </section>

            <aside className="hidden xl:block col-span-3 2xl:col-span-2 ">
              <Settings></Settings>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

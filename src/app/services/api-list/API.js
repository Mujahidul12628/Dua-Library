import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data.data;
};

export const fetchSubcategories = async (cat_id) => {
  const response = await axios.get(`${BASE_URL}/subcategories/${cat_id}`);
  return response.data.data;
};

export const fetchDuas = async (subcat_id) => {
  const response = await axios.get(`${BASE_URL}/duas/${subcat_id}`);
  return response.data.data;
};

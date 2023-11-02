import silverProducts from "../scripts/json/silver.json"
import goldProducts from "../scripts/json/gold.json"
import artProducts from "../scripts/json/art.json"


export const newProducts = [...silverProducts, ...goldProducts, ...artProducts];

// Sort the newProducts array by regDate (newest dates first)
newProducts.sort((a, b) => {
  const dateA = new Date(a.regDate).getTime();
  const dateB = new Date(b.regDate).getTime();

  return dateB - dateA;
});
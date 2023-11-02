import silverProducts from "../scripts/json/silver.json"
import goldProducts from "../scripts/json/gold.json"
import artProducts from "../scripts/json/art.json"




export const rankProducts = [...silverProducts, ...goldProducts, ...artProducts];

// Sort the rankProducts array by ordercount (largest to smallest)
rankProducts.sort((a, b) => b.ordercount - a.ordercount);
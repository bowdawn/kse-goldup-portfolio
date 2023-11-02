import silverProducts from "../scripts/json/silver.json";
import goldProducts from "../scripts/json/gold.json";
import artProducts from "../scripts/json/art.json";

interface AssetData {
  id: string;
  name: string;
  category: string;
  price: string;
  brand: string;
  thumbnail: string;
  ordercount: number;
  regDate: string;
  pointValue?: number;
  priceValue?: number;
}

export const assetsListData: AssetData[] = [
  silverProducts.find((item) => item.id == "6"),
  silverProducts.find((item) => item.id == "318"),
  goldProducts.find((item) => item.id == "151"),
  artProducts.find((item) => item.id == "10266348"),
].filter((item) => item !== undefined) as AssetData[];

assetsListData[0] = {
  ...assetsListData[0],
  pointValue: 500,
  priceValue: Math.round(parseInt(assetsListData[0].price) * 0.099) * 10,
};
assetsListData[1] = {
  ...assetsListData[1],
  pointValue: 10000,
  priceValue: Math.round(parseInt(assetsListData[1].price) * 0.0098) * 100,
};
assetsListData[2] = {
  ...assetsListData[2],
  pointValue: 400,
  priceValue: Math.round(parseInt(assetsListData[2].price) * 0.0098) * 100,
};
assetsListData[3] = {
  ...assetsListData[3],
  pointValue: 300,
  priceValue: Math.round(parseInt(assetsListData[3].price) * 0.098) * 10,
};

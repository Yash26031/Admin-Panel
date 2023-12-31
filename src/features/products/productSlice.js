import { createSlice } from "@reduxjs/toolkit";

// Dummy data JSON array of products
const initialProducts = [
  {
    id: 1,
    rname: "Massala Theoryy",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
    address: "North Indian, Biryani, Mughlai",
    price: 350,
    rating: "3.8",
  },
  {
    id: 2,
    rname: "Jugaadi Adda",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
    address: "Street Food",
    price: 25,
    rating: "3.9",
  },
  {
    id: 3,
    rname: "La Milano Pizzeria",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
    address: "Pizza, Fast Food, Pasta",
    price: 70,
    rating: "4.2",
  },
  {
    id: 4,
    rname: "Momoman",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg",
    address: "Momos",
    price: 70,
    rating: "3.8",
  },
  {
    id: 5,
    rname: "Jassi De Parathe",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
    address: "North Indian",
    price: 210,
    rating: "4.0",
  },
  {
    id: 6,
    rname: "Anjoy Latenight Meals",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
    address: "Wraps FastFood, Chines",
    price: 100,
    rating: "3.8",
  },
  {
    id: 7,
    rname: "Hocco Eatery",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
    address: "North Indian, Fast Food",
    price: 300,
    rating: "3.8",
  },
  {
    id: 8,
    rname: "Chai Wai",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
    address: "Tea, Coffee, Shake, Beverages",
    price: 100,
    rating: "3.2",
  },
  {
    id: 9,
    rname: "HL Frankie",
    imgdata:
      "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
    address: "Burger, Sandwich, Fast Food",
    price: 100,
    rating: "3.8",
  },
  // Add more products here
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    updateProduct: (state, action) => {
      const { id, rname, price, address } = action.payload;
      const productIndex = state.findIndex((product) => product.id === id);

      if (productIndex !== -1) {
        state[productIndex].rname = rname;
        state[productIndex].price = price;
        state[productIndex].address = address;
      }
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const { updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;

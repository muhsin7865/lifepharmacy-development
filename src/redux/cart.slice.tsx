import createCartPOSTReq from "@/lib/createCart";
import updateCartApiReq from "@/lib/updateCart";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";
interface CartItem {
  id: string;
  qty: number;
  // Add other properties of the item
}
const storedCart =
  typeof window !== "undefined"
    ? window.localStorage.getItem("life-store")
    : false;

const init = {
  cart: {},
  wishlist: {
    data: [],
  },
};

const cartSlice = createSlice({
  name: "life-store",
  initialState: storedCart ? JSON.parse(storedCart) : init,
  reducers: {
    updateCartData: (state, action: PayloadAction<any>) => {
      debugger;

      state.cart = action.payload.data;
      localStorage.setItem("life-store", JSON.stringify(state));
    },

    addWishListData: (state, action: PayloadAction<any>) => {
      debugger;
      state.wishlist.data = [ ...action.payload]; // Assuming payload is an array of items to add
      localStorage.setItem("life-store", JSON.stringify(state));

    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { updateCartData, addWishListData } = cartSlice.actions;

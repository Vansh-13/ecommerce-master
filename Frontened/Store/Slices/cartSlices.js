import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  // cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("ye 3->", action.payload);
      const itemIndex = state.cartItems.findIndex((item) => {
        console.log("ye 2->", item.id);
        if (item._id === action.payload._id) {
          console.log("yess");
        } else {
          console.log("Noo");
        }
        return item.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `increased ${state.cartItems[itemIndex].name} cart quantity`,
          {
            position: "bottom-left",
          }
        );
        // toast.info("increased Product cart quantity", {
        //     position: "bottom-left",
        // });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex2 = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartItems[itemIndex2].cartQuantity > 1) {
        state.cartItems[itemIndex2].cartQuantity -= 1;

        toast.info(
          `decreased ${state.cartItems[itemIndex2].name} quantity from cart`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const nextCartItem = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItem;

        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state,action){
      state.cartItems = [];
      toast.error("Cart Cleared", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state,action){
      let {total, quantity} = state.cartItems.reduce((cartTotal,cartItem2)=>{
        const {price,cartQuantity} = cartItem2;
        const itemTotal = price * cartQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        
        return cartTotal;
      },{
        total:0,
        quantity:0
      })

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  },
});

export const {addToCart,decreaseCart,removeFromCart,getTotal} = cartSlice.actions;
export default cartSlice.reducer;

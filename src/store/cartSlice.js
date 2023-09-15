import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15.38,
  freeDeliveryFrom: 200,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find((item) => item.product.id === newProduct.id)
      if(cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({product:newProduct, quantity: 1})
      }
    },
    plusQuantity: (state, action) => {
      const productId = action.payload.productId
      const cartItem = state.items.find((item) => item.product.id === productId)
      cartItem.quantity += 1;
    },

    minusQuantity: (state, action) => {
      const productId = action.payload.productId
      const cartItem = state.items.find((item) => item.product.id === productId)
      cartItem.quantity -= 1;

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item=> item !== cartItem)
      }
    }
  }
})

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce(
  (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity, 0
);

const selectCart = state => state.cart;

export const selectDeliveryPrice = createSelector(
  selectSubtotal,
  selectCart,
  (subtotal, cart) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selecttotal = createSelector(
  selectDeliveryPrice,
  selectSubtotal,
  (delivery, subtotal) => subtotal + delivery
)
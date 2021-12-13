import { createSlice } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem('cart'));

const initialProducts = data ? data : [];

const productCart = createSlice({
    name: 'productCarts',
    initialState: initialProducts,
    reducers: {
        addToProductCart: (state, action) => {
            const newCart = action.payload;
            console.log(newCart);
            const cartId = state.findIndex(x => x.src === newCart.src);
            if (cartId >= 0) {
                state[cartId].quantity += 1;
            } else {
                state.push({
                    ...newCart,
                    quantity: 1
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteCart: (state, action) => {
            const idCart = action.payload;
            const index = state.findIndex(x => x.id === idCart);
            if (index >= 0) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateCartIncrease: (state, action) => {
            const newCart = action.payload;
            console.log(newCart);
            const cartId = state.findIndex(x => x.id === newCart.id);
            if (cartId >= 0) {
                state[cartId].quantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateCartDecrase: (state, action) => {
            const newCart = action.payload;
            console.log(newCart);
            const cartId = state.findIndex(x => x.id === newCart.id);
            if (cartId >= 0) {
                state[cartId].quantity -= 1;
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        payingAll: (state, action) => {
            state.splice(action.payload);
            localStorage.removeItem('cart');
        }
    }
});

const { reducer, actions } = productCart;
export const {
    addToProductCart,
    deleteCart,
    updateCartIncrease,
    updateCartDecrase,
    payingAll,
} = actions;
export default reducer;
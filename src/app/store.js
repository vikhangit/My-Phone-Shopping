import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import productCartReducer from '../features/product/productCartSlice';

const rootReducer = {
    products: productReducer,
    productCarts: productCartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
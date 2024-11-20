import {configureStore} from '@reduxjs/toolkit';

// import dataReducerf from './slices/data_fetch/data_reducer';
import productdataReducer from './adminSlice';

import cartReducer from './cartSlices';

export const store = configureStore({
    reducer: {
        // data: dataReducer,
        productdata: productdataReducer,
        cart: cartReducer,
        // fetch: dataReducerf,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
})
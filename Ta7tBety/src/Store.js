import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Features/auth/authSlice';

export const Store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default Store;
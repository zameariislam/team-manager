import { configureStore,MiddlewareArray } from '@reduxjs/toolkit';


import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: new MiddlewareArray().concat(apiSlice.middleware)
    
    
      
    

  },
});

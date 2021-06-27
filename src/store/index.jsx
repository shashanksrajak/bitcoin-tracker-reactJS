import { configureStore } from "@reduxjs/toolkit";

import coinSliceReducer from "../pages/home/coin.slice";

const store = configureStore({ reducer: { coin: coinSliceReducer } });

export default store;

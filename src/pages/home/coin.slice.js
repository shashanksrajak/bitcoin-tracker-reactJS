import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoin = createAsyncThunk(
  "coin/getCoin",
  async (coinID, thunkAPI) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinID}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  coins: [],
  coin: {
    id: "",
    name: "",
    symbol: "",
    image: "",
    priceChange24: "",
    currentPrice: "",
  },
  loading: false,
};

const coinSlice = createSlice({
  initialState,
  name: "coinSlice",
  reducers: {},
  extraReducers: {
    [fetchCoin.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchCoin.fulfilled]: (state, { payload }) => {
      state.coin.id = payload.id;
      state.coin.name = payload.name;
      state.coin.symbol = payload.symbol;
      state.coin.image = payload.image.small;
      state.coin.currentPrice = payload.market_data.current_price.inr;
      state.coin.priceChange24 =
        payload.market_data.price_change_percentage_24h;

      const coinExists = state.coins.find((coin) => coin.id === payload.id);

      if (!coinExists) {
        state.coins.unshift(state.coin);
      }
      state.loading = false;
    },
  },
});

export const coinActions = coinSlice.actions;
export default coinSlice.reducer;

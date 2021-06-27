import { Box, Text, Select, Button } from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "./coin.slice";

const SelectCoin = (props) => {
  const coins = props.coins;
  const [coinID, setCoinID] = useState();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.coin.loading);

  const coinWatchHandler = () => {
    //dispatch coin to store
    dispatch(fetchCoin(coinID));
  };

  return (
    <Box>
      <Text>Select a crypto coin to watch</Text>
      <Select
        placeholder="Select a Coin"
        onChange={(e) => setCoinID(e.target.value)}
      >
        {coins.map((coin) => {
          return (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          );
        })}
      </Select>

      {loading ? (
        <Button
          my={6}
          colorScheme="green"
          onClick={coinWatchHandler}
          isLoading
          loadingText="Fetching Coin"
        >
          Watch Coin
        </Button>
      ) : (
        <Button my={6} colorScheme="green" onClick={coinWatchHandler}>
          Watch Coin
        </Button>
      )}
    </Box>
  );
};

export default SelectCoin;

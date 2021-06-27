import { Box, Text } from "@chakra-ui/react";

const CoinSummary = (props) => {
  const coin = props.coin;

  return (
    <Box border="2px" borderColor="white" my={6} p={6} borderRadius={10}>
      <Text>Market Cap: ₹ {coin.market_data.market_cap.inr}</Text>
      <Text>Market Cap Rank: {coin.market_data.market_cap_rank}</Text>
      <Text>Total Supply: {coin.market_data.total_supply}</Text>

      <Text>24h High: ₹ {coin.market_data.high_24h.inr}</Text>
      <Text>24h Low: ₹ {coin.market_data.low_24h.inr}</Text>
    </Box>
  );
};

export default CoinSummary;

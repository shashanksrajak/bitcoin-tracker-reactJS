import {
  Box,
  Stat,
  StatHelpText,
  StatArrow,
  StatLabel,
  StatNumber,
  Flex,
} from "@chakra-ui/react";

const PriceCard = (props) => {
  const coin = props.coin;

  return (
    <Box>
      <Flex>
        <Stat>
          <StatLabel>Current Price</StatLabel>
          <StatNumber>
            ₹ {coin.market_data && coin.market_data.current_price.inr}
          </StatNumber>

          <StatHelpText>24 Hr Change</StatHelpText>
          <StatHelpText color={coin.priceChange24 > 0 ? "green" : "red"}>
            <StatArrow
              type={coin.priceChange24 > 0 ? "increase" : "decrease"}
            />
            ₹{" "}
            {coin.market_data &&
              coin.market_data.price_change_24h_in_currency.inr}{" "}
            ({coin.market_data && coin.market_data.price_change_percentage_24h}
            %)
          </StatHelpText>
        </Stat>

        <Box>
          <img src={coin.image && coin.image.small} alt={coin.name} />
        </Box>
      </Flex>
    </Box>
  );
};

export default PriceCard;

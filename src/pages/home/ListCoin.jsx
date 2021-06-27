import {
  Box,
  Flex,
  HStack,
  VStack,
  Badge,
  Text,
  Stat,
  StatHelpText,
  StatArrow,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListCoins = () => {
  const coins = useSelector((state) => state.coin.coins);

  if (coins.length === 0) {
    return <div>Nothing to show yet. Please select a coin and watch.</div>;
  } else {
    return (
      <Box width="100%">
        {coins.map((coin) => {
          return (
            <Box my={6}>
              <Link to={`/coin/${coin.id}`}>
                <VStack alignItems="start">
                  <Badge colorScheme="green">{coin.symbol}</Badge>
                  <HStack>
                    <img src={coin.image} alt={coin.name} />

                    <Text>{coin.name}</Text>
                  </HStack>
                </VStack>
                <Flex justifyContent="space-between" alignItems="center" mt={3}>
                  <Text>₹ {coin.currentPrice}</Text>
                  <Flex alignItems="center">
                    <Stat me={3}>
                      <StatHelpText>
                        <StatArrow
                          type={
                            coin.priceChange24 > 0 ? "increase" : "decrease"
                          }
                        />
                        {coin.priceChange24}%
                      </StatHelpText>
                    </Stat>
                  </Flex>
                </Flex>
              </Link>

              <Divider mt={3} />
            </Box>
          );
        })}
      </Box>
    );
  }
};

export default ListCoins;

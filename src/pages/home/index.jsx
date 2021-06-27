import { Box, VStack } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import SelectCoin from "./SelectCoin";
import ListCoins from "./ListCoin";
import Header from "../../components/Header";
import WelcomeLoader from "../../components/WelcomeLoader";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCoinsAPI = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    };
    getCoinsAPI();
  }, []);

  if (loading) {
    return <WelcomeLoader />;
  } else {
    return (
      <Box width={{ base: "90%", md: "50%" }} mx="auto" my={6}>
        <Header />
        <VStack>
          <SelectCoin coins={coins} />
          <ListCoins />
        </VStack>
      </Box>
    );
  }
};

export default Home;

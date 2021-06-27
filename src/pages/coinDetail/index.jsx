import { Box, Heading } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PriceCard from "./PriceCard";
import Graph from "./Graph";
import CoinSummary from "./CoinSummary";
import CoinDesc from "./CoinDesc";
import Header from "../../components/Header";
import Loader from "../../components/Loader";

const CoinDetails = () => {
  const { coinID } = useParams();

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      const data = await response.json();
      console.log(data);
      setCoin(data);
      setLoading(false);
    };
    fetchCoin();
  }, [coinID]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box width={{ base: "90%", md: "50%" }} mx="auto" my={6}>
        <Header />
        <Heading>{coin.name}</Heading>
        <PriceCard coin={coin} />

        <Graph coinID={coinID} coinName={coin && coin.name} />
        <CoinSummary coin={coin} />
        <CoinDesc desc={coin.description.en} coinName={coin.name} />
      </Box>
    );
  }
};

export default CoinDetails;

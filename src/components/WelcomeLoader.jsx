import { VStack, Image, Heading, Text, Flex, Spinner } from "@chakra-ui/react";

const WelcomeLoader = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      minHeight="100vh"
      alignItems="center"
    >
      <VStack mb={6}>
        <Flex alignItems="center" justifyContent="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/800px-BTC_Logo.svg.png"
            alt="cryptowatch"
            boxSize="40px"
          />
          <Heading ms={2}>Crypto Watch</Heading>
        </Flex>
        <Text fontSize="xs">Created by Shashank Kumar Rajak</Text>
      </VStack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text mt={6} fontSize="md">
        Decrypting Coins For You...
      </Text>
    </Flex>
  );
};

export default WelcomeLoader;

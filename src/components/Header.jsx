import { Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
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
  );
};

export default Header;

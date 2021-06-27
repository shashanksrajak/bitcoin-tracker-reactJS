import { Box, Text } from "@chakra-ui/react";

const CoinDesc = (props) => {
  function createMarkup() {
    return { __html: props.desc };
  }

  return (
    <Box>
      <Text fontWeight="semibold" fontSize="lg">
        About {props.coinName}
      </Text>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Box>
  );
};

export default CoinDesc;

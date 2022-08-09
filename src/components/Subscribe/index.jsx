import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

export const Subscribe = () => {
  return (
    <Flex
      w="100%"
      h="499px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
    >
      <Text
        as="h1"
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="500"
        lineHeight="30px"
        color="#20B15A"
      >
        SUBSCRIBE
      </Text>
      <Text
        as="h2"
        fontFamily="Poppins"
        fontSize="30px"
        fontWeight="600"
        lineHeight="30px"
        textAlign="center"
      >
        Subscribe to get the latest news about us
      </Text>
      <Text fontSize="16px" color="#8B8B8B" lineHeight="22px" fontWeight="500">
        Please drop your email below to get daily update about what we do
      </Text>
      <Flex>
        <Input placeholder="Enter Your Email Adress" />
        <Button bg="#F55F1D" color="#fff">
          Subscribe
        </Button>
      </Flex>
    </Flex>
  );
};

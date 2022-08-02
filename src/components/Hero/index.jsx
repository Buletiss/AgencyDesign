import React from "react";
import { Text, Flex, Image, Box, Button } from "@chakra-ui/react";
import Mulher from "../../assets/mulher.png";

function Hero() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-around"
        bg="#D7F5DC"
        w="100%"
        h="100vh"
      >
        <Flex direction="column" gap="10px">
          <Text
            fontSize="50px"
            color="black"
            w="550px"
            fontFamily="Poppins"
            fontWeight="bold"
          >
            Increase Your Customers Loyalty and Satisfaction
          </Text>
          <Text
            fontSize="20px"
            color="black"
            w="500px"
            fontFamily="Poppins"
            fontWeight="500"
          >
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </Text>
          <Button
            w="175px"
            h="70px"
            bg="#20B15A"
            borderRadius="16px"
            fontSize="20px"
            fontWeight="500"
            lineHeight="30px"
            color="#fff"
          >
            Get Started
          </Button>
        </Flex>
        <Flex>
          <Image src={Mulher} w="650px" h="550" />
        </Flex>
      </Flex>
    </>
  );
}

export default Hero;

import React from "react";
import { Text, Flex, Image, Box, Button } from "@chakra-ui/react";
import Mulher from "../../assets/mulher.png";
import logos_google from "../../assets/logos_google.png";
import logos_monday from "../../assets/logos_monday.png";
import Notion from "../../assets/Notion.png";
import Slack from "../../assets/Slack.png";
import Trello from "../../assets/Trello-logo-blue 1.png";

export const Hero = () => {
  return (
    <Box h="100vh" w="100%" bg="#D7F5DC">
      <Flex>
        <Flex
          flexDirection="column"
          gap="20px"
          ml="2rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontFamily="Poppins"
            fontSize="50px"
            fontWeight="700"
            lineHeight="65px"
          >
            Increase Your Customers Loyalty and Satisfaction
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="500"
            lineHeight="27px"
          >
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </Text>
          <Button
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="500"
            lineHeight="30px"
            color="#fff"
            bg="#20B15A"
            w="175px"
            h="70px"
          >
            Get Started
          </Button>
        </Flex>

        <Image src={Mulher} w="650px" h="564px" />
      </Flex>
      <Flex
        width="100%"
        h="120px"
        bg="#F8FFF9"
        justifyContent="space-around"
        alignItems="center"
        mb="3rem"
      >
        <Image src={logos_google} w="80px" h="30px" />
        <Image src={logos_monday} w="80px" h="30px" />
        <Image src={Notion} w="80px" h="30px" />
        <Image src={Slack} w="80px" h="30px" />
        <Image src={Trello} w="80px" h="30px" />
      </Flex>
    </Box>
  );
};

export default Hero;

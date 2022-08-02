import { Flex, Text, Heading, Link, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Activity from "../../assets/Activity.png";
import Heart from "../../assets/Heart.png";
import Work from "../../assets/Work.png";

export const WhatWeDo = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Heading
        as="h1"
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="500"
        lineHeight="30px"
        color="#20B15A"
        mt="3rem"
        ml="3rem"
      >
        What we do
      </Heading>
      <Text
        as="h2"
        fontFamily="Poppins"
        fontSize="30px"
        fontWeight="600"
        lineHeight="30px"
        mt="3rem"
        ml="3rem"
      >
        We provide the Perfect Solution to your business growth
      </Text>

      <Flex>
        <Flex
          flexDirection="column"
          gap="15px"
          w="330px"
          height="415px"
          justifyContent="center"
          alignItems="flex-start"
          mr="45px"
          mt="3rem"
          ml="3rem"
        >
          <Image src={Activity} w="93px" h="93px" />
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="600"
            lineHeight="36px"
          >
            Grow Your Business
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            We help identify the best ways to improve your business
          </Text>
          <Link
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            Learn More <ArrowForwardIcon />
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          gap="15px"
          w="330px"
          height="415px"
          justifyContent="center"
          alignItems="flex-start"
          mr="45px"
          mt="3rem"
          ml="3rem"
        >
          <Image src={Heart} w="93px" h="93px" />
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="600"
            lineHeight="36px"
          >
            Grow Your Business
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            We help identify the best ways to improve your business
          </Text>
          <Link
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            Learn More <ArrowForwardIcon />
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          gap="15px"
          w="330px"
          height="415px"
          justifyContent="center"
          alignItems="flex-start"
          mr="45px"
          mt="3rem"
          ml="3rem"
        >
          <Image src={Work} w="93px" h="93px" />
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="600"
            lineHeight="36px"
          >
            Grow Your Business
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            We help identify the best ways to improve your business
          </Text>
          <Link
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            Learn More <ArrowForwardIcon />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

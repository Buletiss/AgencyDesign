import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      pt="1rem"
      alignItems="center"
      backgroundColor="#D7F5DC"
    >
      <Flex>
        <Text
          fontFamily="Poppins"
          color="#F55F1D"
          fontWeight="700"
          fontSize="20px"
          ml="110px"
        >
          DesignAGENCY
        </Text>
      </Flex>

      <Flex as="ul" listStyleType="none" gap="80px">
        <Link
          as="li"
          fontFamily="Poppins"
          fontSize="1.6rem"
          fontWeight="bold"
          lineHeight="24px"
        >
          Services
          <ChevronDownIcon />
        </Link>

        <Link
          fontFamily="Poppins"
          fontSize="1.6rem"
          fontWeight="bold"
          lineHeight="24px"
        >
          About Us
        </Link>

        <Link
          fontFamily="Poppins"
          fontSize="1.6rem"
          fontWeight="bold"
          lineHeight="24px"
        >
          Contact Us
        </Link>
      </Flex>
      <Flex gap="3rem" mr="100px">
        <Button border="1px solid #20B15A" background="none" color="#000">
          Login
        </Button>
        <Button
          backgroundColor="#20B15A"
          color="#fff"
          _hover={{ backgroundColor: "#016f2d" }}
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

import { Box, Flex, Text, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      h="441px"
      bg="#00CA72"
      justifyContent="center"
      alignItems="normal"
      gap="3rem"
      p="70px"
    >
      <Flex flexDirection="column" gap="20px">
        <Text fontWeight="700" fontSize="39px" lineHeight="59px">
          WEB LOGO
        </Text>
        <Text>
          Some footer text about the Agency. Just a little description to help
          people understand you better
        </Text>
        <Text>Copyright Design Agency 2022</Text>
      </Flex>

      <Flex flexDirection="column" w="120px" gap="20px">
        <Text>Quick Links</Text>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
      </Flex>

      <Flex flexDirection="column" gap="20px">
        <Text>Address</Text>
        <Text>Design Agency Head Office. Airport Road United Arab Emirate</Text>
      </Flex>
    </Flex>
  );
};

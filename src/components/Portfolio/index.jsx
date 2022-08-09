import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";
import Portfolio1 from "../../assets/portfolio_1.png";
import Portfolio2 from "../../assets/portfolio_2.png";
import Portfolio3 from "../../assets/portfolio_3.png";
import Portfolio4 from "../../assets/portfolio_4.png";

export const Portfolio = () => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Text
          as="h1"
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          lineHeight="30px"
          color="#20B15A"
          mt="3rem"
          ml="3rem"
        >
          OUR PORTFOLIO
        </Text>
        <Text
          as="h2"
          fontFamily="Poppins"
          fontSize="30px"
          fontWeight="600"
          lineHeight="30px"
          mt="3rem"
          ml="3rem"
          maxW="500px"
        >
          We provide the Perfect Solution to your business growth
        </Text>
        <Flex justify="center" p="30px" alignItems="center">
          <SimpleGrid columns={2} spacing={10}>
            <Flex flexDirection="column" justifyContent="center" gap="20px">
              <Image src={Portfolio1} maxW="500px" w="100%" />
              <Text fontFamily="Poppins" fontWeight="600" lineHeight="34px">
                Digital Marketing Agency Website
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="400"
                lineHeight="21px"
                fontSize="15px"
              >
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" gap="20px">
              <Image src={Portfolio2} maxW="500px" w="100%" />
              <Text fontFamily="Poppins" fontWeight="600" lineHeight="34px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" gap="20px">
              <Image src={Portfolio3} maxW="500px" w="100%" />
              <Text fontFamily="Poppins" fontWeight="600" lineHeight="34px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" gap="20px">
              <Image src={Portfolio4} maxW="500px" w="100%" />
              <Text fontFamily="Poppins" fontWeight="600" lineHeight="34px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
};

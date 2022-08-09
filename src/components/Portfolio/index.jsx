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
          color="#20B15A"
          mr="45px"
          mt="3rem"
          ml="3rem"
          maxW="200px"
          fontWeight="600"
          fontSize="20px"
        >
          OUR PORTFOLIO
        </Text>
        <Text
          mr="45px"
          mt="3rem"
          ml="3rem"
          maxW="450px"
          fontWeight="600"
          fontSize="30px"
        >
          We provide the Perfect Solution to your business growth
        </Text>
        <Flex justify="center">
          <SimpleGrid columns={2} spacing={50} margin="100px">
            <div>
              <Image src={Portfolio1} />
              <Text fontSize="22px" marginTop="50px" lineHeight="34.12px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </div>
            <div>
              <Image src={Portfolio2} marginBottom="50px" />
              <Text fontSize="22px" marginTop="50px" lineHeight="34.12px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </div>
            <div>
              <Image src={Portfolio3} marginTop="-100px" />
              <Text fontSize="22px" marginTop="50px" lineHeight="34.12px">
                Digital Marketing Agency Website
              </Text>
              <Text>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </div>
            <div>
              <Image src={Portfolio4} />
              <Text fontSize="22px" marginTop="50px" lineHeight="34.12px">
                Digital Marketing Agency Website
              </Text>
              <Text padding="10px">
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </Text>
            </div>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
};

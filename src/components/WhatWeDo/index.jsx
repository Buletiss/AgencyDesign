import { Flex, Text, Heading } from "@chakra-ui/react";
import { Cards } from "../Cards";

export const WhatWeDo = () => {
    return (
        <Flex
            h="800px"
            w="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
                maxW="500px"
            >
                We provide the Perfect Solution to your business growth
            </Text>
            <Cards />
        </Flex>
    );
};

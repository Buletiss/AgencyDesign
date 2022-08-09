import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Avatar from "../../assets/Avatar.png";

export const Testimonials = () => {
  const testimonial = [
    {
      note: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      title: "Emily Stones",
      occupation: "CEO, Marketing Guru",
      image: { Avatar },
    },
    {
      note: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      title: "Stones Emily",
      occupation: "Estagiaria de ti",
      image: { Avatar },
    },
    {
      note: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      title: "Emilia Stones",
      occupation: "Advocate",
      image: { Avatar },
    },
  ];

  return (
    <Flex
      h="
    740px
    "
      w="100%"
      gap="40px"
      flexDirection="column"
      justifyContent="center"
    >
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
        Testimonials
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
        See what our customer say about us
      </Text>

      <Flex justifyContent="center">
        {testimonial.map((card) => (
          <Flex>
            <Text>{card.note}</Text>

            <Flex>
              <Box>
                <Text>{card.title}</Text>
                <Text>{card.occupation}</Text>
              </Box>

              <Image src={card.image} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

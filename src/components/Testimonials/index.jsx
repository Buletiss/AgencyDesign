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

      <Flex justifyContent="center" gap="45px">
        {testimonial.map((card) => (
          <Flex
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            w="470px"
            flexDirection="column"
            p="45px"
            gap="5px"
            borderRadius="20px"
          >
            <Text fontWeight="400" fontSize="18px" lineHeight="25px">
              {card.note}
            </Text>

            <Flex gap="10px" alignItems="center">
              <Box>
                <Text fontWeight="600" fontSize="20px" lineHeight="25px">
                  {card.title}
                </Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="25px">
                  {card.occupation}
                </Text>
              </Box>

              <Image src={card.image} maxW="60px" w="100%" h="60px" />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

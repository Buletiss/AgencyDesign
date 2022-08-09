import { Text, Flex, Image, Stack, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Activity from "../../assets/Activity.png";
import Heart from "../../assets/Heart.png";
import Work from "../../assets/Work.png";

export const Cards = () => {
  const cards = [
    {
      image: Activity,
      title: "Grow Your Business",
      description: "We help identify the best ways to improve your business",
    },
    {
      image: Heart,
      title: "Improve brand loyalty",
      description: "We help identify the best ways to improve your business",
    },
    {
      image: Work,
      title: "Improve Business Model",
      description: "We help identify the best ways to improve your business",
    },
  ];

  return (
    <Flex justifyContent="center">
      {cards.map((card) => (
        <Stack p="4rem">
          <Image src={card.image} maxWidth="93px" w="100%" h="93px" />
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            lineHeight="36px"
            fontWeight="600"
          >
            {card.title}
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            {card.description}
          </Text>
          <Link
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            Learn More <ArrowForwardIcon />
          </Link>
        </Stack>
      ))}
    </Flex>
  );
};

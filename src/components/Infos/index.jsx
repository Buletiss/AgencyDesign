import { Text, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import plan from "../../assets/plan.png";
import raise from "../../assets/raise.png";
import rating from "../../assets/rating.png";
import timeline from "../../assets/timeline.png";

export const Infos = () => {
  const cardInfo = [
    {
      image: plan,
      description: "Completed Projects",
      statistic: "100+",
    },
    {
      image: raise,
      description: "Customer Satisfaction",
      statistic: "20%",
    },
    {
      image: rating,
      description: "Raised by Clients",
      statistic: "$10M",
    },
    {
      image: timeline,
      description: "Years in Business",
      statistic: "2 yrs",
    },
  ];

  return (
    <Flex w="100%" h="150px" justifyContent="center" color="#FAFFFB">
      <Stack direction="row" spacing="85px">
        {cardInfo.map((card) => (
          <VStack>
            <Image src={card.image} w="100%" maxW="70px" h="70px" />
            <Text color="black" fontSize="16px">
              {card.description}
            </Text>
            <Text color="green" fontWeight="bold" fontSize="40px">
              {card.statistic}
            </Text>
          </VStack>
        ))}
      </Stack>
    </Flex>
  );
};

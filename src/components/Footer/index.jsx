import { Image, Flex } from "@chakra-ui/react";
import logos_google from "../../assets/logos_google.png";
import logos_monday from "../../assets/logos_monday.png";
import Notion from "../../assets/Notion.png";
import Slack from "../../assets/Slack.png";
import Trello from "../../assets/Trello-logo-blue 1.png";

export const Footer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="150px"
      bg="#F8FFF9"
      w="100%"
      h="120px"
      mb="1rem"
    >
      <Image src={logos_google} />
      <Image src={Trello} />
      <Image src={logos_monday} />
      <Image src={Notion} />
      <Image src={Slack} />
    </Flex>
  );
};

import { Container, Flex, Image } from "@chakra-ui/react";
import { FormCreateAnnouncement } from "../../components/formCreateAnnouncement";


export const Homepage = () => {
  return (
    <Flex bg={"green"} h={"100vh"} justify={"center"} align={"center"}>
        <FormCreateAnnouncement></FormCreateAnnouncement>
    </Flex>
  );
};

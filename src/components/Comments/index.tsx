import { Box, Flex, Text } from "@chakra-ui/react";
import { CardUser } from "../CardUser";

interface iComment {
  comment: {
    id: number;
    comment: string;
    createdAt: string;
    user_id: {
      id: number;
      name: string;
      email: string;
      cpf: string;
      phone: string;
      birthDate: string;
      description: string;
      admin: boolean;
      password: string;
      reset_token: null;
    };
    car_id: {
      id: number;
      brand: string;
      model: string;
      year: number;
      fuel: number;
      km: number;
      color: string;
      fipePrice: number;
      sellPrice: number;
      description: string;
      isActive: true;
    };
  };
  commentAuthor: string;
}

export const Comments = ({ comment, commentAuthor }: iComment) => {
  const commentTime = (createdAt: string) => {
    const currentTime = new Date().getTime();
    const commentTime = new Date(createdAt).getTime();
    const timeDifference = currentTime - commentTime;

    const secondsElapsed = Math.floor(timeDifference / 1000);
    const minutesElapsed = Math.floor(timeDifference / 60000);
    const hoursElapsed = Math.floor(timeDifference / 3600000);

    const elapsedTime =
      timeDifference < 60000
        ? `${secondsElapsed} segundos`
        : timeDifference < 3600000
        ? `${minutesElapsed} minutos`
        : `${hoursElapsed} horas`;

    return elapsedTime;
  };

  return (
    <Flex
      backgroundColor={"whiteFixed"}
      flexDirection={"column"}
      gap={"10px"}
      marginBottom={"25px"}
    >
      <Flex gap={"10px"} alignItems={"center"}>
        <CardUser name={commentAuthor} />
        <Box
          w={"5px"}
          h={"5px"}
          borderRadius={"100px"}
          backgroundColor={"grey.5"}
        />
        <Text fontSize={"body.2"} color={"grey.5"}>
          há {commentTime(comment.createdAt)}
        </Text>
      </Flex>
      <Text fontSize={"14px"} color={"grey.4"}>
        {comment.comment}
      </Text>
    </Flex>
  );
};

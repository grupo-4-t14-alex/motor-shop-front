import { Box, Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { CardUser } from "../CardUser";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentsContext";
import ModalContainer from "../Modal";
import { useForm } from "react-hook-form";
import { createCommentSchema, iCreateComment } from "../CardComment/types";
import { zodResolver } from "@hookform/resolvers/zod";

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
  display?: string;
  idComment? : number
}



export const Comments = ({ comment, commentAuthor, display, idComment }: iComment) => {

  const {deleteComment, updateComment} = useContext(CommentContext)

  const numberValue = idComment || 0

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {register, handleSubmit, formState:{errors}, reset} = useForm<iCreateComment>({
    resolver: zodResolver(createCommentSchema)
  })

  const onSubmit = (data: iCreateComment) => {

    updateComment(data, numberValue)

    onClose()

    reset()
  }

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
      <Flex display={'flex'} justifyContent={'space-between'}>
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
        <Flex display={display}>
          <Button onClick={() => onOpen()} h={'35px'} w={'100px'} fontSize={'15px'} color={"white"} bg={'#4529E6'} _hover={{bg: 'white', color: '#4529E6'}} marginRight={'10px'} rightIcon={<EditIcon />} >
            Editar
          </Button>
          <Button onClick={() => {
            deleteComment(numberValue)
          }} h={'35px'} fontSize={'15px'} color={"white"} bg={'#4529E6'} _hover={{bg: 'white', color: '#4529E6'}}>
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
      <Text fontSize={"14px"} color={"grey.4"}>
        {comment.comment}
      </Text>
      <ModalContainer variant="footerStartVariant" title="Editar comentário"  onClose={onClose} isOpen={isOpen}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input marginBottom={'10px'} placeholder={comment.comment} type="text" {...register('comment')}/>
            <Flex width={'100%'} paddingBottom={'20px'} justifyContent={'center'} gap={'10px'}>
              <Button type="submit" color={"white"} bg={'#4529E6'} _hover={{bg: 'white', color: '#4529E6'}} w={'100%'} rightIcon={<CheckCircleIcon />}>Alterar</Button>
            </Flex>
          </form>
      </ModalContainer>
    </Flex>
  );
};

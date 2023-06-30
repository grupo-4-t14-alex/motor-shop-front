import { Flex, Heading } from "@chakra-ui/react"
import { FormUpdateAddress } from "../../components/formUpdateAddress"
import { FormUpdateUser } from "../../components/formUpdateUser"
import { Comments } from "../../components/Comments"
import { CommentsArea } from "../../components/CommenstsArea"
import { ListComments } from "../../components/ListComments"

const TestPage = ( ) =>{ 

    let userObj = {
        name: ""
      };
    
      const nameUser = localStorage.getItem("motors-shop:user")
    
      if (nameUser !== null) {
        userObj = JSON.parse(nameUser);
      }

    return( 
        // <Flex bg={"cyan.400"} w={"100%"} h={"100vh"} justify={"center"} align={"center"}>

    <Flex
      w={{ base: "350px", md: "800px" }}
      flexDirection={"column"}
      backgroundColor={"whiteFixed"}
      padding={"40px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Comentários
      </Heading>
      <Flex>
        {/* {
          allComments.map((comment, index) => (
            <Comments key={index} comment={comment.comment} commentAuthor={comment.comment}/>
          ))
        } */}
        <ListComments />
      </Flex>
    </Flex>

           

        // </Flex>
    )
}

export { TestPage }
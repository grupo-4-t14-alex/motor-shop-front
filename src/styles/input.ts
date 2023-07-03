import { defineStyleConfig } from "@chakra-ui/react"

export const InputConfig = defineStyleConfig({

  baseStyle: {
    _hover: {
      borderColor: "gray.800",
    },
    _focus: {
      border: "1px solid transparent",
    },
    
    fontSize: "16px",
  },

  sizes: {},

  variants: {

  },

  defaultProps: {},
})



//  modelo de input 
//  <Input _hover={{borderColor:"grey.8"}} _focus={ {border: "1px solid transparent"}} borderRadius="4px" >

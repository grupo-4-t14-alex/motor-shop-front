import { defineStyleConfig } from "@chakra-ui/react";


export const InputConfig = defineStyleConfig({
  baseStyle: {},

  sizes: {},

  variants: {
    test: { 
     
    }

  },

  defaultProps: { size:"lg", borderColor:"grey.7", _hover:{borderColor:"grey.8"}, _focus:{ border: "1px solid transparent"}, focusBorderColor:"brand.2",fontFamily:"inter", borderRadius:"4px"},
})

import { inputAnatomy as parts } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, defineStyle, defineStyleConfig } from "@chakra-ui/react"
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const InputConfig = definePartsStyle({

  field: {
    width: "100%",
    border: "1px solid",
    outline: 0,
    appearance: "none",
    pt: "0",
    pb: "0",
    pr: "16px",
    fontSize: "16px",
    paddingLeft: "16px",
    _hover: {
      bg: "grey.9",
      borderColor: "grey.9",
    },
    _focus: {
      borderColor: "brand.1"
    }
  }
})

const customVariant = definePartsStyle({
  field: {
    border: '2px solid',
    borderColor: "grey.8",
    borderRadius: '4px',
    _focus: {
      borderColor: 'brand.2'
    }
  }
})

export const inputTheme = defineMultiStyleConfig({
  baseStyle: InputConfig,
  variants: { customVariant },
  defaultProps: {
    variant: "customVariant"
  }
})

const customVariantArea = defineStyle({
  border: '2px solid',
  borderColor: "grey.8",
  borderRadius: '4px',
  _focus: {
    borderColor: 'brand.2'
  }
})

export const textAreaConfig = defineStyleConfig({
  baseStyle: {
    width: "100%",
    border: "1px solid",
    outline: 0,
    appearance: "none",
    pt: "8px",
    pb: "8px",
    pr: "16px",
    fontSize: "16px",
    paddingLeft: "16px",
    _hover: {
      bg: "grey.9",
      borderColor: "grey.9",
    },
    _focus: {
      borderColor: "brand.1"
    }
  },
  variants: {
    variant: customVariantArea
  },
  defaultProps: {
    variant: "variant"
  }
})

//  modelo de input
//  <Input _hover={{borderColor:"grey.8"}} _focus={ {border: "1px solid transparent"}} borderRadius="4px" >

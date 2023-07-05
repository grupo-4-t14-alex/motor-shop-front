import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const greyButton = defineStyle({
  bg: 'grey.1',
  borderColor: 'grey.1',
  color: 'whiteFixed',
  _hover: {
    bg: 'grey.2',
    borderColor: 'grey.2'
  },

  _disabled: {
    bg: 'grey.5',
    borderColor: 'grey.5',
    color: 'whiteFixed',
    pointerEvents: "none"
  }
})

const negativeButton = defineStyle({
  bg: 'grey.6',
  borderColor: 'grey.6',
  color: 'grey.2',
  _hover: {
    bg: 'grey.5',
    borderColor: 'grey.5'
  },
  _disabled: {
    bg: 'grey.5',
    borderColor: 'grey.5',
    color: 'whiteFixed',
    pointerEvents: "none"
  }
})

const brandButton = defineStyle({
  bg: 'brand.1',
  borderColor: 'brand.1',
  color: 'whiteFixed',
  _hover: {
    bg: 'brand.2',
    borderColor: 'brand.2',
  },
})

const brandOpacityButton = defineStyle({
  bg: 'brand.4',
  borderColor: 'brand.4',
  color: 'brand.1',
})

const lightButton = defineStyle({
  bg: 'grey.10',
  borderColor: 'grey.10',
  color: 'grey.1',
})

const outlineLightButton = defineStyle({
  bg: 'transparent',
  borderColor: 'grey.10',
  color: 'grey.10',
  _hover: {
    bg: 'grey.10',
    color: 'grey.1'
  }
})

const outlineOneButton = defineStyle({
  bg: 'transparent',
  borderColor: 'grey.1',
  color: 'grey.1',
  _hover: {
    bg: 'grey.2',
    borderColor: 'grey.2',
    color: 'grey.11'
  }
})

const outlineTwoButton = defineStyle({
  bg: 'transparent',
  borderColor: 'grey.5',
  color: 'grey.1',
  _hover: {
    bg: 'grey.2',
    borderColor: 'grey.2',
    color: 'grey.11'
  }
})

const outlineBrandButton = defineStyle({
  bg: 'transparent',
  borderColor: 'brand.1',
  color: 'brand.1',
  _hover: {
    bg: 'brand.4'
  }
})

const alertButton = defineStyle({
  bg: 'alert.3',
  borderColor: 'alert.3',
  color: 'alert.1',
  _hover: {
    bg: 'alert.2',
    borderColor: 'alert.2',
  }
})

const successButton = defineStyle({
  bg: 'success.3',
  borderColor: 'success.3',
  color: 'success.1',
  _hover: {
    bg: 'success.2',
    borderColor: 'success.2'
  }
})

const brandDisabled = defineStyle({
  bg: 'brand.3',
  borderColor: 'brand.3',
  color: 'brand.4'
})

const linkButton = defineStyle({
  width: '146px',
  bg: 'grey.10',
  borderColor: 'transparent',
  color: 'grey.1',
  height: "20px",
  pt: "20px",
  _hover: {
    bg: 'grey.8',
  }
})

export const Button = defineStyleConfig({
    baseStyle: {
        fontFamily: 'button',
        fontWeight: 'semibold',
        borderRadius: '4px',
        border: '1.5px solid'
    },
    sizes: { 
      md: {
        fontSize: 'buttonMediumText',
        px: 5,
        py: 3, 
      },
      lg: { 
        fontSize: 'buttonBigText',
        px: 7, 
        py: 3,
      },
    },
    variants: {
        custom: {
            _hover: {
                transform: "scale(1.05, 1.05)",
                opacity: '0.9',
                border: 'none',
            },
        },
        _disabed: {
          brandDisabled
        },
        grey1: greyButton,
        negative: negativeButton,
        brand1: brandButton,
        brandOpacity: brandOpacityButton,
        light: lightButton,
        outlineLight: outlineLightButton,
        outline1: outlineOneButton,
        outline2: outlineTwoButton,
        outlineBrand1: outlineBrandButton,
        alert: alertButton,
        success: successButton,
        link: linkButton
    },
    defaultProps: {
        size: 'lg', 
        variant: 'custom',
    },
})


// Props: size (md ou lg), bg, color, borderColor, width


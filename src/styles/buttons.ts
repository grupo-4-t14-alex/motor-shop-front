import { defineStyleConfig } from "@chakra-ui/react"

export const Button = defineStyleConfig({
    baseStyle: {
        fontFamily: 'button',
        fontWeight: 'semibold',
        borderRadius: 'base',
        border: '1.5px',
        borderStyle: 'solid',
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
            }
        }
    },
    defaultProps: {
        size: 'lg', 
        variant: 'custom' 
    },
})

// Props: size (md ou lg), bg, color, borderColor, width


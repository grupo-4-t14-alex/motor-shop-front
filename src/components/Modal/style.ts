import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { modalAnatomy as parts } from '@chakra-ui/anatomy'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    dialog: {
        pr: "1.5rem",
        pl: "1.5rem",
    },
    header: {
        pr: "0",
        pl: "0",
        pt: "1rem",
        pb: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "heading.7",
        color: "grey.2",
        fontFamily: "Lexend"
    },
    body: {
        pr: "0",
        pl: "0",
        pt: "1rem"
    },
})

const footerEndVariant = definePartsStyle({
    footer: {
        display: "flex",
        justifyContent: "end",
        gap: "10px"
    }
})

const filterVariant = definePartsStyle({
    dialog: {
        maxW: "520px",
        w: "100%"
    },
    footer: {
        display: "flex",
        justifyContent: "end",
        gap: "10px"
    }
})

const footerStartVariant = definePartsStyle({
    footer: {
        display: "flex",
        justifyContent: "start",
        gap: "10px"
    }
})

export const modalTheme = defineMultiStyleConfig({
    baseStyle, 
    variants: { footerStartVariant, footerEndVariant, filterVariant }
})
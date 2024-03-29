import { Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton } from "@chakra-ui/react"
import { ReactNode } from "react"

export interface Props {
    title: string,
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    variant: string
}

const ModalContainer = ({title, children, isOpen, onClose, variant}: Props) => {
    return (
        <Modal variant={variant} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    {title}
                    <ModalCloseButton/>
                </ModalHeader>
                {children}
            </ModalContent>
        </Modal>
    )
}

export default ModalContainer
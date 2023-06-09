import { Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    title: string,
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const ModalContainer = ({title, children, isOpen, onClose}: Props) => {
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
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
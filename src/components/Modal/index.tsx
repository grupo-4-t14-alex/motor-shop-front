import { ModalBody, Modal, ModalOverlay, ModalHeader, ModalContent, ModalFooter, Button, ModalCloseButton } from "@chakra-ui/react"
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
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalContainer
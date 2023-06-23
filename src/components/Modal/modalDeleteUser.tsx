import { ModalBody, ModalFooter, Text, Button } from "@chakra-ui/react"
import ModalContainer, { Props } from "."

interface iModal {
    isOpen: boolean
    onClose: () => void
}

export const ModalDeleteUser = ({isOpen, onClose}: iModal) => {
    return (
        <ModalContainer isOpen={isOpen} onClose={onClose} variant="filterVariant" title="Excluir Perfil">
            <ModalBody>
                <Text fontSize={"heading.7"} fontWeight={"medium"}>Tem certeza que deseja remover esta conta?</Text>
                <Text mt={"15px"} lineHeight={"28px"} fontSize={"body.1"} fontWeight={400}>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                </Text>
            </ModalBody>
            <ModalFooter>
                <Button variant="negative">Cancelar</Button>
                <Button variant="alert">Sim, excluir conta</Button>
            </ModalFooter>
        </ModalContainer>
    )
}
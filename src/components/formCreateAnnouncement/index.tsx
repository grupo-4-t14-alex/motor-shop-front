import { useDisclosure } from "@chakra-ui/hooks"
import ModalContainer from "../Modal"
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"


export const FormCreateAnnouncement = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            
            <button onClick={onOpen}>teste</button>
            <ModalContainer variant="footerStartVariant" title="Criar anuncio" onClose={onClose} isOpen={isOpen}>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                    <Input type='email' />
            </FormControl>
                
            </ModalContainer>
        
        
        </>     
    )
} 
import IconLeft from "../../components/IconLeft/left";
import FormCredito from "./FormCredito/FormCredito";
import * as C from './styled';

function Credito() {
    return(
        <>
            <IconLeft  margin="29px 0px 0px 32px" fontSize="24px" height="24px"></IconLeft>

            <C.TituloCredito>Opções <br/> disponíveis (3)</C.TituloCredito>

            <C.Divisor></C.Divisor>

            <FormCredito 
                valorEmprestimo={5000} 
                parcelas={12} 
                valorParcela={450} 
                cet={3.5} 
            />


        </>
    )
}

export default Credito;
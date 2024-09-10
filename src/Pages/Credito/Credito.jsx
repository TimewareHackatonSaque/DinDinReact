import IconLeft from "../../components/IconLeft/left";
import LineGradiente from "../../components/line/line";
import Espaco from "../../components/space/space";
import imagen1 from '../../imagens/pan.png';
import imagen2 from '../../imagens/santander.png';
import FormCredito from "./FormCredito/FormCredito";
import * as C from './styled';

function Credito() {
    return(
        <>
            <IconLeft  margin="29px 0px 0px 32px" fontSize="24px" height="24px"></IconLeft>

            <C.TituloCredito>Opções <br/> disponíveis (3)</C.TituloCredito>

            <Espaco height="30px"/>

            <C.DivLine>
                <LineGradiente
                width="80vw"
                height="2px"
                backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
                />
            </C.DivLine>
            
            <Espaco height="30px"/>

            <FormCredito 
                valorEmprestimo={5000} 
                parcelas={12} 
                valorParcela={450} 
                cet={3.5} 
                image={imagen1}
            />

            <FormCredito 
                valorEmprestimo={5000} 
                parcelas={12} 
                valorParcela={450} 
                cet={3.5} 
                image={imagen2}
            />

            <FormCredito 
                valorEmprestimo={5000} 
                parcelas={12} 
                valorParcela={450} 
                cet={3.5} 
                image={imagen1}
            />


        </>
    )
}

export default Credito;
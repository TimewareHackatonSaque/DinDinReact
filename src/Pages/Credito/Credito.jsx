import { Link, useLocation } from 'react-router-dom';
import IconLeft from "../../components/IconLeft/left";
import LineGradiente from "../../components/line/line";
import Espaco from "../../components/space/space";
import TextLine from "../../components/textLine/textLine";
import FormCredito from "./FormCredito/FormCredito";
import * as C from './styled';

function Credito() {
    const location = useLocation();
    const {ofertas} = location.state || {ofertas: []};

    return(
        <>   
            <Link to="/simulador">
                <IconLeft  margin="29px 0px 0px 32px" fontSize="24px" height="24px"></IconLeft>
            </Link>
            
            <TextLine
                fontWeight="600"
                fontSize="33px"
                color="#373737"
                margin="0px 0px 0px 50px"
            >
                Opções <br/> disponíveis (3)
            </TextLine>

            <Espaco height="30px"/>

            <C.DivLine>
                <LineGradiente
                width="80vw"
                height="2px"
                backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
                />
            </C.DivLine>
            
            <Espaco height="30px"/>

            {ofertas.length > 0 ?(
                ofertas.map((oferta, index) =>(
                    <FormCredito
                        key={index}
                        valorEmprestimo={oferta.valorEmprestimo}
                        parcelas={oferta.parcelas}
                        valorParcela={oferta.valorParcela}
                        cet={oferta.cet}
                        image={oferta.image}
                    />
                ))
            ) : (
                <TextLine>
                    Nenhuma oferta disponível
                </TextLine>
            )}
        </>
    );
}

export default Credito;
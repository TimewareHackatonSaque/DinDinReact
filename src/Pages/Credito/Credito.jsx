import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconLeft from "../../components/IconLeft/left";
import LineGradiente from "../../components/line/line";
import Espaco from "../../components/space/space";
import TextLine from '../../components/textLine/textLine';
import FormCredito from "./FormCredito/FormCredito";
import * as C from './styled';

function Credito() {
    const location = useLocation();
    const { ofertas } = location.state || {};

    return(
        <C.DivBody>  
            <div>
                <Link to="/home">  {/* Este link irá redirecionar para a home */}
                    <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px" />
                </Link>
                    
                <Espaco height="20px" />

                <C.TituloLogin>
                    Opções <br /> disponíveis ({ofertas.length})
                </C.TituloLogin>
            </div>

            <Espaco height="30px" />

            <C.DivLine>
                <LineGradiente
                    width="80vw"
                    height="2px"
                    backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
                />
            </C.DivLine>
            
            <Espaco height="30px" />

            <C.DivOpcoes>
                    {ofertas.length > 0 ? (
                    ofertas.map((oferta, index) => (
                    <FormCredito
                        key={index}
                        valorEmprestimo={oferta.loanAmount}
                        parcelas={oferta.numberOfInstallments}
                        valorParcela={oferta.installment}
                        cet={oferta.annualCET}
                        image={oferta.image} 
                    />
                    ))
                ) : (
                    <TextLine
                    fontWeight="600"
                    fontSize="33px"
                    color="#373737"
                    margin="0px 0px 0px 50px"
                    >
                    Nenhuma oferta disponível
                    </TextLine>
                )}

            </C.DivOpcoes>
        
        </C.DivBody>
    );
}

export default Credito;

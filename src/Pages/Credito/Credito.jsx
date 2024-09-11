import { Link, useLocation } from 'react-router-dom';
import IconLeft from "../../components/IconLeft/left";
import LineGradiente from "../../components/line/line";
import Espaco from "../../components/space/space";
import TextLine from '../../components/textLine/textLine';
import pan from '../../imagens/pan.png';
import FormCredito from "./FormCredito/FormCredito";
import * as C from './styled';

function Credito() {
    const location = useLocation();
    const {ofertas} = location.state || {ofertas: []};

    return(
        <C.DivBody>  

            
            <div>
                <Link to="/home">  {/* Este link irá redirecionar para a home */}
                <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px" />
                </Link>
                    
                    <Espaco height="20px"></Espaco>

                    <C.TituloLogin>
                        Opções <br/> disponíveis ({ofertas.length})
                    </C.TituloLogin>
            </div>

            <Espaco height="30px"/>

            <C.DivLine>
                <LineGradiente
                width="80vw"
                height="2px"
                backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
                />
            </C.DivLine>
            
            <Espaco height="30px"/>

            <C.DivOpcoes>
                <FormCredito valorEmprestimo={10} parcelas={10} valorParcela={10} cet={10} image={pan}></FormCredito>
                <FormCredito valorEmprestimo={10} parcelas={10} valorParcela={10} cet={10} image={pan}></FormCredito>
                <FormCredito valorEmprestimo={10} parcelas={10} valorParcela={10} cet={10} image={pan}></FormCredito>
                <FormCredito valorEmprestimo={10} parcelas={10} valorParcela={10} cet={10} image={pan}></FormCredito>
                <FormCredito valorEmprestimo={10} parcelas={10} valorParcela={10} cet={10} image={pan}></FormCredito>
            </C.DivOpcoes>

            

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
            ) : ( <TextLine></TextLine>
                /*<TextLine
                    fontWeight="600"
                    fontSize="33px"
                    color="#373737"
                    margin="0px 0px 0px 50px"
                >
                    Nenhuma oferta disponível
                </TextLine>*/
            )}
        </C.DivBody>
    );
}

export default Credito;
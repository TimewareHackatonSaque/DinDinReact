import Footer from "../../components/footer/footer";
import IconLeft from '../../components/IconLeft/left';
import { Link } from "react-router-dom";
import Espaco from "../../components/space/space"
import * as C from './styled';
import LineGradiente from '../../components/line/line';



function Historico() {

    return(

        <div>

            <div>
                <Link to="/home">  {/* Este link irá redirecionar para a home */}
                <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px" />
                </Link>
                    
                    <Espaco height="20px"></Espaco>

                    <C.TituloLogin>Histórico <br/>
                     de cotação
                    </C.TituloLogin>

            </div>

            <Espaco height="20px"/>

            <C.DivLine>
                <LineGradiente
                    width="80vw"
                    height="2px"
                    backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
                />
            </C.DivLine>

            <div>
                <C.Card>
                    <C.CardHeader>
                        <C.Instituicao>Banco XYZ</C.Instituicao>
                    </C.CardHeader>
                    <C.CardBody>
                        <C.ValorTotal>R$ 10.000,00</C.ValorTotal>
                        <C.Parcelas>12x de R$ 833,33</C.Parcelas>
                    </C.CardBody>
                </C.Card>

                <C.Card>
                    <C.CardHeader>
                        <C.Instituicao>Banco ABC</C.Instituicao>
                    </C.CardHeader>
                    <C.CardBody>
                        <C.ValorTotal>R$ 5.000,00</C.ValorTotal>
                        <C.Parcelas>6x de R$ 833,33</C.Parcelas>
                    </C.CardBody>
                </C.Card>

                {/* Adicione mais cards conforme necessário */}
            </div>

            <Espaco height="20px"/>

            <Footer />
       </div>
    );

}

export default Historico;
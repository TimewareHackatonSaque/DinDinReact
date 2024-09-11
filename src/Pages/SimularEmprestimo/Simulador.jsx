import { Link } from 'react-router-dom';
import IconLeft from '../../components/IconLeft/left';
import LineGradiente from '../../components/line/line';
import Espaco from '../../components/space/space';
import FormSimular from './FormSimular/formSimular';
import * as C from './styled';

function SimularEmp(){
  return(
    <div>

      <div>
      <Link to="/home">  {/* Este link irá redirecionar para a home */}
      <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px" />
      </Link>
        
        <Espaco height="20px"></Espaco>

        <C.TituloLogin>Simular <br/>
          empréstimo
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

      <Espaco height="20px"></Espaco>

      <FormSimular></FormSimular>

      
    </div>
  )
}

export default SimularEmp
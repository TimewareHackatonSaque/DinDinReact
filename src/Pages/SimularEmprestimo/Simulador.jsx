import IconLeft from '../../components/IconLeft/left';
import Espaco from '../../components/space/space';
import FormSimular from './FormSimular/formSimular';
import * as C from './styled';

function SimularEmp(){
  return(
    <div>

      <div>
        <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px"></IconLeft>
        
        <Espaco height="20px"></Espaco>

        <C.TituloLogin>Simular <br/>
          empréstimo
        </C.TituloLogin>
      </div>

      <line></line>

      <FormSimular></FormSimular>

      
    </div>
  )
}

export default SimularEmp
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import * as C from './styled';

function InputSenha({ children, ...props }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <C.Container>
      {React.cloneElement(children, {
        type: senhaVisivel ? 'text' : 'password',
        ...props
      })}
      <C.ToggleButton onClick={toggleSenhaVisivel} type='button'>
        {senhaVisivel ? <IoEye size={25} /> : <IoEyeOff size={25} />}
      </C.ToggleButton>
    </C.Container>
  );
}


export default InputSenha
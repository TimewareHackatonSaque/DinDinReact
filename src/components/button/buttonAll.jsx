import * as C from './styled';

function ButtonAll({ onClick, backgroundColor, children}) {
  return (
    <div>
      <C.ButtonAll
        className='montserrat-regular' 
        onClick={onClick} 
        backgroundColor={backgroundColor}>
          {children}
      </C.ButtonAll>
    </div>
  );
}

export default ButtonAll
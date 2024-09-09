import * as C from './styled';

function InputBox({ children, onChange, type }) {
  return (
    <div>
      <C.InputText
        className='montserrat-regular'
        onChange={onChange}
        type={type} 
        placeholder={children}
      />
    </div>
  );
}

export default InputBox;
import * as C from './styled';

function InputBox({value, justFy, display, padding, fontSize,fontFamily, width, border, children, onChange, type }) {
  return (
    <div>
      <C.InputText
        className='montserrat-regular'
        onChange={onChange}
        type={type} 
        border={border}
        placeholder={children}
        width={width}
        fontFamily={fontFamily}
        fontSize={fontSize}
        padding={padding}
        display={display}
        justFy={justFy}
        value={value}
      />
    </div>
  );
}

export default InputBox;
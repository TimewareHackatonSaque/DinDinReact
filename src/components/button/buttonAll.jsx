import * as C from './styled';

function ButtonAll({ type, colorSelect, margin, color,border, height, width, onClick, backgroundColor, children, fontFamily, fontWeight, fontSize}) {
  return (
    <div>
      <C.ButtonAll
        className='montserrat-regular' 
        onClick={onClick} 
        backgroundColor={backgroundColor}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        width={width}
        color={color}
        border={border}
        height={height}
        margin={margin}
        colorSelect={colorSelect}
        type={type}
        >
          {children}
      </C.ButtonAll>
    </div>
  );
}

export default ButtonAll
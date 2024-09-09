import * as C from './styled';

function TextLine({margin, fontSize, color, fontWeight, children, fontFamily}){
  return(
    <>
      <C.TextP
        fontWeight={fontWeight}
        margin={margin}
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
      >
        {children}
      </C.TextP>
    </>
  )
}

export default TextLine
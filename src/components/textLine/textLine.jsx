import * as C from './styled';

function TextLine({display, justFy, margin, fontSize, color, fontWeight, children, fontFamily}){
  return(
    <>
      <C.TextP
        fontWeight={fontWeight}
        margin={margin}
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        justFy={justFy}
        display={display}
      >
        {children}
      </C.TextP>
    </>
  )
}

export default TextLine
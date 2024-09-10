import * as C from './styled';

function LineGradiente({borderImgSource, borderImgSlice, padding, radius, children, width, height, border, backgroudColor, margin}){
  return (
    <div>
      <C.GradientLine
        width={width}
        height={height}
        border={border}
        backgroudColor={backgroudColor}
        margin={margin}
        radius={radius}
        padding={padding}
        borderImgSlice={borderImgSlice}
        borderImgSource={borderImgSource}
      >
      {children}
      </C.GradientLine>
    </div>
  );
};

export default LineGradiente;
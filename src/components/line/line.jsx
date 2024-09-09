import * as C from './styled';

function LineGradiente({ width, height, border, backgroudColor, margin}){
  return (
    <div>
      <C.GradientLine
        width={width}
        height={height}
        border={border}
        backgroudColor={backgroudColor}
        margin={margin}
      />
    </div>
  );
};

export default LineGradiente;
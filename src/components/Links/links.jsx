import * as C from './styled';

function Link({ href, color, children }) {
  return (
    <C.LinkA href={href} color={color}>
      {children}
    </C.LinkA>
  );
}

export default Link;
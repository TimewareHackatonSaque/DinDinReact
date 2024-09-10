import * as C from './styled';

function ImgLogin({Invert, image, width, height, maxWidth}){
    return(
        <C.DivImgLogin>
            <C.ImgPrincipal 
            Invert={Invert}
            src={image}
            width={width}
            height={height}
            maxWidth={maxWidth}
            />
        </C.DivImgLogin>
    )
}


export default ImgLogin;
import * as C from './styled';

function ImgLogin({Invert, image, width}){
    return(
        <C.DivImgLogin>
            <C.ImgPrincipal 
            Invert={Invert}
            src={image}
            width={width}
            alt="Mascote CredFacil"/>
        </C.DivImgLogin>
    )
}


export default ImgLogin;
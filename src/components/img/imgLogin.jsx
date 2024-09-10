import image from './image.png';
import * as C from './styled';

function ImgLogin({Invert}){
    return(
        <C.DivImgLogin>
            <C.ImgPrincipal 
            Invert={Invert}
            src={image}
            alt="Mascote CredFacil"/>
        </C.DivImgLogin>
    )
}

export default ImgLogin;
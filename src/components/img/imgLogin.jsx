import * as C from './styled';
import image from './image.png'

function ImgLogin(){
    return(
        <C.DivImgLogin>
            <C.ImgPrincipal src={image}
            alt="Mascote CredFacil"/>
        </C.DivImgLogin>
    )
}

export default ImgLogin;
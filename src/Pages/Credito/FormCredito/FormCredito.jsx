import { useState } from 'react';
import ButtonAll from '../../../components/button/buttonAll';
import ImgLogin from '../../../components/img/imgLogin';
import LineGradiente from '../../../components/line/line';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import ModalBottomSheet from '../../../components/ModalBottomSheet/ModalBottomSheet';
import * as C from './styled';


function FormCredito({ valorEmprestimo, parcelas, valorParcela, cet, image }) {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const solicitarEmprestimo = () => {
    alert(`Solicitando empréstimo de R$ ${valorEmprestimo}`);
  };

  // Função para abrir o modal
  const abrirModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <C.Container>
        <ImgLogin image={image} maxWidth="90px" height="auto"></ImgLogin>
        <C.DivLine>
          <LineGradiente
            width="290px"
            height="1.26px"
            backgroudColor="#00000024"
          />
        </C.DivLine>
        <Espaco height="10px"></Espaco>

        <TextLine fontWeight="400" fontSize="20px" margin="0px">
          Empréstimo Pessoal
        </TextLine>
        <Espaco height="10px"></Espaco>

        <TextLine fontWeight="700" fontSize="27px" color="#373737" margin="0px">
          Valor R$ {valorEmprestimo.toFixed(2)}
        </TextLine>

        <TextLine fontWeight="400" fontSize="18px">
          {parcelas}x de R$ {valorParcela.toFixed(2)}
        </TextLine>

        <LineGradiente
          width="180px"
          height="27px"
          backgroudColor="white"
          margin="0px auto"
          padding="2px"
          border="1.26px solid"
          radius="11.32px"
          borderImgSlice="1"
          borderImgSource="linear-gradient(90deg, #048F44 0%, #F6811D 100%)"
        >
          {
            <TextLine fontWeight="700" fontSize="12.5px" margin="5px">
              CET de {cet}%
            </TextLine>
          }
        </LineGradiente>

        <Espaco height="10px"></Espaco>

        <ButtonAll
          fontFamily="Nunito, sans-serif"
          fontSize="13px"
          fontWeight="900"
          width="290px"
          height="43px"
          className="solicitar"
          backgroundColor="#ff8c00"
          onClick={solicitarEmprestimo}
        >
          Solicitar
        </ButtonAll>

        <Espaco height="15px"></Espaco>

        {/* Botão que abre o modal */}
        <ButtonAll
          fontFamily="Nunito, sans-serif"
          fontSize="13px"
          fontWeight="900"
          width="290px"
          height="43px"
          className="detalhes"
          backgroundColor="white"
          border="1px solid #ff8c00"
          color="#ff8c00"
          onClick={abrirModal}
        >
          Ver detalhes
        </ButtonAll>
        <Espaco height="10px"></Espaco>
      </C.Container>

      {/* ModalBottomSheet que será exibido ao clicar no botão */}
      <ModalBottomSheet isOpen={isModalOpen} onClose={fecharModal} />
    </>
  );
}

export default FormCredito;

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import IconLeft from '../../components/IconLeft/left';
import LineGradiente from '../../components/line/line';
import Espaco from "../../components/space/space";
import * as C from './styled';

function Historico() {
  const [id, setId] = useState('');
  const [data, setData] = useState([]); // Adicione o estado data
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Recupera o userId do localStorage e define no estado
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.user) {
        setId(parsedUser.user.id);
      }
    }
  }, []);
  
  useEffect(() => {
    // Faz a requisição apenas se o id estiver disponível
    const fetchSimulationDetails = async () => {
      if (id) {
        try {
          const url = `http://localhost:3001/historico/user/${id}`;
  
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
  
          const result = await response.json();
          setData(result); // Atualize o estado data
  
        } catch (err) {
          console.error('Erro ao consultar ofertas:', err);
          setError('Ocorreu um erro ao consultar as ofertas.');
        }
      }
    };
  
    fetchSimulationDetails();
  }, [id]); 

  return (
    <div>
      <div>
        <Link to="/home">  {/* Este link irá redirecionar para a home */}
          <IconLeft margin="29px 0px 0px 32px" fontSize="24px" height="24px" />
        </Link>
          
        <Espaco height="20px"></Espaco>

        <C.TituloLogin>Histórico <br/> de cotação</C.TituloLogin>
      </div>

      <Espaco height="20px"/>

      <C.DivLine>
        <LineGradiente
          width="80vw"
          height="2px"
          backgroudColor="linear-gradient(270deg, #048F44 0%, #F69F00 100%)"
        />
      </C.DivLine>

      <div>
        <C.Card>
            {error && <p>{error}</p>}
            {data.length > 0 ? (
            data.map((item, index) => (
                <div key={index}>
                <C.CardHeader>
                    <C.Instituicao>Cotação</C.Instituicao>
                </C.CardHeader>
                <C.CardBody>
                    <C.ValorTotal>R$ {item.loanAmount}</C.ValorTotal>
                    <C.Parcelas>{item.numberOfInstallments}x de R$ {item.installment}</C.Parcelas>
                </C.CardBody>
                </div>
            ))
            ) : (
            <p>Nenhuma simulação encontrada.</p>
            )}
            
        </C.Card>
      </div>

      <Espaco height="20px"/>

      <Footer />
    </div>
  );
}

export default Historico;

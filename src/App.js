import './App.css';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/home';
import Login from './Pages/login/login';
import { BrowserRouter as Router } from 'react-router-dom';  // Importa o BrowserRouter

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
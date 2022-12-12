import './App.css';
import Pagina_Home from './Paginas/Pagina_Home.jsx'
import Pagina_psicologo from './Paginas/Pagina_psicologo.jsx';
import Pagina_cadatro_vaga from './Paginas/Pagina_cadastro_vaga';
import Pagina_Cadatro_Login from './Paginas/Pagina_Cadastro_Login'
import Pagina_Pesquisar_vaga from './Paginas/Pagina_Pesquisar_vaga.jsx'
import Pagina_Cadastro_empresa from './Paginas/Pagina_Cadastro_empresa'
import Perfil_Empresa from './novoComponente/Perfil_Empresa'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      
    <Routes>
      
      <Route path='/' element={<Pagina_Home />} />
      <Route path='/Pagina_psicologo' element={<Pagina_psicologo />} />
      <Route path='/Pagina_cadastro_vaga' element={<Pagina_cadatro_vaga />} />
      <Route path='/Pagina_Cadastro_Login' element={<Pagina_Cadatro_Login />} />
      <Route path='/Pagina_Pesquisar_vaga' element={<Pagina_Pesquisar_vaga />} />
      <Route path='/Pagina_psicologo' element={<Pagina_Cadastro_empresa />} />
      <Route path='/Perfil_Empresa' element={<Perfil_Empresa/>} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
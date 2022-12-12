import Header from '../Componentes/Header.jsx';
import Registro_psicologo from '../Componentes/Registro_psicologo.jsx'
import Perfil_Consulta from '../Componentes/Perfil_Consulta.jsx'
import Consulta from '../Componentes/Consulta.jsx'
import Paciente from '../Componentes/Paciente.jsx';
import Calendario from '../Componentes/Calendario.jsx';
import Rodape from '../Componentes/Rodape.jsx';


function Pagina_psicologo() {
    return (
      <>
      <Header />
      <Registro_psicologo />
      <Perfil_Consulta />
      <Consulta />
      <Paciente />
      <Calendario />
      <Rodape />
      </>
    )
  }
  
  export default Pagina_psicologo;
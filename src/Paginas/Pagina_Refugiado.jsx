import Header from '../Componentes/Header.jsx';
import Registro_psicologo from '../Componentes/Registro_psicologo.jsx'
import Perfil_Refugiado from '../novoComponente/Perfil_Refugiado'
import Psicologo_disp from '../novoComponente/Psicologo_disp';
import Agenda from '../novoComponente/Agenda';
import Rodape from '../Componentes/Rodape.jsx';


function Pagina_Refugiado() {
    return (
      <>
      <Header />
      <Perfil_Refugiado />
      <Psicologo_disp />
      <Agenda />
      <Rodape />
      </>
    )
  }
  
  export default Pagina_Refugiado;
import Header from '../Componentes/Header.jsx';
import Registro_Ong from '../novoComponente/Registro_Ong.jsx'
import Rodape from '../Componentes/Rodape.jsx';
import Perfil_Ong from '../novoComponente/Perfil_Ong.jsx';
import Refugiados from '../novoComponente/Refugiados.jsx';
import Registro_Refugiado from '../novoComponente/Registro_Refugiado.jsx'

function Pagina_Ong() {
    return (
      <>
      <Header />
      <Registro_Ong />
      <Perfil_Ong />
      <Refugiados />
      <Registro_Refugiado />
      <Rodape />
      </>
    )
  }
  
  export default Pagina_Ong;
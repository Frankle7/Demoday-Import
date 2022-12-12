import Header from '../Componentes/Header.jsx';
import Home from '../Componentes/Home.jsx'
import QuemSomos from '../Componentes/QuemSomos.jsx'
import Impacto from '../Componentes/Impacto.jsx'
import Doacao from '../Componentes/Doacao.jsx';
import Rodape from '../Componentes/Rodape.jsx';
import Carrosel from '../Componentes/Carrosel';

function Pagina_Home() {
    return (
      <>
      <Header />
      <Home />
      <Carrosel />
      <QuemSomos />  
      <Doacao />
      <Impacto />
      <Rodape />
      </>
    )
  }
  
  export default Pagina_Home;
import Registro_Empresa from '../Componentes/Registro_Empresa';
import Cadastro_Vaga from '../Componentes/Cadastro_Vaga.jsx';
import Vagas from '../Componentes/Vagas.jsx'
import Perfil_Empresa from '../novoComponente/Perfil_Empresa';
import Previa_Vaga from '../novoComponente/Previa_Vaga'
import Header from '../Componentes/Header.jsx';
import Rodape from '../Componentes/Rodape.jsx';
import Candidatos from '../novoComponente/Candidatos';
import Editar_Empresa from '../novoComponente/Editar_Empresa';

function Pagina_Cadatro_Empresa() {
    return (
      <>
      <Header />
      <Registro_Empresa />
      <Perfil_Empresa />
      <Cadastro_Vaga />
      <Vagas />
      <Previa_Vaga />
      <Candidatos />
      <Editar_Empresa />
      <Rodape />
      </>
    )
  }
  
  export default Pagina_Cadatro_Empresa;
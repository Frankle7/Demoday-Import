import styles from '../novoCss/Perfil_Refugiado.module.css'
import Perfil from '../Componentes/Perfil.jsx'
import fotorefugiado from '../imagens/Ellipse 34.png'
import Consulta_Refugiado from './Consulta_Refugiado';
import Menu_impacto from '../Componentes/MenuImpacto';
import imagem1 from '../imagens/sus.jpg'
import imagem2 from '../imagens/cpf.png'
import imagem3 from '../imagens/carteiratrabalho.png'
import imagem4 from '../imagens/cand_vagas.png'
import imagem5 from '../imagens/cursos.png'
import imagem6 from '../imagens/mercado.png'



function Perfil_Refugiado(){
    return(
        <section className={styles.Perfil_Refugiado}>
            <div className={styles.Perfil}>
            <Perfil foto={fotorefugiado} 
            nome="Refugiado" 
            descricao="Gana" 
            quem_sou="Eu me chamo Gabriel, tenho 22 anos e vim refugiado de Gana, estou no Brasil a 2 anos, no meu país eu era engenheiro mas precisei sair de lá por conta da guerra" />
            </div>
            {/* <div className={styles.at_curriculo}>
                <button>Editar currículo</button>
            </div> */}
            <Consulta_Refugiado />
            <div className={styles.servicos}>
            <Menu_impacto img={imagem1} titulo="Como tirar o cartão do SUS?" descricao={""} />
            <Menu_impacto img={imagem2} titulo="Como tirar o CPF?" descricao={""} />
            <Menu_impacto img={imagem3} titulo="Como tirar carteira de Trabalho e Previdencia" descricao={""} />
            <Menu_impacto img={imagem4} titulo="Vagas que você se candidatou" descricao={""} />
            <Menu_impacto img={imagem5} titulo="Cursos" descricao={""} />
            <Menu_impacto img={imagem6} titulo="como está o mercado" descricao={""} />
            </div>
        </section>
    )
}
export default Perfil_Refugiado;
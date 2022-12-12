import styles from '../novoCss/Perfil_Empresa.module.css'
import Perfil_Empresa_Ong from './Perfil_Empresa_Ong'
import fotoempresa from '../imagens/Ellipse 71.png'
import refugi from '../imagens/Rectangle 592.png'
import cad_refugi from '../imagens/Rectangle 567.png'
import viz_perfil from '../imagens/Ellipse 85.png'
import lupa from '../imagens/Rectangle 568.png'



function Perfil_Empresa(){
    return(
        <section className={styles.Perfil_Empresa}>
            <div className={styles.Perfil}>
            <Perfil_Empresa_Ong
            foto={fotoempresa} 
            nome="Oracle SA Brasil" 
            descricao="Empregador" 
            quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
            </div>
            <div className={styles.caixihas}>
                <button id={styles.botaolaranja}> <img src={refugi} /> Visualizar Vaga </button>
                <button id={styles.botaomenor}> <img src={lupa} /> Quem se candidatou a vaga </button>
                <button> <img src={cad_refugi} /> Cadastrar mais Vagas </button>
                <button> <img src={viz_perfil} /> Visualizar perfil da sua </button>
            </div>
        </section>
    )
}
export default Perfil_Empresa;

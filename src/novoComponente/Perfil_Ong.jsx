import styles from '../novoCss/Perfil_Ong.module.css'
import Perfil_Ong_Empresa from './Perfil_Ong_Empresa'
import fotoong from '../imagens/Ellipse 70.png'
import refugi from '../imagens/Rectangle 592.png'
import cad_refugi from '../imagens/Rectangle 567.png'
import viz_perfil from '../imagens/Ellipse 84.png'



function Perfil_Ong(){
    return(
        <section className={styles.Perfil_Consulta}>
            <div className={styles.Perfil}>
            <Perfil_Ong_Empresa
            foto={fotoong} 
            nome="ONG" 
            descricao="São Paulo" 
            quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
            </div>
            <div className={styles.caixihas}>
                <button id={styles.botaolaranja}> <img src={refugi} /> Visualizar refugiado </button>
                <button> <img src={cad_refugi} /> Cadastrar refugiado </button>
                <button> <img src={viz_perfil} /> Vizualizar perfil da ONG </button>
            </div>
        </section>
    )
}
export default Perfil_Ong;
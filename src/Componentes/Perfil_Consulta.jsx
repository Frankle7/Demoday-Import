import styles from '../css/Perfil_Consulta.module.css'
import Perfil from '../Componentes/Perfil.jsx'
import fotopsicologo from '../imagens/fotopsicologo.png'
import paciente from '../imagens/paciente.png'
import horariomarcado from '../imagens/horariomarcado.png'
import viz_perfil from '../imagens/viz_perfil.png'



function Perfil_Consulta(){
    return(
        <section className={styles.Perfil_Consulta}>
            <div className={styles.Perfil}>
            <Perfil foto={fotopsicologo} 
            nome="Psicologo" 
            descricao="CRM" 
            descricao2="7265423274" 
            quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
            </div>
            <div className={styles.caixihas}>
                <button> <img src={paciente} /> Pacientes </button>
                <button> <img src={horariomarcado} /> Horarios Marcados </button>
                <button> <img src={viz_perfil} /> Vizualizar meu perfil </button>
            </div>

            
        </section>
    )
}
export default Perfil_Consulta;
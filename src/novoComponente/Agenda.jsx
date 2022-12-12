import styles from '../novoCss/Agenda.module.css'
import Perfil from '../Componentes/Perfil.jsx'
import fotopsicologa from '../imagens/foto psicologa.png';

function Agenda(){
    return(
        <section className={styles.calendario}>
        <div className={styles.perfil_psicologo}>
        <Perfil foto={fotopsicologa} 
        nome="Maria Carvalho" 
        descricao="CRO-SP-CD_684684" 
        descricao2="Psicologa" 
        quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
        </div>
        <div className={styles.area_calendario}>
            <h1>Agendamento Online</h1>
        </div>
        <div className={styles.agendamento}>
            <iframe width="90%" height="90%" src="https://calendar.google.com/calendar/embed?src=jpteles63%40gmail.com&ctz=UTC"></iframe>
        </div>
        </section>
    )
}
export default Agenda;
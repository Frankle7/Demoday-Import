import styles from '../css/Calendario.module.css'
import Perfil from '../Componentes/Perfil.jsx'
import fotopsicologo from '../imagens/fotopsicologo.png';
import calendario_relogio from '../imagens/calendariorelogio.png'

function Calendario(){
    return(
        <section className={styles.calendario}>
        <div className={styles.perfil_psicologo}>
        <Perfil foto={fotopsicologo} 
        nome="Psicologo" 
        descricao="Brasil" 
        descricao2="" 
        quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
        </div>
        <div className={styles.linhaazul}>
            p
        </div>
        <div className={styles.area_calendario}>
            <h1>Calendário</h1>
        </div>
        <div className={styles.agendamento}>
            <iframe width="100%" height="100%" src="https://calendar.google.com/calendar/embed?src=jpteles63%40gmail.com&ctz=UTC"></iframe>
        </div>
        <div className={styles.img_calendario}>
            <img src={calendario_relogio} alt="calendario relogio"></img>
        </div>
        </section>
    )
}
export default Calendario;
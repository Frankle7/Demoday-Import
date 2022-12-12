import styles from '../css/Paciente.module.css';
import Perfil from '../Componentes/Perfil.jsx';
import fotopsicologo from '../imagens/fotopsicologo.png';
import Perfil_pessoas from '../Componentes/Perfil_pessoas.jsx'
import lupa from '../imagens/lupa.png'

function Refugiados(){
    return(
        <section className={styles.paciente}>
            <div className={styles.perfil_psicologo}>
            <Perfil foto={fotopsicologo} 
            nome="Empregador" 
            descricao="Jamaica" 
            descricao2="" 
            quem_sou="Gosto de carbonara, tortinha de maçã do mc e andar de bicicleta. Possuo certificado de agiotagem por 12 anos, sei fazer empalamento, acessar a deep web e tenho histórico de rinha de galo e de gostar de garotos padrão. <3    >:(" />
            </div>
            <div className={styles.linha}>p</div>

            <div className={styles.area_pessoas}>
                <div className={styles.expecificacao_pesquisa}>
                    <div className={styles.expecificacao}>
                        <p>Refugiados</p>
                </div>
            <div className={styles.pesquisar}>
                <div className={styles.form_pessoa}>
                    <input type="search" id={styles.pesquisar} class="form-control" /> 
                    <button type="button" className={styles.procurar_usuario}>
                    <img src={lupa}></img>
                    </button>
                </div>
            </div>
        </div>
        </div>

            <div className={styles.pessoas}>
            <Perfil_pessoas
            expecificacao="Pacientes"
            foto_usuario={fotopsicologo} 
            nome_usuario="jotape teles de souza"
            descricao_usuario="dev front-end"
            descricao2_usuario="palmeirense" />
            <Perfil_pessoas
            expecificacao="Pacientes"
            foto_usuario={fotopsicologo} 
            nome_usuario="jotape teles de souza"
            descricao_usuario="dev front-end"
            descricao2_usuario="palmeirense" />
            <Perfil_pessoas
            expecificacao="Pacientes"
            foto_usuario={fotopsicologo} 
            nome_usuario="jotape teles de souza"
            descricao_usuario="dev front-end"
            descricao2_usuario="palmeirense" />
            </div>
        </section>
    )
}
export default Refugiados;
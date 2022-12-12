import styles from '../novoCss/Psicologo_disp.module.css';
import Perfil from '../Componentes/Perfil.jsx';
import fotopsicologo from '../imagens/Rectangle 261.png';
import fotopsicologo2 from '../imagens/Rectangle 261 (1).png';
import fotopsicologo3 from '../imagens/Rectangle 261 (2).png';
import fotorefugi from '../imagens/Ellipse 172.png'
import Perfil_pessoas from '../Componentes/Perfil_pessoas'
import lupa from '../imagens/lupa.png'

function Psicologo_disp(){
    return(
        <section className={styles.paciente}>
            <div className={styles.perfil_psicologo}>
            <Perfil foto={fotorefugi} 
            nome="Farid Hassim" 
            descricao="Síria" 
            descricao2="" 
            quem_sou="Eu me chamo Farid, tenho 42 anos e vim refugiado de Síria, estou no Brasil a 2 anos, no meu país eu era engenheiro mas precisei sair de lá por conta da guerra" />
            </div>
            <div className={styles.linha}>p</div>

            <div className={styles.area_pessoas}>
                <div className={styles.expecificacao_pesquisa}>
                    <div className={styles.expecificacao}>
                        <p>Psicologos dísponiveis</p>
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
            nome_usuario="Renata Maia"
            descricao_usuario="CRP - 22.00.111.33"
            descricao2_usuario="" />
            <Perfil_pessoas
            expecificacao="Pacientes"
            foto_usuario={fotopsicologo2} 
            nome_usuario="Jonas Ribeiro"
            descricao_usuario="CRP - 11.22.333.44"
            descricao2_usuario="" />
            <Perfil_pessoas
            expecificacao="Pacientes"
            foto_usuario={fotopsicologo3} 
            nome_usuario="Lucas rubio"
            descricao_usuario="CRP - 33.44.555.66"
            descricao2_usuario="" />
            </div>
        </section>
    )
}
export default Psicologo_disp;
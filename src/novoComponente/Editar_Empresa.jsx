import styles from '../novoCss/Editar_Empresa.module.css'
import fotoempresa from '../imagens/fotooracle.png'
import Novo_Perfil from './Novo_Perfil'
import img_empresa from '../imagens/img_empresa.png'



function Editar_Empresa(){
    return(
        <section className={styles.Perfil_Consulta}>
            <div className={styles.Perfil}>
            <Novo_Perfil
            foto={fotoempresa} 
            nome="Oracle" 
            descricao="Recrutador" 
            img_empresa={img_empresa} />
            </div>
            <div className={styles.container_texto}>
                <div className={styles.txt_qmsomos}>
                    <h1>Quem somos?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
                <div className={styles.informacoes1}>
                    <p>Email</p>
                    <p>Cidade/Estado</p>
                    <p>Email</p>
                    <p>Telefone</p>
                </div>
                <div className={styles.informacoes2}>
                    <p>Telefone</p>
                    <p>Santo André, SP</p>
                    <p>romeirogui@hotmail.com</p>
                    <p>+551199529382</p>
                </div>
            </div>
            <div className={styles.atu_cad}>
                <button>Atualizar Cadatro</button>
            </div>
        </section>
    )
}
export default Editar_Empresa;
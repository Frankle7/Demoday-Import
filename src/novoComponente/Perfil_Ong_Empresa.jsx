import styles from '../novoCss/Perfil_Ong_Empresa.module.css'
import verificado from '../imagens/verificado.png'

function Perfil_Ong_Empresa({
  foto, nome, descricao, quem_sou
}) {
  return (
    <div className={styles.Foto}>
        <div id={styles.imagem_fundo}>
            <div className={styles.Foto_redes_imagens}>
                <img src={foto} alt="pp" id={styles.foto} />
            </div>
            <div className={styles.Nome_descricao}>
                <h1>{nome}</h1>
                <p>{descricao}</p>
            </div>
            <div className={styles.Verificado}>
                <img src={verificado} alt="verificado" />
            </div>
        </div>
        <div className={styles.quemsomos}>
        <h1>Quem Somos?</h1>
        <div className={styles.resumo}>
            <p>{quem_sou}</p>
        </div>
        </div>
    </div>)
}

export default Perfil_Ong_Empresa;
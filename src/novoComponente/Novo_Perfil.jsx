import styles from '../novoCss/Novo_Perfil.module.css'
import verificado from '../imagens/verificado.png';

function Novo_Perfil({
  foto, nome, descricao, img_empresa
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
            <img src={img_empresa} alt='imagem empresa' />
        </div>
    </div>)
}

export default Novo_Perfil;
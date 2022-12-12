import styles from '../css/Perfil.module.css'
import face from '../imagens/facebook.png'
import insta from '../imagens/instagram.png'
import twitter from '../imagens/twitter.png'
import verificado from '../imagens/verificado.png'

function Perfil({
  foto, nome, descricao, descricao2, quem_sou
}) {
  return (

    <div className={styles.Foto_redes}>
        <div className={styles.Foto_redes_imagens}>
            <img src={foto} alt="pp" id={styles.foto} />
            <img src={face} alt="pp" className={styles.redes_Foto} />
            <img src={insta} alt="pp" className={styles.redes_Foto} />
            <img src={twitter} alt="pp" className={styles.redes_Foto} />
        </div>
        <div className={styles.Nome_descricao}>
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <p>{descricao2}</p>
        </div>
        <div className={styles.Verificado}>
            <img src={verificado} alt="verificado" />
        </div>
        <div className={styles.resumo}>
            <p>{quem_sou}</p>
        </div>
    </div>)
}

export default Perfil;
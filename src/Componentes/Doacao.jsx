import styles from '../css/Doacao.module.css'
import imagemmao from '../imagens/image 1204.png'

function Doacao(){
    return(
        <section className={styles.Doacao}>
            <img src={imagemmao} className={styles.doar} />
            <div className={styles.tit_botao}>
                    <h1>Ajude a mudar a vida dessas pessoas</h1>
                <div className={styles.botoes}>
                    <button type="submit" className={styles.receber_noticias}>RECEBER NOTÍCIAS</button>
                    <button type="submit" id={styles.doar}>DOAR</button>
                </div>
                </div>
        </section>
    )
}
export default Doacao;
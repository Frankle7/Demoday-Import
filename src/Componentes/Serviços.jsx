import styles from '../css/Servicos.module.css'
import img1 from '../imagens/Rectangle 723.png'
import img2 from '../imagens/Rectangle 722.png'
import img3 from '../imagens/Rectangle 709.png'
import img4 from '../imagens/Ellipse 171.png'
import logoimport from '../imagens/logoimport.png'


function Servicos(){
    return(
        <section className={styles.Servicos}>
            <div className={styles.div_import}>
                <div id={styles.azul}>
                    <img src={logoimport} alt="" />
                </div>
                </div>
            <div className={styles.areas}>
                <div className={styles.imgservico} id={styles.refugiado}>
                    <img src={img1} alt='.'/>
                </div>
                <div className={styles.textoservico}>
                    <h1>Área do refúgiado</h1>
                    <p>Nessa área, o refúgido encontra de forma acessivel e intuitiva todos os nossos serviços prestados. Aqui ele perceberá que nós nos Importamos. </p>
                </div>
            </div>
            <div className={styles.areas}>
                <div className={styles.textoservico} id={styles.apoio_ps}>
                    <h1>Apoio psicológico</h1>
                    <p>Muitos refugiados sofrem traumas durante seu processo de busca por um novo lar, por isso temos um foco especial em cuidar da saúde mental dessas pessoas. </p>
                </div>
                <div className={styles.imgservico}>
                    <img src={img2} alt='.'/>
                </div>
            </div>
            <div className={styles.areas}>
                <div className={styles.imgservico}>
                    <img src={img3} alt='.'/>
                </div>
                <div className={styles.textoservico} id={styles.recrutadores}>
                    <h1>Recrutadores</h1>
                    <p>Os recrutadores cumprem um papel fundamental na Import: fazer a ligação entre os refugiados em busca de oportuniades e empregadores que desejam ajudar.</p>
                </div>
            </div>
            <div className={styles.areas}>
                <div className={styles.textoservico} id={styles.ongs}>
                    <h1>ONGs Parceiras</h1>
                    <p>A Import busca formalizar cada vez mais parceiras com ONGs e instituições de acolhimento de refugiados, praticando uma politica de apoio mutuo para que seja possivel ajudar o maior número de pessoas. </p>
                </div>
                <div className={styles.imgservico}>
                    <img src={img4} alt='.'/>
                </div>
            </div>
        </section>
    )
}
export default Servicos;


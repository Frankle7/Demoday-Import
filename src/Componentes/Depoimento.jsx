import styles from '../css/Depoimento.module.css'
import foto_depoimento1 from '../imagens/foto_depoimento1.png'
import foto_depoimento2 from '../imagens/foto_depoimento2.png'
import foto_depoimento3 from '../imagens/foto_depoimento3.png'
import foto_depoimento4 from '../imagens/foto_depoimento4.png'


function Depoimento(){
    return(
        <section className={styles.depoimento}>
            <div className={styles.depoimento_pessoas}>
                <div className={styles.depoimento_foto}>
                    <img src={foto_depoimento1} alt="" />
                </div>
                <div className={styles.depoimento_texto}>
                    <h1>Ayana Dajil</h1>
                    <p>
                    “Como refugiada, enfrentamos muitas dificuldades antes de integrar o sistema, conseguir um emprego ou continuar nossos estudos. A Import é um dos melhores institutos de São Paulo porque ajuda refugiados de todo o mundo, integrando, ensinando o idioma local, ajudando a conseguir um emprego.”
                    </p>
                </div>  
            </div>
            <div className={styles.depoimento_pessoas}>
                <div className={styles.depoimento_foto}>
                    <img src={foto_depoimento2} alt="" />
                </div>
                <div className={styles.depoimento_texto}>
                    <h1>Anisa Bethari</h1>
                    <p>Os Primeiros dias para uma refugiada em um novo Pais são muito dificéis, a Import me ajudou com direcionamento para Ongs e institutos que poderiam me ajudar com o Português e documentação, sou muito grata.</p>
                </div>  
            </div>
            <div className={styles.depoimento_pessoas}>
                <div className={styles.depoimento_foto}>
                    <img src={foto_depoimento3} alt="" />
                </div>
                <div className={styles.depoimento_texto}>
                    <h1>Iman Sahir</h1>
                    <p>
                    “O Psicológico abalado acaba por nos impedir de seguir em frente, a Import foi muito importante para que eu conseguisse reconstruir minha vida a partir de uma saúde mental estável, superei traumas e venci barreiras do meu passado que me restringiam até hoje”
                    </p>
                </div>  
            </div>
            <div className={styles.depoimento_pessoas}>
                <div className={styles.depoimento_foto}>
                    <img src={foto_depoimento4} alt="" id={styles.fotogrande}/>
                </div>
                <div className={styles.depoimento_texto}>
                    <h1>Ayana Dajil</h1>
                    <p>
                    “O Psicológico abalado acaba por nos impedir de seguir em frente, a Import foi muito importante para que eu conseguisse reconstruir minha vida a partir de uma saúde mental estável, superei traumas e venci barreiras do meu passado que me restringiam até hoje”
                    </p>
                </div>  
            </div>
        </section>
            
        
    )
}
export default Depoimento;
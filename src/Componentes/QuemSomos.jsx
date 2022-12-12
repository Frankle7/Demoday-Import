import styles from '../css/QuemSomos.module.css'

import refugiados2 from '../imagens/refugiados2.png'
import logoimport from '../imagens/logoimport.png'
import refugio from '../imagens/foto_depoimento1.png'
import refugio1 from '../imagens/foto_depoimento2.png'
import refugio2 from '../imagens/foto_depoimento3.png'

function QuemSomos(){
    return(
        <section className={styles.QuemSomos}>
        <aside id={styles.azul}>
                    <img src={logoimport} alt="" />
                </aside>
                <div className={styles.txtquem}>
            <h1>Quem Somos</h1>
            <p>A Import é uma plataforma criada para auxiliar refúgiados a encontrarem apoio no Brasil, desde linguistico, passando pelas questões de documentação, até conseguirem um emprego ou meio de renda. Além disso, o nosso foco é proporcionar apoio psicologico para essas pessoas, para que elas possam reconstruir suas vidas com saúde mental.</p>
            <img src={refugiados2} alt="" />
            </div>
            <div className={styles.divT}>
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio} alt="" /></div>
                <div className={styles.depoitxt}><h2>aleluia</h2><p>A Import é uma plataforma criada para auxiliar refúgiados a encontrarem apoio no Brasil, desde linguistico, passando pelas questões de documentação, até conseguirem um emprego ou meio de renda. Além disso, o nosso foco é proporcionar apoio psicologico</p></div>

            </div>    
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio1} alt="" /></div>
                <div className={styles.depoitxt}><h2>aleluia</h2><p>A Import é uma plataforma criada para auxiliar refúgiados a encontrarem apoio no Brasil, desde linguistico, passando pelas questões de documentação, até conseguirem um emprego ou meio de renda. Além disso, o nosso foco é proporcionar apoio psicologico</p></div>
                
            </div>    
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio2} alt="" /></div>
                <div className={styles.depoitxt}><h2>aleluia</h2><p>A Import é uma plataforma criada para auxiliar refúgiados a encontrarem apoio no Brasil, desde linguistico, passando pelas questões de documentação, até conseguirem um emprego ou meio de renda. Além disso, o nosso foco é proporcionar apoio psicologico</p></div>
                
            </div>    
            </div>
            

            
        </section>
    )
}
export default QuemSomos;
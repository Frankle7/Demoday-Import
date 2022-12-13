import styles from '../css/QuemSomos.module.css'

import refugiados2 from '../imagens/refugiados2.png'
import logoimport from '../imagens/logoimport.png'
import refugio from '../imagens/depoimento1.png'
import refugio1 from '../imagens/mulhercria.jpg'
import refugio2 from '../imagens/meninalama.jpg'

function QuemSomos(){
    return(
        <section className={styles.QuemSomos}>
        <aside id={styles.azul}>
                    <img src={logoimport} alt="" />
                </aside>
                <div className={styles.txtquem}>
            <h1>Quem Somos</h1>
            <p>Import é a plataforma que surge para ajudar pessoas, com o objetivo de mostrar que se importa. Observando a necessidade de tornar mais visível uma classe em desespero, para um refugiado que ao menos fala a língua do país de refúgio, será impossível para este conseguir um emprego, com isso nossa a plataforma oferece capacitação para o mercado de trabalho e sua vida pessoal com psicólogos e professores de idiomas.</p>
            <img src={refugiados2} alt="" />
            </div>
            <div className={styles.divT}>
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio} alt="" /></div>
                <div className={styles.depoitxt}><p>A cada minuto, 25 pessoas são deslocadas à força em decorrência de conflitos ou perseguições. Estima-se que 13,6 milhões de pessoas foram deslocadas devido a conflitos ou perseguição em 2018. Esses são dados da ACNUR, a Agência da ONU para Refugiados, que constam no relatório global, publicado no ano de 2017</p></div>

            </div>    
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio1} alt="" /></div>
                <div className={styles.depoitxt}><p>Muitos são os fatores que influenciam pessoas a solicitarem refúgio noutro país, abandonando sua casa, e por diversos fatores, principalmente por não saber o idioma do país, dificultam o acesso ao mercado de trabalho, sendo impossivel conseguirem construir sua estabilidade.</p></div>
                
            </div>    
            <div className={styles.depoitotal}>

                <div className={styles.depoimage}><img src={refugio2} alt="" /></div>
                <div className={styles.depoitxt}><p>Todos nos temos nossas particularidades, e é isso que uma empresa precisa, opnião e experiências diversas, ajudando no crescimento e desenvolvimento da empresa; Segundo pesquisas da ACNUR, a diversidade estimula o trabalhador e torna o local de trabalho mais agradavél. </p></div>
                
            </div>    
            </div>
            

            
        </section>
    )
}
export default QuemSomos;
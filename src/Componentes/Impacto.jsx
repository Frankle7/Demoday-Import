import styles from '../css/Impacto.module.css'
import imagem1 from '../imagens/difusao.png'
import imagem2 from '../imagens/trabalho.png'
import imagem3 from '../imagens/doacao.png'
import imagem4 from '../imagens/direcionamento.png'
import imagem5 from '../imagens/documentacao.png'
import imagem6 from '../imagens/socioemocional.png'
import Menu_impacto from './MenuImpacto'
import logoimport from '../imagens/comogeramosimpacto.png';


function Impacto(){
    return(
        <section className={styles.impacto}>
        <aside id={styles.azul}>
                    <img src={logoimport} alt="" />
                </aside>
            <div className={styles.container_impacto}>
            <Menu_impacto img={imagem1} titulo="" descricao="Analisando a necessidade urgente de impactar mais pessoas com o problema da crise migratória no Brasil, fazemos um trabalho ativo de difusão de informações" />
            <Menu_impacto img={imagem2} titulo="" descricao="Existem muitas pessoas que assim como nós, realmente se importam. 
Essas pessoas nos auxiliam a manter o Import vivo." />
            <Menu_impacto img={imagem3} titulo="" descricao="Existem muitas pessoas que assim como nós, realmente se importam. 
Essas pessoas nos auxiliam a manter o Import vivo." />
            <Menu_impacto img={imagem5} titulo="" descricao="Analisando a necessidade urgente de impactar mais pessoas com o problema da crise migratória no Brasil, fazemos um trabalho ativo de difusão de informações" />
            <Menu_impacto img={imagem4} titulo="" descricao="Existem muitas pessoas que assim como nós, realmente se importam. 
Essas pessoas nos auxiliam a manter o Import vivo."/>
            <Menu_impacto img={imagem6} titulo="" descricao="Existem muitas pessoas que assim como nós, realmente se importam. 
Essas pessoas nos auxiliam a manter o Import vivo." />
            </div>
            
        </section>
        
    )
}
export default Impacto;
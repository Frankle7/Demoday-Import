import styles from "../css/Impacto.module.css";
import imagem1 from "../imagens/difusao.png";
import imagem2 from "../imagens/trabalho.png";
import imagem3 from "../imagens/doacao.png";
import imagem4 from "../imagens/direcionamento.png";
import imagem5 from "../imagens/documentacao.png";
import imagem6 from "../imagens/socioemocional.png";
import Menu_impacto from "./MenuImpacto";
import logoimport from "../imagens/comogeramosimpacto.png";

function Impacto() {
  return (
    <section className={styles.impacto}>
      <aside id={styles.azul}>
        <img src={logoimport} alt="" />
      </aside>
      <div className={styles.container_impacto}>
        <Menu_impacto
          img={imagem1}
          titulo=""
          descricao="Sabemos hoje o poder da rede social, com isso, divulgações em Redes poderá nós trazer tanto voluntários quanto doadores, ajudando muito no desenvolvimento do nosso objetivo"
        />
        <Menu_impacto
          img={imagem2}
          titulo=""
          descricao="Junto com voluntários podemos fazer com que os refugiados sejam vistos também como opção para vaga de trabalho"
        />
        <Menu_impacto
          img={imagem3}
          titulo=""
          descricao="Com doações podemos manter aulas de idiomas, terapia e nossa plataforma funcionando por muito tempo e ajudando cada vez mais pessoas."
        />
        <Menu_impacto
          img={imagem5}
          titulo=""
          descricao="Um grande problema é o que fazer para solicitar refúgio e onde solicitar, orientamos como solicitar os documentos para a legalização do refugiado no país de destino."
        />
        <Menu_impacto
          img={imagem4}
          titulo=""
          descricao="O projeto Integra, tem com base direcionar nossos usuários ao mercado de trabalho, capacitando com a língua do país, cursos preparatórios e ofertando vagas de trabalho"
        />
        <Menu_impacto
          img={imagem6}
          titulo=""
          descricao="Depois de tudo o que estes povos passaram, ainda viram muitas outras dificuldades, e nós nos importamos para com que estes consigam sentir-se bem em meio a tudo que estão vivendo."
        />
      </div>
    </section>
  );
}
export default Impacto;

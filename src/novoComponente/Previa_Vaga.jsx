import styles from '../novoCss/Previa_Vaga.module.css'
import Beneficios from '../Componentes/Beneficios_Vaga';
import imagem1 from '../imagens/Vector.png'
import imagem2 from '../imagens/Vector2.png'
import imgprevia from '../imagens/Rectangle 610.png'

function Previa_Vaga(){
    return(
        <section className={styles.vagas}>
            <div className={styles.previa_vaga}>
                <div className={styles.text_previa}>
                    <h1>Prévia da vaga</h1>
                </div>
                <div className={styles.img_previa}>
                    <img src={imgprevia} alt="imgprevia" />
                </div>
            </div>
            <div className={styles.detalhe_vaga}>
                <Beneficios empresa="Oracle" local="São Paulo - SP, a 21,3 Km de Você" salario="RS 10.000,00 a R$ 12.000,00 (Bruto mensal)" modo="Presencial" 
                descricao="Suporte SAP funcional no module SD"
                botao="Candidata-se"
                imagem1={imagem1} 
                imagem2={imagem2}
                descricao2="Suporte SAP funcional no module SD implação de notas tecnicas melhoras. Entender realizar configuração relacionados a calculo de valores de impostos no produto nas configurações Sap Localização Brasn (esquentas)."
                descricao3="Diferencial ter tudo em industria"
                descricao4="Beneficios:"
                descricao5="- Assistência médica"
                descricao6="- Assistência médica"
                descricao7="- Assistência médica"
                descricao8="- Assistência médica"
                numero_vagas="Número de vagas: 1" />
            </div>
        </section>
    )
}
export default Previa_Vaga;
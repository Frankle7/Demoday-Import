import styles from '../novoCss/Registro_Refugiado.module.css'
import imagemrefugi from '../imagens/Rectangle 310.png'


function Registro_Refugiado(){
    return(
        <section className={styles.registro_ong}>
            <div className={styles.formulario_ong}>
                <div className={styles.caixa_form}>
                    <label>Nome completo:</label>
                    <input type="texto" id={styles.nome} />
                </div>
                
                <div className={styles.caixa_form}>
                    <label for="email">Email:</label>
                    <input type="email" id={styles.email} name="email" />
                </div>
                
                <div className={styles.caixa_form}>
                    <label>Código de identificação:</label>
                    <input type="texto" id={styles.cnpj}/>
                </div>
                <div className={styles.caixa_form}>
                    <label>Nacionalidade:</label>
                    <input type="texto" id={styles.cnpj}/>
                </div>
                <div className={styles.caixa_form}>
                    <label>Telefone:</label>
                    <input type="number" id={styles.cnpj}/>
                </div>
                <div className={styles.caixa_form}>
                    <label>Algo a acrescentar?</label>
                    <input type="texto" id={styles.cnpj}/>
                </div>
                <div className={styles.botoes_ong}>
                <button type="submit" className={styles.botao}>Confirmar</button>
                </div>
            </div>

            <div className={styles.crie_conta}>
                <div className={styles.textos_crie_conta}>
                    <h1>Crie uma conta para ter acesso aos serviços de refugiado que a nossa plataforma oferece.</h1>
                </div>
                <div className={styles.imagem_ong}>
                    <img src={imagemrefugi} alt='imagem refugiado'></img>
                </div>
            </div>
        </section>
    )
}
export default Registro_Refugiado;
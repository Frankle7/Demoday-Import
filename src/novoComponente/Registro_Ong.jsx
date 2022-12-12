import styles from '../novoCss/Registro_Ong.module.css'
import imagemOng from '../imagens/imagemOng.png'


function Registro_Ong(){
    return(
        <section className={styles.registro_ong}>
            <div className={styles.formulario_ong}>
                
                <div className={styles.caixa_form}>
                    <label for="nome_empresa">Nome da ONG:</label>
                    <input type="texto" id={styles.nome} name="nome_empresa" />
                </div>
                
                <div className={styles.caixa_form}>
                    <label for="email">Email</label>
                    <input type="email" id={styles.email} name="email" />
                </div>
                <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">Telefone:</label>
                            <input type="number" id={styles.senha} name="nome_empresa" value=""/>
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">CNPJ</label>
                            <input type="number" id={styles.senha} name="nome_empresa" />
                        </div>
                    </div>

                <div className={styles.caixa_form}>
                    <label for="cnpj">Endereço:</label>
                    <input type="texto" id={styles.cnpj} name="cnpj" />
                </div>
                <div className={styles.botoes_ong}>
                <button type="submit" className={styles.botao}>Confirmar</button>
                <button type="submit" className={styles.botao}>Voltar</button>
                </div>
            </div>

            <div className={styles.crie_conta}>
                <div className={styles.textos_crie_conta}>
                    <h1>Crie uma conta para sua ONG</h1>
                    <br />
                    <p>Antes de anunciar uma vaga temos que fazer o cadastro da ONG</p>
                </div>
                <div className={styles.imagem_ong}>
                    <img src={imagemOng} alt='imagem psicologo'></img>
                </div>
            </div>
        </section>
    )
}
export default Registro_Ong;
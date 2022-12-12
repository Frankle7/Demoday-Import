import styles from '../css/Registro_psicologo.module.css'
import imagempsicologo from '../imagens/imagempsicologo.png'


function Registro_psicologo(){
    return(
        <section className={styles.registro_psicologo}>
            <div className={styles.formulario_psicologo}>
                
                <div className={styles.caixa_form}>
                    <label for="nome_empresa">Nome completo:</label>
                    <input type="texto" id={styles.nome} name="nome_empresa" />
                </div>
                
                <div className={styles.caixa_form}>
                    <label for="email">Email</label>
                    <input type="email" id={styles.email} name="email" />
                </div>
                
                <div className={styles.caixa_form}>
                <label for="nome">CPF:</label>
                    <input type="texto" id={styles.nome} name="nome_usuario" />
                </div>
                
                <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">CRP</label>
                            <input type="number" id={styles.senha} name="nome_empresa" value=""/>
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">.</label>
                            <input type="number" id={styles.senha} name="nome_empresa" />
                        </div>
                    </div>

                <div className={styles.caixa_form}>
                    <label for="cnpj">UF</label>
                    <input type="texto" id={styles.cnpj} name="cnpj" />
                </div>

                <div className={styles.caixa_form}>
                    <label for="cnpj">Telefone</label>
                    <input type="number" id={styles.cnpj} name="cnpj" />
                </div>
                
                <div className={styles.caixa_form}>
                <button type="submit" className={styles.botao}>Continuar</button>
                </div>
            </div>

            <div className={styles.crie_conta}>
                <div className={styles.textos_crie_conta}>
                    <h1>Crie uma conta para ser um voluntario em psicologia</h1>
                </div>
                <div className={styles.imagem_psicologo}>
                    <img src={imagempsicologo} alt='imagem psicologo'></img>
                </div>
            </div>
        </section>
    )
}
export default Registro_psicologo;
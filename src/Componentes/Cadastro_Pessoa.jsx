import styles from '../css/Cadastro_Pessoa.module.css'
import iconrefugi from '../imagens/Rectangle 705.png'
import iconpsi from '../imagens/Rectangle 706.png'
import iconrecru from '../imagens/Rectangle 707.png'
import iconong from '../imagens/Rectangle 708.png'
import imagemlado from '../imagens/Rectangle 537.png'

function Cadastro_Pessoa(){
    return(
        <section className={styles.Cadastro_Pessoa}>
            <div className={styles.divpai}>
                <div className={styles.div1}>
                    <h1>Fazer Cadastro de acesso ao Login</h1>
                </div>
                <div className={styles.div2}>
                    <div className={styles.caixa1}>
                        <label className={styles.nome_cima} for="nome">Nome</label>
                        <input type="texto" id={styles.formu} name="nome_empresa" />
                    </div>
                    <div className={styles.caixa1}>
                        <label className={styles.nome_cima} for="data_nascimento">Data de Nascimento</label>
                        <input type="date" id={styles.formu} name="nome_empresa" />
                    </div>
                </div>
                <div className={styles.div3}>
                    <div className={styles.caixa}>
                        <label className={styles.nome_cima} for="email">Email</label>
                        <input type="email" id={styles.formu} name="nome_empresa" />
                    </div>
                    <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">Senha</label>
                            <input type="password" id={styles.senha} name="nome_empresa" />
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">Confirme sua senha</label>
                            <input type="password" id={styles.senha} name="nome_empresa" />
                            <br />
                            
                        </div>
                    </div>
                    <div className={styles.concordo}>
                        <input type="radio" name="webmaster" /> <a>Declaro que com os termos de privacidade da plataforma.</a> <br />
                    </div>
                    <div className={styles.caixa_bolinha}>
                        <label className={styles.opcoes} for="senha">Quem está acessando a plataforma?*</label>
                        
                        
                    <section className={styles.opcoes_login}>
                        <button class={styles.category}>Refugiado(a) <img src={iconrefugi} /></button>
                        <button class={styles.category}>Psicologo(a) <img src={iconpsi} /></button>
                        <button class={styles.category}>Recrutador(a) <img src={iconrecru} /></button>
                        <button class={styles.category}>ONG <img src={iconong} /></button>
                    </section>
                    </div>
                </div>
                <div className={styles.div4}>
                    <div className={styles.caixa}>
                        <button id={styles.save_cont}>Salvar e Continuar</button>
                    </div>
                </div>
            </div>
            <div className={styles.divpai2}>
                <img src={imagemlado} alt="img"></img>
            </div>
        </section>
    )
}
export default Cadastro_Pessoa;
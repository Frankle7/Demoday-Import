import styles from '../css/Perfil_pessoas.module.css'


function Perfil_pessoas({
    foto_usuario, nome_usuario, descricao_usuario, descricao2_usuario
  }) {
    return (
        <div className={styles.usuarios}>
            {/* <div className={styles.usuario_caixas}> */}
                <div className={styles.Foto_usuarios}>
                    <img src={foto_usuario} alt="pp" id={styles.foto_usuario} />
                </div>
                <div className={styles.Nome_etc}>
                    <h1>{nome_usuario}</h1>
                    <p>{descricao_usuario}</p>
                    <p>{descricao2_usuario}</p>
                </div>
                <div className={styles.botao_perfil}>
                    <button>Perfil</button>
                </div>
            {/* </div> */}
      </div>
        )
  }
  
  export default Perfil_pessoas;
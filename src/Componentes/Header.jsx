import styles from "../css/Header.module.css";
import Logo from "../imagens/logo_import.png";
import coracao from "../imagens/coracao.png";
import { Link } from "react-router-dom";
import Botaologin from "../Componentes/Botaologin";

function Header() {
  return (
    <header className={styles.content}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navdentro}>
        <nav className={styles.dp_menu}>
          <ul className={styles.lista}>
            <li className={styles.botaohome}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.botaodoar}>
              <Link to="/Pagina_Voluntario">
                Seja um <br /> Voluntario</Link>
             
            </li>
            <li className={styles.botaodoar}>
            <Link to="/">Integra</Link>
              
            </li>
            <li className={styles.botaodoar}>
              <a
                href="https://www.vakinha.com.br/vaquinha/import-uma-plataforma-que-se-importa"
                target={"_blank"}
              >
                Doar
              </a>
            </li>
          </ul>
          <div className={styles.login}>
            <Botaologin />
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;

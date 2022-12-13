import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styles from "../css/Botaologin.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
const navigate = useNavigate () 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);


  }  function SubmitEvent() {
    setIsOpen(true);
    
  }

  return (
    <div className={styles.Container}>
      <button className="bttn-header" onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Acessar Plataforma</h2>
        <hr />

        <div>
          <label htmlFor="mail">E-mail</label>
          <input type="text" placeholder="email@gmail.com" />

          <label htmlFor="passaword">Senha</label>
          <input type="text" placeholder="********" />
        </div>
        <br></br>
        <div className="bttn">

          <button className="bttn2" onClick={()=>navigate("/Pagina_psicologo")}>
            Entrar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;

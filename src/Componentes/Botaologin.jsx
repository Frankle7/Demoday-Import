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
<<<<<<< HEAD

=======
    
>>>>>>> 420b267ddad214b9f511403020640a5b6018f8c0
  }

  return (
    <div className={styles.Container}>
<<<<<<< HEAD
      <button className="bttn-header" onClick={openModal}>Acesso</button>
=======
      <button className="bttn-header" onClick={openModal}>Login</button>
>>>>>>> 420b267ddad214b9f511403020640a5b6018f8c0
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

<<<<<<< HEAD
          <button className="bttn2" onClick={()=>navigate("/Pagina_Refugiado")}>
            Entrar
          </button>
          <button className="bttn2" onClick={()=>navigate("/Pagina_psicologo")}>
            Cadastrar
          </button>
=======
          <button className="bttn2" onClick={()=>navigate("/Pagina_psicologo")}>
            Entrar
          </button>
>>>>>>> 420b267ddad214b9f511403020640a5b6018f8c0
        </div>
      </Modal>
    </div>
  )};
  export default App;
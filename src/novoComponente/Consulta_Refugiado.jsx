import styles from "../novoCss/Consulta_Refugiado.module.css";

function Consulta_Refugiado() {
  return (
    <section className={styles.consulta}>
      <div id={styles.prox_consulta}>
        <div>
          Agendar Consulta
         </div>
      </div>
      <div className={styles.dia_data}>
        <p>
          Qua
          <br />
          02/11/2022
        </p>
        <p>
          Qui
          <br />
          03/11/2022
        </p>
        <p>
          Sex
          <br />
          04/11/2022
        </p>
        <p>
          Sab
          <br />
          05/11/2022
        </p>
        <p>
          Dom
          <br />
          06/11/2022
        </p>
        <p>
          Seg
          <br />
          07/11/2022
        </p>
        <p>
          Ter
          <br />
          08/11/2022
        </p>
      </div>
      <div className={styles.data}>
        <div id={styles.consulta}>
          <p className={styles.laranja}>Aulas</p>
          <p className={styles.azul}>Psicologo</p>
        </div>
        <div className={styles.horario}>
          <p className={styles.laranja}>08:00</p>
          <br />
          <p id={styles.top}>08:00</p>
          <br />
          <p>08:00</p>
          <br />
          <p>_____</p>
          <br />
          <p>08:00</p>
          <br />
          <p>08:00</p>
          <br />
          <p>08:00</p>
          <br />
          <p className={styles.azulzinho}>08:00</p>
          <br />
          <p className={styles.azul}>08:00</p>
          <br />
          <p className={styles.azul}>08:00</p>
          <br />
          <p>_____</p>
          <br />
          <p className={styles.azul}>08:00</p>
          <br />
          <p>08:00</p>
          <br />
          <p>08:00</p>
          <br />
        </div>
      </div>
    </section>
  );
}
export default Consulta_Refugiado;

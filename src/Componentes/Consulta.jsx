import styles from '../css/Consulta.module.css'


function Consulta(){
    return(
        <section className={styles.consulta}>
            <div id={styles.prox_consulta}>
                    <p>Proxima consulta
                        <br />
                        28/11/2022
                    </p>
                </div>
                <div className={styles.dia_data}>
                    <p>Qua
                        <br />
                        02/11/2022
                    </p>
                    <p>Qui
                        <br />
                        03/11/2022
                    </p>
                    <p>Sex
                        <br />
                        04/11/2022
                    </p>
                    <p>Sab
                        <br />
                        05/11/2022
                    </p>
                    <p>Dom
                        <br />
                        06/11/2022
                    </p>
                    <p>Seg
                        <br />
                        07/11/2022
                    </p>
                    <p>Ter
                        <br />
                        08/11/2022
                    </p>
                </div>
                <div className={styles.data}>
                    <div id={styles.consulta}>
                        <p>Consulta</p>
                    </div>
                    <div className={styles.horario}>
                        <p className={styles.laranja}>08:00</p>
                        <br />
                        <p className={styles.laranja}>08:00</p>
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
                        <p className={styles.laranja}>08:00</p>
                        <br />
                        <p className={styles.laranja}>08:00</p>
                        <br />
                        <p className={styles.laranja}>08:00</p>
                        <br />
                        <p>_____</p>
                        <br />
                        <p className={styles.laranja}>08:00</p>
                        <br />
                        <p>08:00</p>
                        <br />
                        <p>08:00</p>
                        <br />
                    </div>
                </div>  
        </section>
    )
}
export default Consulta;
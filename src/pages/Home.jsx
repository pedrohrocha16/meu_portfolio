import styles from './Home.module.css'
import imReal from '../assets/img/im-real.png'
import { MaquinaDeEscrever } from '../components/MaquinaDeEscrever'

const Home = () => {
  return (
    <section>
      <div className={styles.main_text}>
        <h3>
          <MaquinaDeEscrever text="Olá pessoas!" />
          <MaquinaDeEscrever text="Me chamo" delay={1800}/>
          <span className={styles.nome}>
            <MaquinaDeEscrever text="Pedro H. Rocha" delay={2500} />
          </span>
          <MaquinaDeEscrever text="e sou" delay={4100} />
          <span className={styles.profit}>
            <MaquinaDeEscrever text="Dev. Front End =)" delay={5000} />
          </span>
        </h3>
      </div>
      <div className={styles.main_img}>
        <img src={imReal} alt="me" />
      </div>
    </section>
  )
}

export default Home
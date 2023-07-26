import styles from './Home.module.css'
import imReal from '../assets/img/im-real.png'
import { MaquinaDeEscrever } from '../components/MaquinaDeEscrever'

import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { RiGithubFill } from 'react-icons/ri'

const Home = () => {
  return (
    <div>
      <section>
        <div className={styles.main_text}>
          <h3>
            <MaquinaDeEscrever text="Olá pessoas!" />
            <MaquinaDeEscrever text="Me chamo" delay={1800} />
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
        <div className={styles.icons}>
          <h6>Stacks:</h6>
          <i><FaReact /></i>
          <i><SiTypescript /></i>
          <i><FaHtml5 /></i>
          <i><FaCss3Alt /></i>
          <i><SiJavascript /></i>
          <i><RiGithubFill /></i>
        </div>
      </section>
    </div>
  )
}

export default Home
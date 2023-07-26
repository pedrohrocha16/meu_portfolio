import styles from './History.module.css'

import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { RiGithubFill } from 'react-icons/ri'

const History = () => {
   return (
      <div className={styles.history}>
         <h1>Um pouco sobre mim:</h1>
         <p>Me chamo Pedro Henrique Rocha Gonçalves, tenho 29 anos, moro em Patos de Minas - Minas Gerais, sou apaixonado por música e tecnologia.<br></br>
            Em 2022 estava me sentindo estagnado, sentia que podia fazer algo a mais, respirar novos ares, aprender algo novo, foi onde decidi ingressar no ramo da tecnologia.<br></br>
            Iniciei os estudos com foco em Front End, que foi e é a área que mais me chamou a atenção e tive um maior encanto.<br></br>
            No mesmo ano, participei de uma mentoria onde desenvolvi alguns projetos, onde também colaborei com outros colegas de curso e que também contribuíram para o meu crescimento e desenvolvimento.<br></br>
            Sempre busco novos desafios, aprender e entendê-los, para que eu consiga melhorar 1% todos os dias! No momento estou focado nos estudos de React e TypeScript.<br></br>
            Atualmente, estou em busca da minha primeira oportunidade de trabalho como dev.</p>
      </div>
   )
}

export default History
import styles from './History.module.css'
import im from '/im.png'
import { FcDownload } from 'react-icons/fc'

const History = () => {
   return (
      <div className={styles.history}>
         <h1>Um pouco sobre mim:</h1>
         <p style={{ lineHeight: "28px" }}>Me chamo Pedro Henrique Rocha Gonçalves, tenho 29 anos, moro em Patos de Minas - Minas Gerais, sou apaixonado por música e tecnologia.<br></br>
            Em 2022 estava me sentindo estagnado, sentia que podia fazer algo a mais, respirar novos ares, aprender algo novo, foi onde decidi ingressar no ramo da tecnologia,
            logo, iniciei os estudos com foco em Front End (HTML, CSS e JavaScript).<br></br>Em abril de 2023 tomei a decisão de sair da empresa onde trabalhei por quase 7 anos para me dedicar totalmente aos estudos de programação<br></br>
            e por fim, em agosto desse mesmo ano ingressei na faculdade no curso bacharel em Engenharia de Software.<br></br>
            <span style={{ color: "gold" }}>No momento, estou em busca da minha primeira oportunidade de trabalhar como desenvolvedor Front End.</span></p>
         <div style={{ marginTop: "3rem", border: "1px solid white", padding: "20px", borderRadius: "8px" }}>
            <p>Meu Currículo Atualizado</p>
            <a href='/Currículo Pedro H. Rocha.pdf' download="Currículo Pedro H. Rocha"><FcDownload style={{ fontSize: "40px" }} /></a>
         </div>

      </div>
   )
}

export default History
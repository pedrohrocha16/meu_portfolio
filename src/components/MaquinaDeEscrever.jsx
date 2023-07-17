import { useEffect, useState } from "react";

export function MaquinaDeEscrever(props, name) {
   const [text, setText] = useState("")
   const [mostrarCursor, setMostrarCursor] = useState(false)

   const escreverNaTela = (text, i = 0) => {
      if (i < text.length) {
         setMostrarCursor(true)
         setText(text.slice(0, i + 1))
         setTimeout(() => escreverNaTela(text, i + 1), 60)
      } else if (i > text.length && props?.esconderCursor) {
         setMostrarCursor(false)
      }
   }
   useEffect(() => {
      setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200)
   }, [])

   return (
      <div>
         {text}
         {mostrarCursor && (
            <span>

            </span>
         )}
      </div>
   )
}
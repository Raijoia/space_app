import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"

// importa o styles.elementoHTML que quer adicionar e interpola
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
    </FundoGradiente>
  )
}

export default App
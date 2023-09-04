import { styled } from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const ImagemContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
`

export default function Galeria({ fotos = [] }) {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagemContainer>
            {fotos.map(foto => <Imagem key={foto.id} foto={foto} />)}
          </ImagemContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

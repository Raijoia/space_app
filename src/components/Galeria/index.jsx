import { styled } from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const ImagemContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

export default function Galeria({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagemContainer>
            {fotos.map(foto => 
            <Imagem 
              aoAlternarFavorito={aoAlternarFavorito}
              aoZoomSolicitado={aoFotoSelecionada}
              key={foto.id} 
              foto={foto}
            />)}
          </ImagemContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

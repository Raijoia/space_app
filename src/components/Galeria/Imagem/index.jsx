import React from 'react'
import { styled } from 'styled-components'

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? "90%" : "460px")};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: "GandhiSansBold";
            margin: 0;
            font-size: 16px;
        }
        h3 {
            margin: 0;
            font-size: 16px;
        }
    }
`

export default function Imagem({ foto }) {
  return (
    <Figure>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>{foto.fonte}</p>
          <button>Favorito</button>
          <button>Espandir</button>
        </footer>
      </figcaption>
    </Figure>
  )
}

import { styled } from 'styled-components'
import CampoTexto from '../CampoTexto'

// pode funcionar como um scss
const HeaderEstilizado = styled.header`
  padding: 60px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="logo do space-app" />
      <CampoTexto />
    </HeaderEstilizado>
  )
}

import { styled } from 'styled-components'
import search from '../../public/imagens/seacrh.svg'

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #c98cf1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 68px;
    right: 80px;
    width: 38px;
    height: 38px;
`

export default function CampoTexto(props) {
  return (
    <>
      <CampoTextoEstilizado {...props} />
      <IconeLupa src={search} alt='Lupa de pesquisa' />
    </>
  )
}

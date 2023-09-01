import { styled } from "styled-components"

const ItemListaEstilizado = styled.li`
  
`

export default function ItemNavegacao({ children, iconeAtivo, iconeInativo, ativo = false }) {
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  )
}

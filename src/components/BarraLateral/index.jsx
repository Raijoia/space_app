import { styled } from "styled-components"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

export default function BarraLateral() {
  return (
    <aside>
      <nav>
        <listaEstilizada>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Mais Vistas</a>
          </li>
        </listaEstilizada>
      </nav>
    </aside>
  )
}

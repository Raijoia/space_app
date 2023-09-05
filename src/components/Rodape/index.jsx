import React from 'react'
import { styled } from 'styled-components'
import facebook from '/sociais/facebook.svg'
import instagram from '/sociais/instagram.svg'
import twitter from '/sociais/twitter.svg'

const RodapeEstilizado = styled.footer`
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  height: 70px;
`

const ContainerSocial = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  padding-left: 20px;
`

const Desenvolvido = styled.p`
  color: white;
  padding-right: 20px;
  line-height: 1.5;
`

export default function Rodape() {
  return (
    <RodapeEstilizado>
      <ContainerSocial>
        <a href="#"><img src={facebook} alt="Icone do Facebook" /></a>
        <a href="#"><img src={twitter} alt="icone do Twitter" /></a>
        <a href="#"><img src={instagram} alt="Icone do Instagram" /></a>
      </ContainerSocial>
      <Desenvolvido>
        Desenvolvido por Raí.
      </Desenvolvido>
    </RodapeEstilizado>
  )
}

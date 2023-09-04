import React from 'react'
import tags from './tags.json'
import { styled } from 'styled-components'

const TagsStyle = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 60px;
`

const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    margin-right: 28px;
`

const Tag = styled.button`
    font-size: 24px;
    color: #ffffff;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #c98cf1;
    }
`

export default function Tags() {
  return (
    <TagsStyle>
      <TagTitulo>
        Busque por tags:
      </TagTitulo>
      {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </TagsStyle>
  )
}

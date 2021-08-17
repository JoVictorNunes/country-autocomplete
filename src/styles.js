import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

export const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 8px;
  }

  li {
    padding: 8px;
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }

  li:hover {
    background-color: #aaa;
    cursor: pointer;
  }
`

export const ListItem = styled.li`
  background-color: ${props => props.active ? '#aaa' : 'none'};
`

export const Wrapper = styled.div`
width: 30%;
border: 1px solid #aaa;
border-radius: 5px;
overflow: hidden;

* {
  transition: .2s;
}
`

export const Input = styled.div`
display: flex;
height: 32px;
border-bottom: ${props => props.toggle ? '1px solid #aaa' : 'none'};

input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: inherit;
}

button {
  flex-grow: 0;
  flex-basis: 32px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: none;
}

button:hover {
  background-color: #aaa;
  cursor: pointer;
}
`
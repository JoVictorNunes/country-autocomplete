import React, { useState } from 'react'
import styled from 'styled-components'

const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 100px;
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
      font-family: inherit;
    }
  }

  li:hover {
    background-color: #aaa;
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  width: 30%;
  border: 1px solid #aaa;
  border-radius: 5px;
  overflow: hidden;

  * {
    transition: .2s;
  }
`

const Input = styled.div`
  display: flex;
  height: 32px;
  border-bottom: ${props => props.toggle ? '1px solid #aaa' : null};

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

function Autocomplete(props) {
  const [toggle, setToggle] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  const { options } = props

  function handleChange(e) {
    const input = e.currentTarget.value

    const filteredSuggestions = options.filter(
      option => option.toLowerCase().includes(input.toLowerCase())
    )

    setFilteredSuggestions(filteredSuggestions)
    setUserInput(input)
    setToggle(true)
  }

  function optionClick(e) {
    const v = e.currentTarget.innerText
    setFilteredSuggestions([v])
    setUserInput(v)
    setToggle(false)
  }

  let suggestions = null

  if (filteredSuggestions.length) {
    suggestions = (
      <OptionList>
        {
          filteredSuggestions.map(suggestion => (
            <li key={suggestion} onClick={optionClick}>
              <img alt="flag" src="https://www.countryflags.io/br/flat/24.png"></img>
              <span>{suggestion}</span>
            </li>
          ))
        }
      </OptionList>
    )
  }
  else if (!userInput) {
    suggestions = (
      <OptionList>
        {
          options.map(option => (
            <li key={option} onClick={optionClick}>
              <img alt="flag" src="https://www.countryflags.io/br/flat/24.png"></img>
              <span>{option}</span>
            </li>
          ))
        }
      </OptionList>
    )
  }
  else {
    suggestions = (
      <div>
        No suggestions.
      </div>
    )
  }

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <Wrapper>
      <Input toggle={toggle}>
        <input
          type='text'
          value={userInput}
          onChange={handleChange}
          placeholder="Enter here"
        />
        <button onClick={handleToggle}>+</button>
      </Input>

      {toggle && suggestions}
    </Wrapper>
  )
}

export default Autocomplete
import React, { useEffect, useState } from 'react'
import { OptionList, Wrapper, Input } from './styles'

function Autocomplete(props) {
  const [toggle, setToggle] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])

  const { options } = props

  useEffect(() => {
    setFilteredSuggestions(options)
  }, [options])

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

  function handleToggle() {
    setToggle(prev => !prev)
  }

  let suggestions = null

  if (filteredSuggestions.length) {
    suggestions = (
      <OptionList>
        {
          filteredSuggestions.map(suggestion => (
            <li key={suggestion} onClick={optionClick}>
              {suggestion}
            </li>
          ))
        }
      </OptionList>
    )
  }
  else {
    suggestions = <div>No suggestions.</div>
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
        <button onClick={handleToggle}>{toggle ? '-' : '+'}</button>
      </Input>

      {toggle && suggestions}
    </Wrapper>
  )
}

export default Autocomplete
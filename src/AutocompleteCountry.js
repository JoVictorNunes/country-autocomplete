import React, { useEffect, useState } from 'react'
import { OptionList, Wrapper, Input, ListItem } from './styles'
import getCountries from './getCountries'

function AutocompleteCountry() {
  const [toggle, setToggle] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [countries, setCountries] = useState([])
  const [activeOption, setActiveOption] = useState(-1)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [lastArrowPressed, setLastArrowPressed] = useState(null)

  useEffect(() => {
    (async function () {
      const countries = await getCountries()
      setCountries(countries)
      setFilteredSuggestions(countries)
    })()
  }, [])

  useEffect(() => {
    const activeElement = document.querySelector('.active')
    const optionList = document.querySelector('.list')

    if (activeElement) {
      if (activeElement.offsetTop < optionList.scrollTop + activeElement.clientHeight ||
        activeElement.offsetTop > optionList.scrollTop + optionList.clientHeight) {
          if (lastArrowPressed === 'up') activeElement.scrollIntoView()
          else activeElement.scrollIntoView(false)
        }
    }
  })

  function handleChange(e) {
    const input = e.currentTarget.value

    const filteredSuggestions = countries.filter(
      country => country.name.toLowerCase().includes(input.toLowerCase())
    )

    setFilteredSuggestions(filteredSuggestions)
    setUserInput(input)
    setToggle(true)
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (activeOption === -1) {
        return
      }

      const curSuggestion = filteredSuggestions[activeOption]

      setUserInput(curSuggestion.name)
      setFilteredSuggestions([curSuggestion])
      setActiveOption(0)
      setToggle(false)
      setLastArrowPressed('enter')
      return
    }

    if (e.keyCode === 38 || e.keyCode === 40) {
      setToggle(true)
    }

    if (e.keyCode === 38) {
      if (activeOption === -1) {
        return
      }
      else if (activeOption === 0) {
        setActiveOption(filteredSuggestions.length - 1)
      }
      else {
        setActiveOption(active => active - 1)
      }

      setLastArrowPressed('up')

      return
    }

    if (e.keyCode === 40) {
      if (activeOption === filteredSuggestions.length - 1) {
        setActiveOption(0)
      }
      else {
        setActiveOption(active => active + 1)
      }
      
      setLastArrowPressed('down')

      return
    }
  }

  function optionClick(e) {
    const v = e.currentTarget.innerText
    const country = countries.find(country => country.name.toLowerCase().includes(v.toLowerCase()))

    setUserInput(v)
    setFilteredSuggestions([country])
    setToggle(false)
    setActiveOption(0)
  }

  function handleToggle() {
    setToggle(prev => !prev)
  }

  let suggestions = null

  if (filteredSuggestions.length) {
    suggestions = (
      <OptionList className='list'>
        {
          filteredSuggestions.map((suggestion, index) => (
            <ListItem
              key={suggestion.alpha2Code}
              active={index === activeOption ? true : false}
              className={index === activeOption ? 'active' : null}
              onClick={optionClick}
            >
              <img alt="flag" src={`https://www.countryflags.io/${suggestion.alpha2Code}/flat/24.png`} />
              <span>{suggestion.name}</span>
            </ListItem>
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
          onKeyDown={handleKeyDown}
          placeholder="Enter here"
        />
        <button onClick={handleToggle}>+</button>
      </Input>

      {toggle && suggestions}
    </Wrapper>
  )
}

export default AutocompleteCountry
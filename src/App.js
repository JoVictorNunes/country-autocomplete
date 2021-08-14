import Autocomplete from "./Autocomplete";
import AutocompleteCountry from "./AutocompleteCountry";
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <div className="App">
      <Global />

      <Autocomplete
        options={['Brasil', 'Itália', 'Inglaterra', 'Hungria', 'França', 'Espanha', 'Portugal', 'Escócia']}
      />

      <AutocompleteCountry />
    </div>
  );
}

export default App;

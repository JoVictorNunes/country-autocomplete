import Autocomplete from "./Autocomplete";
import { createGlobalStyle } from 'styled-components'
import AutocompleteCountry from "./AutocompleteCountry";

const Global = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
      <Global />
      <div className="App">

        {/* <Autocomplete
          options={['Brasil', 'Itália', 'Inglaterra', 'Hungria', 'França', 'Espanha', 'Portugal', 'Escócia']}
        /> */}

        <AutocompleteCountry />
      </div>
    </>
  );
}

export default App;

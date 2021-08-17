import AutocompleteCountry from "./AutocompleteCountry";
import { Global } from './styles'

function getCountry(name) {
  console.log(name)
}

function App() {
  return (
    <div className="App">
      <Global />
      <AutocompleteCountry callback={getCountry} />
    </div>
  );
}

export default App;

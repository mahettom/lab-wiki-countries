import { useState } from 'react';
import countryArray from './countries.json'
import CountriesList from './components/CountriesList/CountriesList';
import "./App.css";


function App() {
  //                           STATE
  const [countries, setCountries] = useState(countryArray)


  //                        COMPORTEMENT




  //                          RENDER
  return (

    <div className="App">
      <CountriesList {...{ countries, setCountries }} />
    </div>

  )
}
export default App;

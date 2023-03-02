import "./App.css";
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import countryArray from './countries.json'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from "./components/Navbar/Navbar";

function App() {
  //                           STATE
  const [countries, setCountries] = useState(countryArray)


  //                        COMPORTEMENT


  //                          RENDER
  return (

    <div className="App">
      <Navbar />

      {/* <CountriesList {...{ countries, setCountries }} /> */}

      <Routes>
        <Route path="/countries" element={<CountriesList {...{ countries, setCountries }} />}>
          <Route path=":code" element={<CountryDetails {...{ countries }} />} />
        </Route>
      </Routes>

    </div>

  )
}
export default App;

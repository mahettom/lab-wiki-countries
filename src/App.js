import "./App.css";
import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import countryArray from './countries.json'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [countries, setCountries] = useState(countryArray)




  return (

    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/countries" element={<CountriesList {...{ countries, setCountries }} />}>
          <Route path=":countryId" element={<CountryDetails {...{ countries }} />} />
        </Route>
      </Routes>

    </div>

  )
}
export default App;

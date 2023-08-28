import logo from './logo.svg';
import './App.css';
import { countries } from './data';
import { useState } from 'react';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleChange = (e) => {
    let value = e.target.value;
    setSelectedCountry(countries[value].name);
  }
  return (
    <div>
      <select onChange={(e)=>{handleChange(e)}}>
        {
          countries.map((country,idx) =>{
            return (
              <option value={idx}>{country.name}</option>
            )
          })
        }
      </select>
      <select>
        {
          countries.filter((cities,idx)=> cities.value === selectedCountry )
        }
      </select>
    </div>
  );
}

export default App;

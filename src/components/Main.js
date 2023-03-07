import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Country from './Country';

export const Main = () => {
  const {countries, term, continent} = useContext(GlobalContext);

  return (
    <main className='mainComponent'>
      { countries
        .filter(country => country.name.toLowerCase().includes(term.toLowerCase()))
        .filter(country => continent === 'World' || continent === 'Filter by Region' ? country.region.includes('') : country.region.includes(continent))
        .map((country, id) => <Country key={id} country={country} />) 
      }
    </main>
  )
}

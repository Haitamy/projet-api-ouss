import React, { useState, useEffect, createContext } from 'react';

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {

    const [term, setTerm] = useState(''); 
    function changeTerm(term) {
        setTerm(term);
    }
    const [continent, setContinent] = useState('Filter by Region');
    function changeContinent(continent) {
        setContinent(continent);
    }
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const API_URL = 'https://restcountries.com/';
        const allCountries = 'v2/all';

        async function getCountries(url){
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            

        }
            getCountries(API_URL + allCountries);  
    }, [term, continent]);
    
  return (
    <GlobalContext.Provider value={{ countries: countries, term: term, changeTerm: changeTerm, continent: continent, changeContinent: changeContinent}}>
        {children}
    </GlobalContext.Provider>
    )
}

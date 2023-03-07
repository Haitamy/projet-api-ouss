import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {useNavigate} from "react-router-dom";

const BorderCountry = ({border}) => {
    const {countries} = useContext(GlobalContext);
    
    let country = '';
    for(let index = 0; index < countries.length; index++){
        if(countries[index].alpha3Code === border){
            country = countries[index];
            break;
        }
    }

    const {flag, name, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages, borders} = country;

    let newLanguageArray = [];
    languages.forEach(language => {
      newLanguageArray.push(language.name);
    })
    let languageString = newLanguageArray.join(", ");
    let newBorderArray = [];
    let borderString = '';
    if(country.hasOwnProperty('borders')){
      borders.forEach(border => {
        newBorderArray.push(border);
      })
      borderString = newBorderArray.join(",");
    }
    else{
      borderString = '';
    }
    function numberWithCommas(number){
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const navigate = useNavigate();
    const toDetailPage = () => {navigate(`/countries/${name}`, {state:{
      flag:flag, name:name, population:numberWithCommas(population), region:region, capital:capital, 
      nativeName:nativeName, subregion:subregion, topLevelDomain: topLevelDomain[0], currencies: currencies[0].name, languages:languageString, borders:borderString 
    }})};

  return (
    <button className="borderButton" onClick={() => toDetailPage() }>{country.name}</button>
  )
}

export default BorderCountry;
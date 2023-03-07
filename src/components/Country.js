import React from 'react';
import {useNavigate} from "react-router-dom";

const Country = ({ country }) => {
//CODE BELOW WAS REUSED AT BORDERCOUNTRY.JS
  const {flag, name, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages, borders} = country;

  //changing language array to string
  let newLanguageArray = [];
  languages.forEach(language => {
    newLanguageArray.push(language.name);
  })
  let languageString = newLanguageArray.join(", ");

  // changing border array to string
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
  
  //format population
  function numberWithCommas(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //navigate to detail page
  const navigate = useNavigate();
  const toDetailPage = () => {navigate(`/countries/${name}`, {state:{
    flag:flag, name:name, population:numberWithCommas(population), region:region, capital:capital ? capital : '', 
    nativeName:nativeName, subregion:subregion, topLevelDomain: topLevelDomain[0], currencies: country.name === 'Antarctica' ? '' : currencies[0].name, languages:languageString, borders:borderString 
  }})};
    
  return (<div className='country' onClick={() => toDetailPage()} tabIndex="0">

    <div className='flag' style={{backgroundImage: `url(${flag})`}}></div>
    <h3>{name}</h3>
    <p><span>Population: </span>{numberWithCommas(population)}</p>
    <p><span>Region: </span> {region}</p>
    <p><span>Capital: </span> {capital}</p>

  </div> )
}

export default Country;

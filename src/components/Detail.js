import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import BorderCountry from './BorderCountry';

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {flag, name, population, region, capital, nativeName, subregion, topLevelDomain, currencies, languages, borders} = location.state;
    
    let borderArray = borders.split(",");

  return (
    <div className='detailComponent'>
      <button className="backButton" onClick={() => navigate(-1) }> &nbsp;Back</button>

      <div className='detailBody'>
        <div className='detailFlag' style={{backgroundImage: `url(${flag})`}}></div>
        <div className='detailInfo'>
          <h4>{name}</h4>
          <div className="info">
            <div className="first part">
              <p><span>Native Name: </span>{nativeName}</p>
              <p><span>Population: </span>{population}</p>
              <p><span>Region: </span>{region}</p>
              <p><span>Sub Region: </span>{subregion}</p>
              <p><span>Capital: </span>{capital}</p>
            </div>
            <div className="second part">
              <p><span>Top Level Domain: </span>{topLevelDomain}</p>
              <p><span>Currencies: </span>{currencies}</p>
              <p><span>Languages: </span>{languages}</p>
            </div>
          </div>
          <div className='borderCountries'>
            Border Countries: {
              borderArray[0] === '' ? ' -' : borderArray.map((border, id) => <BorderCountry key={id} border={border}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
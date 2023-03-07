import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Filter = () => {
  const {term, changeTerm, continent, changeContinent} = useContext(GlobalContext);
  const [dropDown, setDropDown] = useState(false);

  return (
    <aside className='filterComponent'>

      <form autoComplete="off" className="searchbar" autoFocus onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="searchFilter" />
        <input type="text" className="searchSpace" id="search" value={term} onChange={ (event) => changeTerm(event.target.value)} placeholder="Search for a country..." name='searchFilter'/>
      </form>

      <form className="filterbar" onClick={()=> {setDropDown(!dropDown)}} onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="regionFilter" />
        <input type="text" value={continent} readOnly name="regionFilter"/>
        
        <div className={dropDown ? 'options' : 'options hide'} id='options'>
          <div onClick={() => changeContinent('World')}> World</div>
          <div onClick={() => changeContinent('Africa')}> Africa</div>
          <div onClick={() => changeContinent('America')}>  America</div>
          <div onClick={() => changeContinent('Asia')}> Asia</div>
          <div onClick={() => changeContinent('Europe')}> Europe</div>
          <div onClick={() => changeContinent('Oceania')}>  Oceania</div>
        </div>

      </form>
    </aside>
  )
}

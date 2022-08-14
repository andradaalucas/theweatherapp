import React, { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>  
    <div className={style.containerSearch}>
      <div>
       <input
        className={style.input}
        type="text"
        placeholder="Inserte una ciudad"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
         </div> 
      <div>
      <input type="submit" value="Buscar" className={style.submitbtn}/>
      </div>
    </div>
        
   
      
    </form>
  );
}

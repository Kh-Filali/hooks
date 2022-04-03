import React from 'react'
import Filter from '../Filter/Filter';
import MoviesAdd from '../MoviesAdd/MoviesAdd';
import Stars from '../Stars/Stars';
import "./header.css"; 

const Header = ({ setSearchRate, searchRate,setSearchTxt}) => { 
  return (
    <div className="header">
        <h1>
        Tuni-Best
        </h1>
       
       <MoviesAdd />
        <Stars 
         isEdit={true}
          setSearchRate={setSearchRate}
          searchRate={searchRate}/>

        <Filter 
        setSearchTxt={setSearchTxt}
        />
        

       
    
    </div>
  )
}

export default Header
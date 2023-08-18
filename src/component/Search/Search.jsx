import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='ps-3 BOXX p-1 d-flex justify-content-between align-items-center shadow-sm'>
    <i className="fa-solid fa-magnifying-glass text-secondary"/>
    <input type="text"  placeholder="Search" className='Search__Line ps-3'/>
    <i className="fa-solid fa-microphone text-secondary pe-3"/>
    </div>
  )
}

export default Search
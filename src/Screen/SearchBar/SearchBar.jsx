import React from 'react'
import Search from '../../component/Search/Search'
import LeftRight from '../../component/LeftRight/LeftRight'
import Profile from '../../component/Profile/Profile'

const SearchBar = () => {
  return (
    <div className='row'>
      <div className='col-sm-1  p-2'> <LeftRight icon="fa-solid fa-chevron-left  " fws="fa-solid fa-angle-right" /></div>
      <div className='col-sm-7  p-2'><Search /></div>
      <div className='col-sm-1  p-2'><LeftRight icon="fa-regular fa-bell " fws="fa-regular fa-comment-dots" /></div>
      <div className='col-sm-3 '><Profile /></div>


    </div>
  )
}

export default SearchBar
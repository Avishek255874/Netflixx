import React from 'react'
import SideItems from '../../component/SideItems/SideItems'
import "./SideBar.css"
import Challange from '../../component/Challange/Challange'

const SideBar = () => {
  return (
 
  <div className=' p-4   SideSize'>
  <h3 className='fw-bold '>Netflixx.</h3>

  <p className="mb-3 mt-4 titleStyle">Menu</p>
  <SideItems menuName="Browse" fontAws="fa-regular fa-compass" />
  <SideItems menuName="Watchlist" fontAws="fa-regular fa-heart" />
  <SideItems menuName="Coming Soon" fontAws="fa-solid fa-box" />

  <p className="mb-3 titleStyle">Social</p>
  <SideItems menuName="Friend" fontAws="fa-solid fa-user" /> 
  <SideItems menuName="Parties" fontAws="fa-solid fa-users" /> 

  <p className="mb-3 titleStyle">General</p>
  <SideItems menuName="Setting" fontAws="fa-solid fa-gear" /> 
  <SideItems menuName="Log out" fontAws="fa-solid fa-arrow-right-from-bracket" /> 
<br/>
  <Challange/>
  
  </div>
  )
}

export default SideBar
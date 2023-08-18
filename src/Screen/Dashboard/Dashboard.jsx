import React from 'react'
import SideBar from "../../Screen/SideBar/SideBar"
import MainScreen from "../../Screen/MainScreen/MainScreen"
import UserImage from "../../Screen/UserImage/UserImage"


const Dashboard = () => {
  return (
    <div class="row ">
    <div className='col-sm-2'><SideBar/></div>
    <div className='col-sm-9'><MainScreen/></div>
    <div className='col-sm-1'><UserImage/></div>
  </div>
  )
}

export default Dashboard
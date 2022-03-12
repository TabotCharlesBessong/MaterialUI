
import { Dashboard, DragHandle, ExitToApp, FlagTwoTone, GraphicEq, Healing, Notifications, PeopleAlt, Person, PinDropRounded, Settings } from '@material-ui/icons'
import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="top">
        <span className="logo">
          Ukujula
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">
          MAIN
        </p>
          <li>
            <Dashboard className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">
            LISTS
          </p>
          <li>
            <Person className='icon' />
            <span>Users</span>
          </li>
          <li>
            
            <span>Products</span>
          </li>
          <li>
            <PinDropRounded className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <FlagTwoTone className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">
              USEFUL
            </p>
          <li>
            
            <Notifications className='icon' />
            <span>Notifications</span>
          </li>
          <li>
            <GraphicEq className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <Healing className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <DragHandle className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <Settings className='icon' />
            <span>Settings</span>
          </li>
          <li>
          <PeopleAlt className='icon' />
            <span>Profile</span>
          </li>
          <li>
          <ExitToApp className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions">

        </div>
        <div className="colorOptions">

        </div>
        
      </div>
    </div>
  )
}

export default Sidebar

import { ChatBubbleOutlined, FullscreenExit, Language, ListOutlined, Mood, NotificationsNone, SearchOutlined } from '@material-ui/icons'
import pro from '../../images/pro.jpg'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchOutlined className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <Language className='icon' />
            English
          </div>
          <div className="item">
            <Mood className='icon' />
            {/* English */}
          </div>
          <div className="item">
            <FullscreenExit className='icon' />
            {/* English */}
          </div>
          <div className="item">
            <NotificationsNone className='icon' />
            <div className="counter">1</div>
            {/* English */}
          </div>
          <div className="item">
            <ChatBubbleOutlined className='icon' />
            <div className="counter">
              2
            </div>
            {/* English */}
          </div>
          <div className="item">
            <ListOutlined className='icon' />
            {/* English */}
          </div>
          <div className="item">
            <img src={pro} alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
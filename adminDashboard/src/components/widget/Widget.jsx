
import { KeyboardArrowUp, PersonOutlined , AccountBalanceWalletOutlined , ShowChartOutlined,MonetizationOnOutlined } from '@material-ui/icons'
import React from 'react'
import './widget.scss'

const Widget = ({type}) => {

  let data 
  const amnt = 100
  const pct = 23

  switch (type) {
    case "user":
      data = {
        title:'USERS',
        isMoney:false,
        link:"See all users",
        icon:(
          <PersonOutlined className='icon' />
        )
      }
      
      break

      case "order":
      data = {
        title:'ORDERS',
        isMoney:false,
        link:"View all orders",
        icon:(
          <ShowChartOutlined className='icon' />
        )
      }
      
      break

      case "earning":
      data = {
        title:'EARNINGS',
        isMoney:true,
        link:"View Net Earning",
        icon:(
          <MonetizationOnOutlined className='icon' />
        )
      }
      
      break

      case "balance":
      data = {
        title:'BALANCE',
        isMoney:false,
        link:"See details",
        icon:(
          <AccountBalanceWalletOutlined className='icon' />
        )
      }
      
      break
  
    default:
      break;
  }

  return (
    <div className='widget' >
       <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$" } {amnt} </span>
          <span className="link">{data.link}</span>
          
       </div>
       <div className="right">
          <div className="percentage positive ">
          {data.icon} {pct}
          </div>
          <PersonOutlined className='icon' />
       </div>
    </div>
  )
}

export default Widget
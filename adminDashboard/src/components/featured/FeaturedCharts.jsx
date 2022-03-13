
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@material-ui/icons'
import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const FeaturedCharts = () => {
  return (
    <div className='featured' >
      <div className="top">
       <h1 className="title">
         total revenue
         <MoreVert fontSize='small' />
       </h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text = {"70%"} strokeWidth={6}  />
        </div>
        <p className="title">
          Total sales made today
        </p>
        <p className="amount">$378</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">last week </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">
                $122.4k
              </div>

            </div>
          </div>
          <div className="item">
            <div className="itemTitle">2 weeks</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small' />
              <div className="resultAmount">
                $12.4k
              </div>

            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="resultAmount">
                $312.4k
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCharts
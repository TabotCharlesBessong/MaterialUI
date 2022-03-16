
import React from 'react'
import Charts from '../../components/charts/Charts'
import FeaturedCharts from '../../components/featured/FeaturedCharts'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Tables from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home' >
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />

        </div>
        <div className="charts">
          <FeaturedCharts/>
          <Charts title='Last 6 month spendings' aspect={2/1}  />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Lates Transactions
          </div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home
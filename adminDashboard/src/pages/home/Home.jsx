
import React from 'react'
import Charts from '../../components/charts/Charts'
import FeaturedCharts from '../../components/featured/FeaturedCharts'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
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
          <Charts/>
        </div>
      </div>
    </div>
  )
}

export default Home
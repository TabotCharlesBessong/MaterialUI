
import React, { useState } from 'react'
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter , Route , Switch  } from 'react-router-dom'
import Footer from './components/footer/Footer'

const App = () => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [value,setValue] = useState(0)
  
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  />
        <Switch>
          <Route exact path='/' component={()=> <div style={{height:"2000px"}} >Home</div> }  />
          <Route exact path='/services' component={()=> <div style={{height:"2000px"}} >Services</div> }  />
          <Route exact path='/revolution' component={()=> <div style={{height:"2000px"}} >Revolution</div> }  />
          <Route exact path='/about' component={()=> <div style={{height:"2000px"}} >About Us</div> }  />
          <Route exact path='/contact' component={()=> <div style={{height:"2000px"}} >Contact Us </div> }  />
          <Route exact path='/estimate' component={()=> <div style={{height:"2000px"}} >Free Estimate </div> }  />
          <Route exact path='/customsoftware' component={()=> <div style={{height:"2000px"}} >Custome software services </div> }  />
          <Route exact path='/mobileapps' component={()=> <div style={{height:"2000px"}} >Mobile App Developement </div> }  />
          <Route exact path='/websites' component={()=> <div style={{height:"2000px"}} >Website Developement </div> }  />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}   />
      </BrowserRouter>
    </ThemeProvider>      
  )
}

export default App
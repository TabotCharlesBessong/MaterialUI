
import React, { useState } from 'react'
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter , Route , Switch  } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

const App = () => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [value,setValue] = useState(0)
  
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  />
        <Switch>
          <Route value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}    exact path='/' component={Home}  />
          <Route exact path='/services' component={()=> <div>Services</div> }  />
          <Route exact path='/revolution' component={()=> <div>Revolution</div> }  />
          <Route exact path='/about' component={()=> <div>About Us</div> }  />
          <Route exact path='/contact' component={()=> <div>Contact Us </div> }  />
          <Route exact path='/estimate' component={()=> <div>Free Estimate </div> }  />
          <Route exact path='/customsoftware' component={()=> <div>Custome software services </div> }  />
          <Route exact path='/mobileapps' component={()=> <div>Mobile App Developement </div> }  />
          <Route exact path='/websites' component={()=> <div>Website Developement </div> }  />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}   />
      </BrowserRouter>
    </ThemeProvider>      
  )
}

export default App
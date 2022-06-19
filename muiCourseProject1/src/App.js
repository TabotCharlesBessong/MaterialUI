
import React, { useState } from 'react'
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter , Route , Switch  } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import CustomeSoftware from './pages/customSoftware/CustomeSoftware'

const App = () => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [value,setValue] = useState(0)
  
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  />
        <Switch>
                    <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={props => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={props => (
              <CustomeSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
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

import React, { useState } from 'react'
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter , Route , Switch  } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import CustomeSoftware from './pages/customSoftware/CustomeSoftware'
import MobileApps from './pages/mobileApps/MobileApps'
import Websites from './pages/websites/Websites'
import Revolution from './pages/revolution/Revolution'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

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

          <Route
            exact
            path="/mobileapps"
            render={props => (
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/websites"
            render={props => (
              <Websites
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={props => (
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={props => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
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
import React from 'react'
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter , Route , Switch  } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={()=> <div>Home</div> }  />
          <Route exact path='/services' component={()=> <div>Services</div> }  />
          <Route exact path='/revolution' component={()=> <div>Revolution</div> }  />
          <Route exact path='/about' component={()=> <div>About Us</div> }  />
          <Route exact path='/contact' component={()=> <div>Contact Us </div> }  />
          <Route exact path='/estimate' component={()=> <div>Free Estimate </div> }  />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>      
  )
}

export default App
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='users'>
              <Route index element={<List/>} />
              <Route path=':userId' element={<Single/>} />
              <Route path='new' element={<New/>} />
            </Route>
            <Route path='products'>
              <Route index element={<List/>} />
              <Route path=':productId' element={<Single/>} />
              <Route path='new' element={<New/>} />
            </Route>
          </Route>
        </Routes>
        {/* <Sidebar/> */}
      </Router>
    </div>
  );
}

export default App;

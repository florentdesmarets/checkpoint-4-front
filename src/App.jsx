import './App.css';
import AdminList from './components/admin/AdminList';

import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Home/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

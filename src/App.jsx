import './App.css';
import AdminList from './components/admin/AdminList';

import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import AdminList from './components/admin/AdminList';

import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>hello world</h1>
      </Router>
    </div>
  );
}

export default App;

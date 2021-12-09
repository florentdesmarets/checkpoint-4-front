import './App.css';

import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projetcs';
import Admin from './components/admin/Admin';
import Contact from './components/contact/Contact'
import CreateProject from './components/create-project/CreateProject';
import Login from './components/login/Login';
import UserContext from './components/login/UserContext';
import {useState} from 'react';
import ProtectedRoute from './components/protected-routes/ProtectedRoutes';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <UserContext.Provider value ={{user, setUser}}>
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route  exact path="/admin" component={Login}/>
            <ProtectedRoute  exact path="/loged" component={Admin}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/new-project" component={CreateProject}/>
          </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;

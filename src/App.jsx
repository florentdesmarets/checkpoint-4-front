import './App.css';
import AdminList from './components/admin/Admin';

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

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/admin" component={Admin}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/new-project" component={CreateProject}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

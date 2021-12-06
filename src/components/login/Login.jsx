import {  useState, useContext } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../contact/Contact.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import userContext from './UserContext'
import { useHistory } from 'react-router';


const Login = () => {

    const {user, setUser} = useContext(userContext);
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = (e) => {
        axios.post(`${FETCH}/admins/login`, { username : username, password : password}) 
        .then((res) => res.data).then((data) => {
            if(data.message) {
                setLoginStatus(data.message);
            }
            else {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", data.user.username);
                setLoginStatus("Welcome"+ data.user.username);
                setUser(localStorage.getItem("user"));
            }
        })
    }
    
    const handleHistory = () => {
        history.push('/loged')
    }
    

    return (
        <div className="admin-container">
        <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
            <h1 className="main-title-contact">Log In</h1>
            <section className="form-container">
                <form onSubmit={handleSubmit} >
                    <div className="label-text-container">
                        <label className="label-text" htmlFor="name">Name</label>
                        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="label-text-container">
                        <label className="label-text" htmlFor="message" >Password</label>
                        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="button-container">
                        <input className="button" id="submit" value="Submit" type="submit" />
                        <h2>{loginStatus}</h2>
                        {user != null ? handleHistory() : null}
                    </div>  
                </form>
            </section>
        </div>
    );
}

export default Login;


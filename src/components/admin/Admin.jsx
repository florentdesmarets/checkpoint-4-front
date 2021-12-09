// import { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { FETCH } from '../../Fetch';
// import { DOMAIN_URL} from '../../Fetch'
// import './../admin/Admin.css'
// import {Link, useHistory} from "react-router-dom";
// import {confirmAlert} from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import UserContext from '../login/UserContext';



const Admin = () => {

  return(
    <div>hello</div>
  )
//     const [projects, setProjects] = useState([]);
//     const history = useHistory();
//     const {user, setUser} = useContext(UserContext);
//     const logOut = () => {
//         setUser(null);
//         const removeUser = localStorage.removeItem("user");
//         const removeToken = localStorage.removeItem("token");
//         const verifyRemove = localStorage.getItem("token");
//         if (verifyRemove) {
//           return removeToken, removeUser;
//         } else {
//           history.push("/admin");
//         }
//       };

//     useEffect(() => {
//         const fetchProjects = () => {
//             axios
//             .get(`${FETCH}/projects`)
//             .then(res => setProjects(res.data))
//         }
//         fetchProjects()
//     },[])



//     return (
//         <div className="admin-container">
//         <div className="admin-second-container">
//         <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
//             <h1 className="main-title-admin">Admin Section</h1>
//             <section className="project-container">
//             <h2 className="project-admin-title">My Projects</h2>
//                 <button className="add-project-button"><Link className="links" to="/new-project">Add projects</Link></button>
//                 <div className="project-list">
//                         {projects.map((projects) => (
//                     <div key={projects.id} className="project-card">
//                         <img className="project-img" src={`${DOMAIN_URL}/upload/${projects.project_image}`} alt="project" className="project-img"/>
//                         <p className="project-text">{projects.project_title}</p>
//                         <img src={`${DOMAIN_URL}/assets/remove.png`} alt="remove" className="remove-project"  onClick={
//                                          () => {

//                                             if(!confirmAlert({title : "Supprimer", message : "Êtes vous sûr de vouloir supprimer ce projet ?" ,buttons: [
//                                                 {
//                                                   label: 'Oui',
//                                                   onClick: () => 
                                    
//                                                   axios.delete(`${FETCH}/projects/${projects.id}`)
//                                                 },
//                                                 {
//                                                   label: 'Non',
                                                  
//                                                 }
//                                               ]})) {
                                               
//                                             }
                                     
                                        
//                                     }
//                                 }/>
//                     </div>
//                             ))
//                             }
//                 </div>
//             </section>
//         </div>
//             <section className="button-message-container">
//                 <button onClick={logOut}>Log Out</button>
//             </section>
//         </div>
//     )

 }

export default Admin;


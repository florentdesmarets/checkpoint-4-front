// import { useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import UserContext from "../login/UserContext";

// export default function ProtectedRoute({ component: Component, from : from}) {

// const { user , setUser } = useContext(UserContext);

//   return (
//     <Route>
//       { user !== null ?
//            <Component user={user} />
//       :
//         <Redirect to="/loged" from={from}/>
//    }
//     </Route>
//   );
// }
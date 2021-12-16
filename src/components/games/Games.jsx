import './Games.css'
import Background from '../background/Background';
import Snake from 'react-simple-snake'

export default function Games() {
    

    return(
        
        <div className="games-container">
            <Background/>
            <Snake/>
        </div>
      
       
    );
}
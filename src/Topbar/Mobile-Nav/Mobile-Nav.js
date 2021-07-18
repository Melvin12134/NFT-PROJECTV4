import './Mobile-Nav.css';
import { NavLink} from 'react-router-dom';

import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Login } from '../Login/Login';
import { useState } from 'react';


export const MobileNav = (props) => {


    const [isLoginvis, setIsLoginvis] = useState(false);



    return ( (props.trigger) ? 
    
    <div className="mobile-nav-container">
            {(isLoginvis === true ) ? <div onClick={() => setIsLoginvis(!isLoginvis)} className="closeloginicon"><AiOutlineArrowLeft size="30px"></AiOutlineArrowLeft></div> : ""}
                    <ul onClick={() => props.closeIsMobilenav(false)}>
                        <li >
                            <NavLink exact to="/">Home</NavLink>
                            </li>
                        <li>
                            <NavLink exact to ="/explore">Explore</NavLink>
                            </li>
                        <li>
                            <NavLink exact to ="/settings">Settings</NavLink>
                        </li>
                     </ul>
                <div className="seperator-nav"></div>
<div className="buttoncontainer">
    
<button onClick={() => setIsLoginvis(!isLoginvis)}>Login</button>

</div>
<Login trigger={isLoginvis}>
    
</Login>


    </div>
    
    : ""


    )
}
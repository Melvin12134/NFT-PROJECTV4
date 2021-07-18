import { Theme } from './Theme/Theme';
import './Topbar.css';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { Login } from './Login/Login';
import {useState, useRef, useEffect} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {MobileNav} from './Mobile-Nav/Mobile-Nav';

export const Topbar = () => {




const [isPopup, setIsPopup] = useState(false);
const [isMobilenav, setIsMobilenav] = useState(false);

let menuRef = useRef();

useEffect (() => {
    document.addEventListener("mousedown", (event) => {
        if (!menuRef.current.contains(event.target)) {
            setIsPopup(false);
        }
    })
})

    return (
        <div ref={menuRef}>
            <div className="topcontainer">
                <div className="topbar">
                    <div className="topcontent">
                        {(isMobilenav === false) ? <div onClick={() => setIsMobilenav(!isMobilenav)} className="mobile-nav">
                            <div className="nav-line"></div>
                            <div className="nav-line"></div>
                            <div className="nav-line"></div>
                            </div>: <div onClick={() => setIsMobilenav(!isMobilenav)} className="closeicon"><AiOutlineClose size="25px"></AiOutlineClose></div>}
                        <button onClick={() => setIsPopup(!isPopup)} className={(isPopup === true) ? "login-btn-unactive" : "login-btn"}>{isPopup === false ? "Login" : "Close"}</button>
                            <div className="seperator-three"></div>
                        {/*<button className="upload-btn"><AiOutlineCloudUpload /></button>
                            <div className="seperator-three"></div>*/}
                        <Theme />
                            <Login trigger={isPopup}></Login>
                            
                    </div>
                </div>
              <div className="seperator-two"></div>
            </div>
            <MobileNav trigger={isMobilenav} closeIsMobilenav={() => setIsMobilenav(false)}></MobileNav>
         </div>
    )
}
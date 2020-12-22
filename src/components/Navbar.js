import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    //State to handle clicking of hamburger menu
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RK <i class="fab fa-grav"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                           Projects
                        </Link>   
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>LinkedIn <i class="fab fa-linkedin"></i></Button>}

            </div>
        </nav>

        </>
    );
}

export default Navbar;

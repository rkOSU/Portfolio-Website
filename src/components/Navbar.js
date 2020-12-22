import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as LinkExternal} from 'react-router-dom';
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

    //Handle the situation where buttons come back in mobile view
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="" className="navbar-logo" onClick={closeMobileMenu}>
                    RK <i class="fab fa-grav"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={() => {
                            closeMobileMenu();
                            console.log('hi');
                        } }>
                            About
                        </Link>   
                    </li>
                    <li className="nav-item">
                        <Link 
                        activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-links"
                        onClick={closeMobileMenu}>
                           Projects
                        </Link>   
                    </li>
                    <li className="nav-item">
                        <LinkExternal to='/projects' className="nav-links-mobile" onClick={closeMobileMenu} to={{ pathname: 'https://www.linkedin.com/in/raj-kondaveeti-081167166/' }} target="_blank">
                           LinkedIn<i class="fab fa-linkedin"></i>
                        </LinkExternal>   
                    </li>
                    <li className="nav-item">
                        <LinkExternal className="nav-links-mobile" onClick={closeMobileMenu} to={{ pathname: 'https://github.com/rkOSU' }} target="_blank" >
                           GitHub<i class="fab fa-github"></i>
                        </LinkExternal>   
                    </li>
                </ul>
                {button && <LinkExternal className="nav-links" onClick={closeMobileMenu} to={{ pathname: 'https://www.linkedin.com/in/raj-kondaveeti-081167166/' }} target="_blank">
                           LinkedIn<i class="fab fa-linkedin"></i>
                </LinkExternal>  } 
                {button && <LinkExternal className="nav-links" onClick={closeMobileMenu} to={{ pathname: 'https://github.com/rkOSU' }} target="_blank" >
                           GitHub<i class="fab fa-github"></i>
                </LinkExternal>  } 
                            
                           
                
                
        
            </div>
        </nav>

        </>
    );
}

export default Navbar;

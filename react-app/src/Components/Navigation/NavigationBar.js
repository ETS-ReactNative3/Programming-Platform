import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
//import FileSaver from 'file-saver';
import { Button } from '../button/Button';
import { checkLoggedIn } from '../reuse/Misc';
import './NavigationBar.css'

function NavigationBar() {
    const [click, setClick] = useState(false);
    const [logged, setlogged] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const listenStorage = () => {
        localStorage.getItem('User') ? setlogged(true) : setlogged(false);
    }
    window.addEventListener('storage', () => {
        console.log("storage event")
        listenStorage();
    })
    //window.onstorage = () => { listenStorage() };
    useEffect(() => {
        listenStorage();
        checkLoggedIn();
    }, []);

    //var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TS Prog
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavHashLink smooth
                            to='/Events' className='nav-links' scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} onClick={() => { closeMobileMenu() }}>
                            Events
                        </NavHashLink>
                    </li >

                    <li className='nav-item'>
                        <NavHashLink smooth scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}
                            to='/Practice' className='nav-links' onClick={closeMobileMenu}>
                            Practice
                        </NavHashLink>
                    </li>

                    {logged ? (
                        <li>
                            <HashLink to='/Profile'
                                className='nav-links-mobile' onClick={closeMobileMenu}>
                                Profile
                            </HashLink>
                        </li>
                    ) : (
                        <li>
                            <HashLink to='/login'
                                className='nav-links-mobile' onClick={closeMobileMenu}>
                                SingIn/SingUp
                            </HashLink>
                        </li>
                    )}
                </ul>
                {logged ?
                    <div className='button-show-mobile'>
                        <Button buttonStyle='btn--primary--black' offset='80' path='/Profile'>Profile</Button>
                    </div>
                    :
                    <div className='button-show-mobile'>
                        <Button buttonStyle='btn--primary--black' offset='80' path='/login'>SignIn/SignUp</Button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default NavigationBar;

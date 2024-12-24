import React, { useEffect, useState } from 'react'
import '../Css/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else {
    //             handleShow(false);
    //         }
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    return (

        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className='nav_logo'
                src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
                alt='Netflix Logo' 
            />

            <img 
                className='nav_avator'
                src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' 
                alt='logo'
            />
        </div>


    )
}

export default Nav;


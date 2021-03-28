import React from 'react'
import "../styles/Nav.css";
import Logo from "../assets/images.png";
import { Link } from 'react-router-dom';

function Nav({ inlogin }) {

    const [show, handleShow] = React.useState()

    React.useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })

    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <Link to='/'>
                <img
                    className='nav___logo'
                    src={Logo}
                    alt='Kino Bar'
                />
            </Link>

       
               
                    <Link to='/auth'>
                        <img
                            className='nav__avatar'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-45gYPtG2C5jtj3zGW-T5-GsTlCl4m4jhVAlP2iA0SrFfRZg1S1hm-Iv6E2XRvNPAVuo&usqp=CAU'
                            alt='Log'
                        />
                    </Link>
          
        </div>
    )
}

export default Nav

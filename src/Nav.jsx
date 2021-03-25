import React from 'react'
import "./Nav.css";
import Logo from "./images.png";

function Nav() {
    
    const [show, handleShow] = React.useState()
    
    React.useEffect(() => {

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav___logo'
                src={Logo}
                alt='Kino Bar'
            />

            <img 
                className='nav__avatar' 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-45gYPtG2C5jtj3zGW-T5-GsTlCl4m4jhVAlP2iA0SrFfRZg1S1hm-Iv6E2XRvNPAVuo&usqp=CAU'
                alt='Log'
            />
        </div>
    )
}

export default Nav

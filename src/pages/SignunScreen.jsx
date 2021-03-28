import React from 'react'
import { auth } from "../assets/firebase";

import "../styles/SignunScreen.css";
function SignunScreen() {
    const emailRef = React.useRef(null)
    const passwordRef = React.useRef(null)

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then((authUser) => {
                console.log(authUser);
            }).catch(error => alert(error.message))
    }

    return (
        <div className='signunScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='password' type='password' />
                <button
                    type='submit'
                    onClick={signIn}
                >Sign in</button>
                <h4>
                    <span className='signunScreen__gray'>
                        Хотите зарегистрироваться?
                    </span>
                    <span
                        className='signunScreen__link'
                        onClick={register}
                    >
                        Зарегистрироваться.
                    </span>

                </h4>
            </form>
        </div>
    )
}

export default SignunScreen

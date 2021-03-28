import React, { useState } from 'react'
import Logo from "../assets/images.png";
import '../styles/loginScreen.css'
import SignunScreen from './SignunScreen';

function Auth() {
    const [signin, setSignin] = useState(false)

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img
                    className='loginScreen__logo'
                    src={Logo}
                    alt='Kino Bar'
                />
                <button
                    onClick={() => setSignin(true)}
                    className='loginScreen_button'>
                    Sign in
                </button>
                <div className='loginScreen__gradient' />
                <div className="loginScreen__body">
                    {signin ? (
                        <SignunScreen />
                    ) : (
                            <>
                                <h1>Фильмы, сериалы и многое другое
                                без ограничений.
                                    </h1>
                                <h2>Смотрите где угодно, в любоев время</h2>
                                <h3>
                                    Готовы смотреть? Введите адрес
                                    электронной почты, чтобы оформить
                                    или возобновить подписку.
                                    </h3>
                                <div className="loginScreen__input">
                                    <form>
                                        <input
                                            type='email'
                                            placeholder='Email адрес'
                                        />
                                        <button
                                            onClick={() => setSignin(true)}
                                            className='loginScreen__getStarted'>
                                            Начать
                                            </button>
                                    </form>
                                </div>
                            </>
                        )}
                </div>

            </div>
        </div>
    )
}

export default Auth

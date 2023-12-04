'use client'
import Header from '@/app/components/Header';
import styles from './AuthProvider.module.scss'
import classNames from 'classnames/bind'
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { useMutation } from '@tanstack/react-query'
import { useState, type ReactNode, useEffect } from 'react'
import { api } from '@/app/api';
// import Account from '../home-search/account/page';
// import { account } from "../services/appwriteConfig";

import { FaFacebook } from "react-icons/fa";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import Account from '../home-search/account/page';
import { redirect } from 'next/navigation'

const cx = classNames.bind(styles)
function PageAuth() {
    const [isAuth, setIsAuth] = useState(true)
    useEffect(() => {
        function logout() {
            setIsAuth(false)
            localStorage.removeItem('session')
            api.currentAccount = null
        }
        const localStorageSession = JSON.parse(localStorage.getItem('session') || 'false')
        if (localStorageSession) {

            api.currentAccount = localStorageSession
            if (new Date(localStorageSession.expire || 0).getTime() < new Date().getTime()) logout()
        }
        api.checkIsAuth(logout)

    }, [])


    // return <>{isAuth ? <Account /> : <Login />}</>
    return <Login></Login>
}
const Login = ({ setIsAuth }: any) => {
    const {
        mutate: login,
        // isLoading,
        isError,
        error,
    } = useMutation({
        mutationFn: (name: string) => { //values: any
            return api.createSession(name)
        },
        onSuccess: (response) => {
            localStorage.setItem('session', JSON.stringify(response))
            setIsAuth(true)
        },
    })
    const googleAuth = (e: any, name: string) => {
        e.preventDefault();
        login(name)
    };

    return (
        <>
            <Header />
            <section className={cx('signIn-section')}>

                <div className={cx('signIn-box')}>
                    <div className={cx('form-container')}>
                        <div className={cx("form-header")}>
                            Log In
                        </div>
                        <form className={cx('form')}>
                            <div className={cx('TextInput_container')}>
                                <input name="email" className={cx('TextInput_input__email')} placeholder="Email*" type="text" autoComplete="email" autoCapitalize="none" />
                            </div>
                            <div className={cx('TextInput_container')}>
                                <input name="password" className={cx('TextInput_input__email')} placeholder="Password*" type="password" autoComplete="current-password" autoCapitalize="none" />
                            </div>
                            <button type='submit' className={cx('form__button')} >
                                Войти
                            </button>
                            <div className="">OR</div>


                            <div className={cx('form_social__media')} >
                                <button onClick={(e) => googleAuth(e, 'google')} className={cx('form_social__media_button')}>
                                    <div className={cx('form_social__media_google')}>
                                        <div className=""><FcGoogle /></div>
                                        Continue with Google
                                    </div>
                                </button>
                                <button onClick={(e) => googleAuth(e, 'facebook')} className={cx('form_social__media_button')}>
                                    <div className={cx('form_social__media_google')}>
                                        <div className=""><FaFacebook /></div>
                                        Continue with Facebook
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}
export default PageAuth
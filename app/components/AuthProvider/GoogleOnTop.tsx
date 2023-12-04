'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import PageAuth from './page'
import { api } from '@/app/api'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import useGoogleIdentify from '@/app/hooks/GoogleOnTop';
function GoogleOnTop({ children, ...rest }: any) {
    // const [isAuth, setIsAuth] = useState<boolean>(false)
    // GoogleOnTop()
    const nextAuthOpt = {
        redirect: true
    }

    const googleOpt = {
        isOneTap: true
    }

    const { isSignedIn } = useGoogleIdentify({
        nextAuthOpt, googleOpt
    })



    // const localUser = JSON.parse(localStorage.getItem('session') || 'false');
    let [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        //check local token or something
        function logout() {
            console.log('logged out')
            setIsAuth(false)
            localStorage.removeItem('session')
            api.currentAccount = null
        }
        const localStorageSession = JSON.parse(localStorage.getItem('session') || 'false')
        if (localStorageSession) {
            console.log('checking session')
            api.currentAccount = localStorageSession
            // if (new Date(localStorageSession.expire || 0).getTime() < new Date().getTime()) logout()
        }

        api.checkIsAuth(logout)

    }, []);

    useEffect(() => {
        setIsAuth(false)
    }, [isAuth, setIsAuth])
    return (
        <>{children}</>

    )
}

export default GoogleOnTop
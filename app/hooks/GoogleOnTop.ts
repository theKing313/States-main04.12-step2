'use client'
import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { api } from '../api'
// import { isLocalURL } from 'next/dist/shared/lib/router/router'
const useGoogleIdentify = (props: { nextAuthOpt: boolean, googleOpt: boolean } | any) => {
    const url = 'https://accounts.google.com/gsi/client'
    // const { data: session } = useSession()
    const session = false
    const [isLoading, setIsLoading] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    const { nextAuthOpt, googleOpt } = props || {}

    useEffect(() => {
        if (session) {
            setIsSignedIn(true)
        }
    }, [session])
    async function setFd(response: any) {
        localStorage.setItem('session', JSON.stringify(response))
        api.createSession('google')
    }
    useEffect(() => {
        // add Google Identify script
        let script = document.createElement('script')
        script.async = true
        script.src = url
        document.head.appendChild(script)

        // initialize Google
        // if (!isLoading && !isSignedIn) {
        const { google } = window
        const localStorageSession = JSON.parse(localStorage.getItem('session') || 'false')
        function logout() {
            localStorage.removeItem('session')
            api.currentAccount = null
        }
        api.checkIsAuth(logout)
        if (google && localStorageSession == false) {
            google.accounts.id.initialize({
                client_id: "438776048708-9al6lhegfrmd8qce4303r9f4p6948cob.apps.googleusercontent.com",
                callback: async (response: any) => {
                    setIsLoading(true)

                    setFd(response)
                    setIsLoading(false)
                },
                ...googleOpt
            })


            // prompt one tap
            if (googleOpt.isOneTap) {
                google.accounts.id.prompt((notification: any) => {
                    if (notification.isNotDisplayed()) {
                        console.log('getNotDisplayedReaseon: ', notification.getNotDisplayedReason())
                    } else if (notification.isSkippedMoment()) {
                        console.log('isSkippedMoment: ', notification.getSkippedReason())

                    } else if (notification.isDismissedMoment()) {


                        console.log('isDismissedMoment: ', notification.getDismissedReason())
                    }
                })
            }

        }

    }, [googleOpt, isLoading, isSignedIn, nextAuthOpt])

    return { isLoading, isSignedIn }

}

export default useGoogleIdentify
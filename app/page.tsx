import styles from './page.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AOSWrapper from './components/AOSWrapper'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import TwoSides from './components/TwoSides'
import Contact from './components/Contact'
import MagazineScroll from './components/MagazinesScroll'
import VideoPlayer from './components/VideoPlayer'
import FloatingContacts from './components/FloatingContacts'

import GalaryScroll from './GalaryScroll'

import GoogleOnTop from './components/AuthProvider/GoogleOnTop'





export const revalidate = 3600 // revalidate at most every hour


export default function HomePage() {

  return (

    <AOSWrapper>
      <GoogleOnTop>
      </GoogleOnTop>
      <Header />
      <Hero />
      <TwoSides />
      <MagazineScroll />
      <Sponsors />
      <VideoPlayer />
      <GalaryScroll />
      <Contact />
      <Footer />
      <FloatingContacts />
    </AOSWrapper>







  )
}

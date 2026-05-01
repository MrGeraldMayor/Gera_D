"use-client"

import About from "./component/About"
import Footer from "./component/footer"
import Header from "./component/Header"
import Top from "./component/top"
import Track from "./component/Tracks"



export default function Home() {
  return (
    <>
    <Top/>
    <Header/>
    <About/>
    <Track/>
    <Footer/>
    </>
  )
}
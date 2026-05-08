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
    <div id="home">
        <Header />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="tracks">
        <Track />
      </div>
    <Footer/>
    </>
  )
}
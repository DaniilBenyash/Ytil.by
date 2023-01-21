import About from "../components/About"
import Header from "../components/Header"
import Main from "../components/Main"
import Price from "../components/Price"
import Galery from "../components/Gallery"
import Contacts from "../components/Contacts"
import ButtonScroll from "../components/ButtonScroll"

const Home = () => {
  
  return (
    <>
      <div className="home">
        <Header />
        <div className="home__body">
          <Main />
          <About />
          <Price />
          <Galery />
        </div>
        <Contacts />
        <ButtonScroll />
      </div>
    </>

  )
}

export default Home
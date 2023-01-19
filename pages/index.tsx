import About from "../components/About"
import Header from "../components/Header"
import Main from "../components/Main"
import Price from "../components/Price"

const Home = () => {
  
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Main />
        <About />
        <Price />
      </div>
    </div>
  )
}

export default Home
import About from "../components/About"
import Header from "../components/Header"
import Main from "../components/Main"

const Home = () => {
  
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Main />
        <About />
      </div>
    </div>
  )
}

export default Home
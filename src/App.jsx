import Boundaries from "./components/Boundaries"
import Build from "./components/Build"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import GrowPage from "./components/GrowPage"
import Launch from "./components/Launch"
import Navbar from "./components/Navbar"
import Questions from "./components/Questions"
import RequestAccess from "./components/RequestAccess"
import WebApp from "./components/WebApp"
import WebBuild from "./components/WebBuild"

function App() {

  return (
    <>
    <Navbar />
    <Build />  
    <WebApp />
    <WebBuild />
    <Launch />  
    <GrowPage />
    <div className="bg-slate-100 py-3">
    <Boundaries />
    <Cards />
    </div>
    <Questions />
    <RequestAccess />  
    <Footer />
    </>
  )
}

export default App

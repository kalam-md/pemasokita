import { Navbar, Header, Overview, ClickToAction, FrequentlyAskedQuestion, Download, Footer } from "./components"

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className="bg-wheat">  
      <Overview/>
      </div>
      <ClickToAction/>
      <FrequentlyAskedQuestion/>
      <div className="bg-lime">
      <Download/>
      </div>
      <div className="bg-dark-green">
      <Footer/>
      </div>
    </>
  )
}

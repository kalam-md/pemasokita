import { Navbar, Header, Overview, ClickToAction, FrequentlyAskedQuestion, Download, Footer } from "./components"

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="bg-lime py-20">
      <Header/>
      </div>
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

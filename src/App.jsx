import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import Intro from "./components/Intro"
import Schedule from "./components/Schedule"
import Story from "./components/Story"
import Locations from "./components/Locations"
import DressCode from "./components/DressCode"
import Gallery from "./components/Gallery"
import RSVP from "./components/RSVP"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Countdown />
      <Intro />
      <Schedule />
      <Story />
      <Locations />
      <DressCode />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
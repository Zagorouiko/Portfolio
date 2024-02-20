import './App.css'
import Header from './components/Header'
import About from './components/About'
import Project01 from './components/Project01'
import Project02 from './components/Project02'
import Project03 from './components/Project03'
import Project04 from './components/Project04'
import Guestbook from './components/Guestbook'
import Footer from './components/Footer'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function App() {

  return (
    <>
    <ReactLenis root>
      <section>
        <Header />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Project01 />
      </section>

      <section>
        <Project02 />
      </section>

      <section>
        <Project03 />
      </section>

      <section>
        <Project04 />
      </section>

      <section>
        <Guestbook />
      </section>

      <section>
        <Footer />
      </section>
    </ReactLenis>
    </>
  )
}

export default App

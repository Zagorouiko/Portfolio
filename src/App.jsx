import Header from './components/Header'
import About from './components/About'
import ProjectTransition from './components/ProjectTransition'
import Project01 from './components/Project01'
import Project02 from './components/Project02'
import Project03 from './components/Project03'
import Project04 from './components/Project04'
import Guestbook from './components/Guestbook'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Chatbox from './components/Chatbox'
import Loading from './components/Loading'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react'

function App() {

  const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power4.out" } })

  useGSAP(() => {
    
    let scroller
    let sections

    tl.to(['aside'], {
        x: 0,
        stagger: .2
    })


    gsap.registerPlugin(ScrollTrigger)
    scroller = document.querySelector(".scroll")
    sections = gsap.utils.toArray(".scroll section")

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
          trigger: ".scroll",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".scroll").offsetWidth
      }
    })
  })

  // setTimeout(() => {
  //   setLoading(false)
  // }, 4000)

  useEffect(() => {

  }, [])

  return (
    <>
    {/* {loading ? <Loading /> :  */}

    <ReactLenis root>
      <div className='overflow-hidden'>

      <svg className="absolute top-0 left-0 opacity-50" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.5" y1="1" x2="1.5" y2="61" stroke="white" stroke-opacity="1" stroke-width="3"/>
        <line x1="59.9872" y1="2.01276" x2="-0.0106279" y2="1.49996" stroke="white" stroke-opacity="1" stroke-width="3"/>
      </svg>

      <svg className="absolute top-0 right-0 opacity-50" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="1.5" x2="7.62939e-06" y2="1.5" stroke="white" stroke-opacity="1" stroke-width="3"/>
        <line x1="58.9872" y1="59.9872" x2="59.5" y2="-0.0106279" stroke="white" stroke-opacity="1" stroke-width="3"/>
      </svg>

      <svg className="absolute bottom-0 left-0 opacity-50" width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="58.5" x2="61" y2="58.5" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
        <line x1="2.01276" y1="0.0128202" x2="1.49996" y2="60.0106" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
      </svg>

      <svg className="absolute bottom-0 right-0 opacity-50" width="59" height="61" viewBox="0 0 59 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="58.5" y1="60" x2="58.5" y2="1.14441e-05" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
        <line x1="0.0128202" y1="58.9872" x2="60.0106" y2="59.5001" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
      </svg>

      <aside>
        <Menu />
      </aside>

        <div className='flex flex-col items-center w-screen h-screen'>
          <Header />
        </div>

        <section>
          <About />
        </section>

        <section className='flex items-center justify-center bg-gradient-to-t from-[#111213] to-[#222222]'> 
          <ProjectTransition /> 
        </section>

        <div className="overflow-hidden">
          <div className="scroll flex overflow-x-hidden" style={{width: '400%'}}>
            <section className="bg-[#111213] " >
              <Project01 />
            </section>

            <section className='bg-[#111213] border-l-2 border-[#EAF6FF] ' >
              <Project02 />
            </section>

            <section className='bg-[#111213] border-l-2 border-[#C2E812] '>
              <Project03 />
            </section>

            <section className='bg-[#111213] border-l-2 border-[#474747]' >
              <Project04 />
            </section>
          </div>
        </div>

        <section className="bg-gradient-to-t from-[#111213] to-[#232528]">
          <Guestbook />
        </section>

        <section className='h-[40vh] bg-[#111213]'>
          <Footer />
        </section>
      </div>
    </ReactLenis>
  {/* } */}
  </>
  )
}

export default App

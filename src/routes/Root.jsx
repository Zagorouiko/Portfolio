import { Suspense, useRef, useEffect, useState } from "react"
import Header from '../components/Header'
import Project01 from "../components/Project01"
import Project02 from '../components/Project02'
import Guestbook from '../components/Guestbook'
import Footer from '../components/Footer'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Icon } from '@iconify/react'
import SplitType from 'split-type'
import { Canvas } from '@react-three/fiber'
import ParticleSystem from "../components/ParticleSystem"
import Smoke from '../components/Smoke'
import { createRoot } from 'react-dom/client'
import SmokeRenderer from "../components/SmokeRenderer"
import Starfield from "../components/Starfield"

function App() {
  const triggerRef = useRef(null)
  const appendRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // MENU OPEN ANIMATION
    const ham = document.querySelector(".ham");
    const menu = document.querySelector('ul.main-menu');
    const links = menu.querySelectorAll('li');

    const menuTL = gsap.timeline({ paused: true })

    menuTL.to(menu, {
      duration: .5,
      opacity: 1,
      height: '100vh',
      ease: 'expo.inOut',
    })

    menuTL.from(links, {
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut',
    }, "-=0.5")
    
    menuTL.reverse()

    ham.addEventListener('click', () => {
      menuTL.reversed(!menuTL.reversed())
      console.log('clicked')
    });

    // MENU SCREEN
    let optionElements = document.querySelectorAll('.option')

    optionElements.forEach((option, index) => {
      option.addEventListener('mouseenter', () => {
        gsap.to(option, {opacity: 1, duration: 0.3})
        gsap.to(option, {scale: 1.1, duration: 0.3})
      })

      option.addEventListener('mouseleave', () => {
        gsap.to(option, {opacity: 0.2, duration: 0.3})
        gsap.to(option, {scale: 1, duration: 0.3})
      })
    })

    // ABOUT SECTION
    const about = document.querySelector('.about')
    const aboutSplit = new SplitType(about, {type: 'chars' })
    const letters = aboutSplit.chars
    const imgs = gsap.utils.toArray('img')

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    letters.forEach((letter, index) => {
      const randomYPercent = getRandom(70, 1100);
      gsap.fromTo(letter, 
          { 
              yPercent: -randomYPercent,
              opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1, 
            scrollTrigger: {
                trigger: '.about',
                start: "top bottom",
                end: "bottom center",  
                scrub: true,
            }
          }
        )
    })

    gsap.fromTo('.greenArrow', {
      xPercent: -30,
    },
    {
      xPercent: 0,
      scrollTrigger: {
        trigger: '.about',
        start: "top bottom",
        end: "bottom center",  
        scrub: true,
       }
    })

    //HORIZONTAL SCROLL
    let scroller = document.querySelector(".scroll")
    let sections = gsap.utils.toArray(".scroll section")
    let project03 = document.querySelector(".Project03")

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


    imgs.forEach(img => {
      const speed = img.dataset.speed
      gsap.to(img, {
        yPercent: speed * 50,
        ease: 'none',
        scrollTrigger: {
            trigger: project03,
            containerAnimation: scrollTween,
            start: "left right",
            toggleActions: "play none none reset",
            scrub: true,
          }
        })
    })

    // Project -> Project transitions

     // T1
    const transitionTL = gsap.timeline()
    const transition1 = gsap.utils.toArray('.transition1')

    transition1.forEach((left, index) => {
      const vw = 50 + (index * 25)
      transitionTL.to(left, {
        opacity: 1,
        width: vw + 'vw',
        scrollTrigger: {
          trigger: '.sectionTransition1',
          containerAnimation: scrollTween,
          start: "left right",
          toggleActions: "play none none reset",
          scrub: true,
      },
        ease: 'expo.inOut',
      })
    })

      // T2
    const transition2 = gsap.utils.toArray('.transition2')

    transition2.forEach((left, index) => {
      transitionTL.to(left, {
        opacity: 0,
        width: '0px',
        scrollTrigger: {
          trigger: '.sectionTransition2',
          containerAnimation: scrollTween,
          start: "left right",
          toggleActions: "play none none reset",
          scrub: true,
      },
        ease: 'expo.inOut',
      })
    })

    // PROJECT TRANSITION
    const projectTextTL = gsap.timeline({defaults: {ease: 'power4.out'}, duration: .7})
    const projectTL = gsap.timeline({ defaults: { duration: 0.3, ease: "power4.out" } })

    projectTextTL
    .from('#arrow', {xPercent: -700, duration: 1})
    .from('svg #letter', {yPercent: -200, stagger: .15, skewX: 30, skewY: 60, scaleY: .9, opacity: 0, duration: 1})
    .from('#bracketL', {xPercent: -2000, duration: 1.5})
    .from('#bracketR', {xPercent: 2000, duration: 1.5}, '-=1.5')
    .to('#arrow', {xPercent: 1400, duration: 1})
    .to('#arrow', {rotation: 90, duration: .5, transformOrigin: 'center'})

    ScrollTrigger.create({
      trigger: ".transition",
      start: "center center",
      end: "bottom top",
      animation: projectTextTL,
      toggleActions: "play none none reverse",
      // pin: true,
      onLeave: () => {
        projectTL.fromTo('.projectSection', {opacity: 0}, {opacity: 1, duration: .5})
      },
      onEnterBack: () => {
        projectTL.to('.transition', {opacity: 1, duration: .2, toggleActions: "play none none reverse"})
        projectTL.fromTo('.projectSection', {opacity: 1}, {opacity: 0, duration: .5})
      },
      scrub:true,
    })
  })

  return (
    <>
    <ReactLenis root>
      <div className='overflow-hidden'>
        <nav className='relative'>

            <div id="nav-icon3" className={`ham fixed cursor-pointer top-5 right-5 opacity-50 z-50 ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <style>
              {`
                #nav-icon3 {
                  width: 40px;
                  height: 45px;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .5s ease-in-out;
                  -moz-transition: .5s ease-in-out;
                  -o-transition: .5s ease-in-out;
                  transition: .5s ease-in-out;
                  cursor: pointer;
                }
                
                #nav-icon3 span {
                  display: block;
                  position: absolute;
                  height: 4px;
                  width: 100%;
                  background: #EAF6FF;
                  opacity: 1;
                  left: 0;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .25s ease-in-out;
                  -moz-transition: .25s ease-in-out;
                  -o-transition: .25s ease-in-out;
                  transition: .25s ease-in-out;
                }
                
                #nav-icon3 span:nth-child(1) {
                  top: 0px;
                }
                
                #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
                  top: 12px;
                }
                
                #nav-icon3 span:nth-child(4) {
                  top: 24px;
                }
                
                #nav-icon3.open span:nth-child(1) {
                  top: 18px;
                  width: 0%;
                  left: 50%;
                }
                
                #nav-icon3.open span:nth-child(2) {
                  -webkit-transform: rotate(45deg);
                  -moz-transform: rotate(45deg);
                  -o-transform: rotate(45deg);
                  transform: rotate(45deg);
                }
                
                #nav-icon3.open span:nth-child(3) {
                  -webkit-transform: rotate(-45deg);
                  -moz-transform: rotate(-45deg);
                  -o-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                }
                
                #nav-icon3.open span:nth-child(4) {
                  top: 18px;
                  width: 0%;
                  left: 50%;
                }
              `}
            </style>

            <ul className='main-menu fixed w-full left-0 flex flex-col items-center opacity-0 justify-center h-0 bg-[#111213] z-40  text-5xl '>
            <li className="menuItem option opacity-20 z-50">
                  <div >
                    <a href="#">            
                      HOME
                    </a>
                  </div>          
                </li>
              
              <li className="menuItem option pt-10 opacity-20 z-50">
                <div>
                  <a href="#about">ABOUT</a>
                  </div>
                </li>

              <li className="menuItem option pt-10 opacity-20 z-50">
                  <div>
                  <a href="#1">PROJECTS</a>
                  </div>
                </li>

              <li className="menuItem option pt-10 opacity-20 z-50">
                  <div>
                    <a href="#guestbook">NFT GUESTBOOK</a>
                  </div>
                </li>

              <li className="menuItem option pt-10 opacity-20 z-50">
                  <div>
                    <a href="#contact">CONTACT</a>
                  </div>
                </li>              
            </ul>
        </nav>

        <div className='flex flex-col items-center w-screen h-screen'>
          <Header />
        </div>

    <section>
      <div ref={triggerRef} id="about" className="relative">
        <svg className="greenArrow absolute left-0 top-64 -z-50" width="736" height="255" viewBox="0 0 736 255" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-206 253L47 0H179L-73 252L-206 253Z" fill="#C2E812"/>
          <path d="M-148.48 114L-34.48 0H25L-88.55 113.55L-148.48 114Z" fill="#C2E812"/>
          <path d="M237.25 115.75L353 0H221L171.25 49.75L171 49.5V50L-32 253L101 252L171.99 181.01L172 182.5L244 254.5L375.5 254L237.25 115.75Z" fill="#C2E812"/>
          <path d="M426 254.5L557.5 254L419.25 115.75L535 0H403L353.25 49.75L353 49.5V50L290 114" fill="#C2E812"/>
          <path d="M604 254.5L735.5 254L597.25 115.75L713 0H581L531.25 49.75L531 49.5V50L468 114" fill="#C2E812"/>
        </svg>

        <div className="flex relative justify-between">
          <div className="m-scroll__title">
            <div className="text-[150px] opacity-5 font-semibold -z-10">
              <h1>
              <a>BLOCKCHAIN_</a>
              <a>DESIGNER_</a>
              <a>DEVELOPER_</a>
            </h1>
            <h1>
              <a>BLOCKCHAIN_</a>
              <a>DESIGNER_</a>
              <a>DEVELOPER_</a>
            </h1>
            </div>
          </div>
        </div>

          <div className="about absolute float-right mr-24 mt-5 glitch text-6xl top-32 right-0 font-semibold tracking-[.75em] " title="ABOUT">
            ABOUT
          </div>

          </div>

          <div className="grid grid-cols-12 grid-rows-12 h-full bg-gradient-to-b from-[#111213] to-[#222222]">
              <div className="col-start-2 col-end-7 row-start-5 row-end-11 text-[#EAF6FF] text-xl font-semibold">
                {/* <video src="/skull_loader.mov" type="video/mp4" autoPlay loop muted /> */}
                <div className="paragraph mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.</div>
              </div>

            <div className="paragraph col-start-8 col-end-12 row-start-5 row-end-11 text-[#EAF6FF] text-xl font-semibold">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.  Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed</p>
            </div>
          </div>

        <style>
          {`
          .m-scroll__title {
            display: flex;
            position: absolute;
            transform: scale(2);
            transition: all 1s ease;
          }
          
          .m-scroll__title > div {
            display: flex;
            animation: scrollText 33s infinite linear;
          }
          
          .m-scroll__title h1 {
            transition: all 2s ease;
          }
        
          
          @keyframes scrollText {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }

          .glow {
            color: #fff;
            text-shadow:
                0 0 7px #fff,
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #0fa,
                0 0 40px #0fa,
                0 0 45px #0fa,
                0 0 50px #0fa,
                0 0 75px #0fa;
          }
          `}
        </style>
      </section>

      <section className='transition flex items-center justify-center bg-gradient-to-t from-[#111213] to-[#222222] overflow-visible'> 
            <div className="top-0 flex relative justify-between z-20">
              <div className="m-scroll__title">
                <div className="text-[150px] opacity-5 font-semibold">
                  <h1>
                  <a>BLOCKCHAIN_</a>
                  <a>DESIGNER_</a>
                  <a>DEVELOPER_</a>
                </h1>
                <h1>
                  <a>BLOCKCHAIN_</a>
                  <a>DESIGNER_</a>
                  <a>DEVELOPER_</a>
                </h1>
                </div>
              </div>
            </div>
            <div id="SVG" className="flex justify-center h-screen items-center z-30">
              <svg width="800" height="55" viewBox="0 0 384 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="arrow" d="M1.09796 4.09795C0.394943 4.80118 1.01328e-05 5.75483 1.01328e-05 6.7492C1.01328e-05 7.74356 0.394943 8.69722 1.09796 9.40045L19.6605 27.9629L1.09796 46.5255C0.414867 47.2327 0.0368884 48.18 0.0454324 49.1632C0.0539765 50.1464 0.448359 51.087 1.14364 51.7823C1.83892 52.4776 2.77947 52.8719 3.76271 52.8805C4.74594 52.889 5.6932 52.511 6.40046 51.8279L27.6142 30.6142C28.3172 29.911 28.7122 28.9573 28.7122 27.9629C28.7122 26.9686 28.3172 26.0149 27.6142 25.3117L6.40046 4.09795C5.69723 3.39493 4.74357 3 3.74921 3C2.75484 3 1.80119 3.39493 1.09796 4.09795Z" fill="white"/>
                <path id="bracketL" d="M52.2 55H41.5C40.5 55 40 54.5 40 53.4V1.70001C40 0.700012 40.5 0.100006 41.5 0.100006H52.2C53.2 0.100006 53.7 0.600012 53.7 1.70001V4.90002C53.7 5.90002 53.2 6.5 52.2 6.5H48.5C47.9 6.5 47.6 6.80002 47.6 7.40002V47.9C47.6 48.5 47.9 48.8 48.5 48.8H52.2C53.2 48.8 53.7 49.3 53.7 50.4V53.6C53.7 54.4 53.2 55 52.2 55Z" fill="white"/>
                <path id="letter" d="M71.0001 47.7H64.7001C63.7001 47.7 63.1001 47.2 63.1001 46.1V1.70001C63.1001 0.700012 63.6001 0.100006 64.7001 0.100006H82.8001C86.6001 0.100006 89.6001 1.10001 91.8001 3.20001C93.9001 5.30001 95.0001 8.30001 95.0001 12.1V19.2C95.0001 23 93.9001 26 91.8001 28.1C89.7001 30.2 86.7001 31.2 82.8001 31.2H73.4001C72.8001 31.2 72.5001 31.5 72.5001 32V46C72.5001 47.2 72.0001 47.7 71.0001 47.7ZM73.3001 23.1H81.1001C82.7001 23.1 83.8001 22.8 84.4001 22.1C85.0001 21.4 85.4001 20.3 85.4001 18.8V12.6C85.4001 11 85.1001 9.90001 84.4001 9.20001C83.8001 8.50001 82.6001 8.20001 81.1001 8.20001H73.3001C72.8001 8.20001 72.5001 8.5 72.5001 9V22.2C72.5001 22.9 72.8001 23.1 73.3001 23.1Z" fill="white"/>
                <path id="letter" d="M110.2 47.7H103.9C102.9 47.7 102.3 47.2 102.3 46.1V1.70001C102.3 0.700012 102.8 0.100006 103.9 0.100006H121.5C125.3 0.100006 128.4 1.20002 130.5 3.30002C132.7 5.40002 133.8 8.40002 133.8 12.3V18.1C133.8 23.7 131.6 27.4 127.2 29.2V29.5L135.1 46C135.5 47.2 135.1 47.8 133.8 47.8H127.8C126.9 47.8 126.3 47.7 125.9 47.5C125.5 47.3 125.2 46.9 124.9 46.2L117.5 30.2H112.5C111.9 30.2 111.6 30.5 111.6 31V46.2C111.7 47.2 111.2 47.7 110.2 47.7ZM112.5 22.6H119.8C121.4 22.6 122.5 22.3 123.3 21.6C124 20.9 124.4 19.9 124.4 18.4V12.6C124.4 11.1 124 10 123.3 9.30002C122.6 8.60002 121.4 8.30002 119.8 8.30002H112.5C112 8.30002 111.7 8.60001 111.7 9.10001V21.8C111.7 22.3 112 22.6 112.5 22.6Z" fill="white"/>
                <path id="letter" d="M162.6 47.7H154.3C150.4 47.7 147.4 46.7 145.3 44.6C143.2 42.5 142.1 39.5 142.1 35.6V12.1C142.1 8.20001 143.2 5.20001 145.3 3.10001C147.4 1.00001 150.4 0 154.3 0H162.6C166.5 0 169.5 1.00001 171.6 3.10001C173.7 5.20001 174.8 8.20001 174.8 12.1V35.6C174.8 39.5 173.7 42.5 171.6 44.6C169.5 46.7 166.5 47.7 162.6 47.7ZM155.8 39.6H161.1C162.7 39.6 163.8 39.3 164.5 38.6C165.2 37.9 165.5 36.8 165.5 35.2V12.6C165.5 11 165.2 9.90001 164.5 9.20001C163.8 8.50001 162.7 8.20001 161.1 8.20001H155.8C154.2 8.20001 153.1 8.50001 152.5 9.20001C151.9 9.90001 151.5 11 151.5 12.6V35.2C151.5 36.8 151.8 37.9 152.5 38.6C153.1 39.2 154.2 39.6 155.8 39.6Z" fill="white"/>
                <path id="letter" d="M205.2 0.100006H211.4C212.4 0.100006 213 0.600006 213 1.60001V35.6C213 39.4 211.9 42.4 209.8 44.5C207.7 46.6 204.7 47.6 200.8 47.6H193.4C189.5 47.6 186.5 46.6 184.4 44.5C182.3 42.4 181.2 39.4 181.2 35.5V28.5C181.2 27.5 181.7 26.9 182.8 26.9H189.1C190.1 26.9 190.7 27.4 190.7 28.5V35C190.7 36.6 191 37.7 191.7 38.4C192.4 39.1 193.5 39.4 195 39.4H199.4C201 39.4 202.1 39.1 202.7 38.4C203.3 37.7 203.7 36.6 203.7 35V1.70001C203.6 0.600012 204.1 0.100006 205.2 0.100006Z" fill="white"/>
                <path id="letter" d="M248 47.7H223.8C222.8 47.7 222.2 47.2 222.2 46.1V1.70001C222.2 0.700012 222.7 0.100006 223.8 0.100006H248C249 0.100006 249.5 0.600012 249.5 1.70001V6.70001C249.5 7.70001 249 8.30002 248 8.30002H232.5C231.9 8.30002 231.6 8.60001 231.6 9.10001V18.7C231.6 19.2 231.9 19.5 232.5 19.5H245.2C246.2 19.5 246.8 20 246.8 21.1V26.1C246.8 27.1 246.3 27.7 245.2 27.7H232.5C231.9 27.7 231.6 28 231.6 28.5V38.7C231.6 39.2 231.9 39.5 232.5 39.5H248C249 39.5 249.5 40 249.5 41.1V46.1C249.4 47.2 248.9 47.7 248 47.7Z" fill="white"/>
                <path id="letter" d="M277.2 47.7H269.1C265.2 47.7 262.2 46.7 260.1 44.6C258 42.5 256.9 39.5 256.9 35.6V12.1C256.9 8.20001 258 5.20001 260.1 3.10001C262.2 1.00001 265.2 0 269.1 0H277.2C281 0 284 1.00001 286.2 3.10001C288.3 5.20001 289.4 8.2 289.4 12V15.5C289.4 16.6 288.9 17.1 287.8 17.1H281.6C280.6 17.1 280 16.6 280 15.5V12.5C280 10.9 279.7 9.80001 279 9.10001C278.3 8.40001 277.2 8.10001 275.6 8.10001H270.6C269.1 8.10001 268 8.40001 267.3 9.10001C266.6 9.80001 266.3 10.9 266.3 12.5V35.1C266.3 36.7 266.6 37.8 267.3 38.5C268 39.2 269.1 39.5 270.6 39.5H275.6C277.2 39.5 278.3 39.2 279 38.5C279.7 37.8 280 36.7 280 35.1V32.1C280 31 280.5 30.5 281.6 30.5H287.8C288.9 30.5 289.4 31 289.4 32.1V35.6C289.4 39.4 288.3 42.4 286.2 44.5C284 46.7 281 47.7 277.2 47.7Z" fill="white"/>
                <path id="letter" d="M312.2 47.7H306C304.9 47.7 304.4 47.2 304.4 46.1V9C304.4 8.5 304.1 8.20001 303.6 8.20001H295.2C294.2 8.20001 293.6 7.70001 293.6 6.60001V1.60001C293.6 0.600006 294.1 0 295.2 0H323.2C324.2 0 324.8 0.500006 324.8 1.60001V6.60001C324.8 7.60001 324.3 8.20001 323.2 8.20001H314.8C314.2 8.20001 313.9 8.5 313.9 9V46.1C313.7 47.2 313.2 47.7 312.2 47.7Z" fill="white"/>
                <path id="letter" d="M329.1 35.6V34.1C329.1 33.1 329.6 32.5 330.7 32.5H337C338 32.5 338.6 33 338.6 34.1V34.7C338.6 36.6 339 37.9 339.7 38.5C340.4 39.2 341.8 39.5 343.8 39.5H347.3C349.2 39.5 350.6 39.1 351.3 38.4C352.1 37.7 352.4 36.3 352.4 34.3V33.4C352.4 32 351.8 30.9 350.7 30.1C349.5 29.3 348.1 28.9 346.4 28.7C344.7 28.6 342.8 28.3 340.8 27.8C338.8 27.4 336.9 26.8 335.2 26.2C333.5 25.5 332 24.2 330.9 22.3C329.7 20.4 329.2 17.8 329.2 14.8V12.2C329.2 8.40001 330.3 5.40001 332.5 3.20001C334.7 1.10001 337.7 0 341.5 0H348.9C352.8 0 355.8 1.10001 358 3.20001C360.2 5.30001 361.3 8.30001 361.3 12.2V13.6C361.3 14.6 360.8 15.2 359.7 15.2H353.4C352.4 15.2 351.8 14.7 351.8 13.6V13.2C351.8 11.3 351.4 10 350.7 9.30002C350 8.60002 348.6 8.30002 346.6 8.30002H343.7C341.7 8.30002 340.3 8.70002 339.6 9.40002C338.9 10.2 338.5 11.7 338.5 13.9V15.3C338.5 17.6 340.5 19 344.6 19.3C348.8 19.6 352.5 20.5 355.8 21.8C357.5 22.5 359 23.9 360.1 25.8C361.3 27.7 361.8 30.1 361.8 33.1V35.6C361.8 39.4 360.7 42.4 358.5 44.6C356.3 46.7 353.3 47.8 349.5 47.8H341.4C337.6 47.8 334.5 46.7 332.4 44.6C330.1 42.4 329.1 39.4 329.1 35.6Z" fill="white"/>
                <path id="bracketR" d="M369.8 53.4V50.2C369.8 49.2 370.3 48.6 371.4 48.6H375.1C375.6 48.6 375.9 48.3 375.9 47.7V7.20001C375.9 6.60001 375.6 6.30002 375.1 6.30002H371.4C370.4 6.30002 369.8 5.80001 369.8 4.70001V1.70001C369.8 0.700012 370.3 0.100006 371.4 0.100006H382C383 0.100006 383.5 0.600012 383.5 1.70001V53.4C383.5 54.5 383 55 382 55H371.4C370.3 55 369.8 54.4 369.8 53.4Z" fill="white"/>
              </svg>
            </div>
              
              <div className="smoke absolute h-screen w-full">
                <Canvas camera={{position: [0, 0, 150], fov: 75 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={1.5}/>                      
                    <Smoke />
                  </Suspense>
                </Canvas> 
              </div>
              <div ref={appendRef} className="absolute h-screen w-full" />
              {/* <SmokeRenderer /> */}
           </section>

        <div className="horizontalScroll overflow-hidden">
          <div className="scroll flex overflow-x-hidden" style={{width: '500%'}}>

          <div className="absolute z-20 h-full w-screen">
              <Canvas camera={{position: [0, 0, 0] }}>
                <Starfield />
                <ambientLight />
              </Canvas>
            </div>

            <section className="Project01 projectSection bg-[#000000] z-30" >
              <Project01 />
            </section>
            
 

            <section className="sectionTransition1 bg-[#000000]">
              <div className="absolute transition1 h-screen w-0 opacity-0 bg-[#222222] z-50"/>          
              <div className="absolute transition1 h-screen w-0 opacity-0 bg-[#232528] z-40"/>
              <div className="absolute transition1 h-screen w-0 opacity-0 bg-[#0b0d0a] z-30"/>
            </section>

            <section className='Project02 bg-[#0b0d0a] z-30'>
              <Project02 />
            </section>

            <section className="sectionTransition2 bg-[#000000]">
              <div className="absolute transition2 h-screen w-[50%] right-0  bg-[#222222]  z-50"/>          
              <div className="absolute transition2 h-screen w-[75%] right-0  bg-[#232528]  z-40"/>
              <div className="absolute transition2 h-screen w-screen  bg-[#0b0d0a] z-30"/>
            </section>

            <section className='Project03 bg-[#000000] flex justify-center items-center overflow-hidden  z-30'>
              <div className="grid grid-cols-24 grid-rows-24 h-full w-full gap-4">
              <img className="clipImg absolute right-[9%] top-[33%] bg-slate-900 z-40" src="/img9.jpg"/>


                <div className="col-start-8 col-end-20 row-start-12 row-end-14">
                    <div className="relative text-8xl text-[#5EB1BF] font-kuano mix-blend-color-dodge z-50"><span className="savage text-white -skew-x-12">SA</span>VAGE <span className="savage text-white">GA</span>RDEN                 
                    </div>


                    <div className="flex flex-row mix-blend-soft-light">
                    <a href="https://github.com/Zagorouiko/Savage-Garden" target="_blank">
                      <Icon className="cursor-pointer" color="#FF1D8E" width="35" height="35" icon="ri:github-fill"/>
                    </a>
                    <a href="https://savage-garden-8e230876a8ae.herokuapp.com/" target="_blank">
                      <Icon className="mt-[3px] cursor-pointer" color="#FF1D8E" width="33" height="33" icon="dashicons:admin-site-alt3"/>
                    </a>
                    </div>
                    
                </div>

                <div className="col-start-3 col-end-8 row-start-3 row-end-11 z-10">
                  <img data-speed="-.5" className=" bg-slate-900" src="/img2.jpg"/>
                </div>

                <div className="col-start-18 col-end-23 row-start-15 row-end-25 z-10">
                  <img data-speed=".25" className="img bg-slate-900" src="/img3.jpg"/>
                </div>

                <div className="col-start-20 col-end-24 row-start-1 row-end-12 z-10">
                  <img data-speed="1" className="img bg-slate-900" src="/img2.jpg"/>
                </div>

                <div className="col-start-2 col-end-7 row-start-15 row-end-24 z-10">
                  <img data-speed="-.5" className="img bg-slate-900" src="/img4.jpg"/>
                </div>


                <div className="col-start-13 col-end-17 row-start-2 row-end-11">
                  <img data-speed="-.25" className="img bg-slate-900" src="/img5.jpg"/>
                </div>

                <div className="col-start-8 col-end-12 row-start-15 row-end-25 ">
                  <img data-speed=".25" className="img bg-slate-900" src="/img6.jpg"/>
                </div>

                <div className="col-start-12 col-end-16 row-start-14 row-end-24 ">
                  <img data-speed="-.80" className="img bg-slate-900" src="/img3.jpg"/>
                </div>

                <div className="col-start-8 col-end-12 row-start-3 row-end-13 ">
                  <img data-speed=".40" className="img bg-slate-900" src="/img3.jpg"/>
                </div>
            
                </div>

                <style>
                  {`
                  .savage {
                    background-image: linear-gradient(
                      to bottom right,
                      transparent 50%,
                      #FF1D8E 50%
                    ),
                    linear-gradient(#FF1D8E, #FF1D8E),
                    linear-gradient(to top left, transparent 50%, #FF1D8E 50%);
                  background-repeat: no-repeat;
                  background-size: 10px 40px, calc(100% - 20px) 40px, 10px 40px;
                  background-position: left center, center, right;
                  }

                  .savage::before {
                    transform: skew(15deg,-2deg);
                  }

                  .clipImg {
                    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
                    scale: 50%;
                  }
                  `}
                </style>
            </section>
          </div>
        </div>

        <section>
          <Guestbook />
        </section>

        <div>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  </>
  )
}

export default App

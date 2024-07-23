import { useState } from "react"
import Header from '../components/Header'
import Project01 from "../components/Project01"
import Project02 from '../components/Project02'
import Guestbook from '../components/Guestbook'
import Footer from '../components/Footer'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitType from 'split-type'
import { Canvas } from '@react-three/fiber'
import Smoke from '../components/Smoke'
import Starfield from "../components/Starfield"
import Stats from 'stats.js'
import CircularText from "../components/circularText"
import ChatBox from "../components/ChatBox"
import Menu from "../components/Menu"
import Loading from "../components/Loading"
import { OrbitControls } from '@react-three/drei'


function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  
  window.addEventListener('load', () => {
    setIsLoaded(true)
  })

/////////////////FPS////////////////////////
  
  // useEffect(() => {
  //   const stats = new Stats()
  //   // 0: fps, 1: ms, 2: mb, 3+: custom
  //   stats.showPanel(0)
  //   // stats.showPanel(1)
  //   // stats.showPanel(2) 
  //   document.body.appendChild(stats.dom)

  //   const animate = () => {
  //     stats.begin()

  //     // Your monitored code goes here

  //     stats.end()

  //     requestAnimationFrame(animate);
  //   };

  //   requestAnimationFrame(animate);

  //   // Cleanup function
  //   return () => {
  //     document.body.removeChild(stats.dom);
  //   }
  // }, [])

  useGSAP(() => {

    if (!isLoaded) return
    
    gsap.registerPlugin(ScrollTrigger)

    // MENU OPEN ANIMATION
    const ham = document.querySelector(".ham");
    const menu = document.querySelector('ul.main-menu');
    const links = menu.querySelectorAll('li');
    const menuItems = menu.querySelectorAll('li a');

    const menuTL = gsap.timeline({ paused: true })

    menuTL
    .to(menu, {
      duration: .5,
      opacity: 1,
      height: '100vh',
      ease: 'expo.inOut',
    })
    .to(menuItems, {
      display: 'block',
    }, "<")

    menuTL.from(links, {
      duration: .5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut',
    }, "-=0.5")
    
    menuTL.reverse()

    ham.addEventListener('click', () => {
      menuTL.reversed(!menuTL.reversed())
    })

    menuItems.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => {
        menuTL.reversed(!menuTL.reversed())
      })
    })

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

    // PROJECT03 ICONS
    const project03Icons = document.querySelectorAll('.icon03')

    project03Icons.forEach((icon, index) => {
      icon.addEventListener('mouseenter', () => {
        icon.style.color = '#5eb1bf'
      })

      icon.addEventListener('mouseleave', () => {
        icon.style.color = '#ff1d8e'
      })
    })

    // FOOTER
    let footerElements = document.querySelectorAll('.footerLink')
    
    footerElements.forEach((element, index) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {scale: 1.1, duration: 0.3})
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {scale: 1, duration: 0.3})
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

    // CIRCULAR TEXT
    const circularTextClockwises = document.querySelectorAll('.circlularTextClockwise')
    const circularTextCounters = document.querySelectorAll('.circlularTextCounter')

    const textRotationTimelineClockwise = gsap.timeline({
      scrollTrigger: {
          trigger: ".aboutSection",
          start: "top center",
          endTrigger: "#project",
          end: "top center",
          scrub: true,
      },
    })

    const textRotationTimelineCounter = gsap.timeline({
      scrollTrigger: {
          trigger: ".aboutSection",
          start: "top center",
          endTrigger: "#project",
          end: "top center",
          scrub: true,
      },
    })

    circularTextClockwises.forEach((circularTextClockwise, index) => {
        let rotation
        if (index > 0) {
          rotation = 360 / index
        } else {
          rotation = 360
        }

        textRotationTimelineClockwise.to(circularTextClockwise, {
          rotation: rotation, 
          ease: "none",
      }, 0)
    })


    circularTextCounters.forEach((circularTextCounter, index) => {
      let rotation
      if (index > 0) {
        rotation = -360 / index
      } else {
        rotation = -360
      }
      textRotationTimelineCounter.to(circularTextCounter, {
        rotation: rotation, 
        ease: "none",
    }, 0)
  })

    //HORIZONTAL SCROLL
    let scroller = document.querySelector(".scroll")
    let sections = gsap.utils.toArray(".scroll .horizontalSection")
    let project03 = document.querySelector(".Project03")

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * 2.5,
      ease: "none",
      scrollTrigger: {
          trigger: ".scroll",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => 
          "+=" + (document.querySelector(".scroll").offsetWidth)
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

    // PROJECT TRANSITION
    const projectTextTL = gsap.timeline({defaults: {ease: 'power4.out'}, duration: .7})
    const gptTL = gsap.timeline({defaults: {ease: 'power4.out'}, duration: .5})
    const chatBox = document.querySelector('.chatBox')

    projectTextTL
    .from('#arrow', {xPercent: -700, duration: 1})
    .from('svg #letter', {yPercent: -200, stagger: .15, skewX: 30, skewY: 60, scaleY: .9, opacity: 0, duration: 1})
    .from('#bracketL', {xPercent: -2000, duration: 1.5})
    .from('#bracketR', {xPercent: 2000, duration: 1.5}, '-=1.5')
    .to('#arrow', {xPercent: 1400, duration: 1})
    .to('#arrow', {rotation: 90, duration: .5, transformOrigin: 'center'})

    gptTL.to(chatBox, {opacity: 0, display: 'none'})

    ScrollTrigger.create({
      trigger: ".svgText",
      endTrigger: "#horizontalScroll",
      start: "top center",
      end: "top bottom",
      animation: projectTextTL,
      pin: true,
      pinSpacing: false,
      scrub: true,
    })

    // Chatbox ANIMATION
    ScrollTrigger.create({
      trigger: ".transition",
      start: "center center",
      end: "bottom top",
      animation: gptTL,
      toggleActions: "play none none reverse",
      scrub:true,
    })
    //////////////////////

  }, [isLoaded])

  return (
    <>
    {isLoaded ?  
    <ReactLenis root>
      
      <div className="relative">
        <ChatBox />
      </div>

     <Menu />

    <div className='header flex flex-col items-center w-screen h-screen'>
      <Header />
    </div>

    <div className="aboutSection height-[80vh]">
      <div id="about" className="relative">

        <div className="flex relative justify-between">
          <div className="m-scroll__title">
            <div className="text-[150px] max-xl:text-[100px] opacity-5 font-semibold -z-10">
              <h1>
              <div className="inline">BLOCKCHAIN_</div>
              <div className="inline">DESIGNER_</div>
              <div className="inline">DEVELOPER_</div>
            </h1>
            <h1>
              <div className="inline">BLOCKCHAIN_</div>
              <div className="inline">DESIGNER_</div>
              <div className="inline">DEVELOPER_</div>
            </h1>
            <h1>
              <div className="inline">BLOCKCHAIN_</div>
              <div className="inline">DESIGNER_</div>
              <div className="inline">DEVELOPER_</div>
            </h1>
            <h1>
              <div className="inline">BLOCKCHAIN_</div>
              <div className="inline">DESIGNER_</div>
              <div className="inline">DEVELOPER_</div>
            </h1>
            </div>
          </div>
        </div>

          <div className="min-[1700px]:mr-96 min-[2200px]:mr-[600px] about absolute float-right mr-24 mt-5 glitch min-[750px]:top-40 max-[750px]:top-20 max-md:mr-8 max-md:text-3xl max-[1700px]:text-4xl text-5xl right-0 tracking-[.75em] font-predator" title="ABOUT">
          {"About"}
          </div>

          </div>

          <div className="grid grid-cols-13 grid-rows-12 h-full bg-gradient-to-b from-[#111213] to-[#222222]">

          <div className="min-[1700px]:col-start-5 min-[1700px]:col-end-10 max-[1700px]:row-start-6 max-[1700px]:row-end-13 max-xl:col-start-3 max-xl:col-end-11 max-sm:col-start-1 max-sm:col-end-13 max-sm:px-5 col-start-8 col-end-12 row-start-6 row-end-13 h-[400px] w-full overflow-visible">
            <div className="text-pretty z-10">
              <img src="/profile4.webp" height="225" width="225" className="relative z-30 float-left mr-4 mt-4" alt="Profile picture"/>
                <p className="text-base font-semibold leading-8 z-10">
                  Hello! I'm a multifaceted developer, artist, and designer with a passion for blending technology and creativity. With a strong foundation in JavaScript and React, I excel in building dynamic and responsive web applications. My expertise extends to crafting custom CSS using Tailwind, ensuring each project is not only functional but visually engaging.
                </p> 
                <br/>
                <p className="text-base leading-8 border-solid border-t-[1px] border-[#333333] pt-4 z-10">Beyond 2D interfaces, I dive into the world of 3D content creation with React-Three-Fiber, bringing immersive experiences to life on the web. This unique skill set allows me to push the boundaries of traditional web development and explore new, interactive dimensions. 
                  I'm also deeply invested in the blockchain space, particularly within the Ethereum ecosystem. Utilizing Hardhat, I develop and deploy smart contracts, contributing to the decentralized future of the web. This fusion of front-end development, 3D design, and blockchain technology defines my approach to creating innovative and forward-thinking projects.
                </p>
                <br/>
                <p className="text-lg font-semibold text-center leading-8 z-10">
                  Join me on this journey of coding, designing, and pioneering new digital frontiers. Let's build the future together.
                </p>                
              </div>
            </div>
          
          <div className="absolute max-xl:col-start-1 max-xl:col-end-2 max-xl:row-start-12 max-xl:row-end-13 col-start-2 col-end-3 row-start-11 row-end-12 h-full w-full ">                    
            <div className="circlularTextClockwise absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">         
                <CircularText side={1.1} fontSize={.5}>
                • Omne initium difficile est •
                </CircularText>
              </div>

              <div className="circlularTextCounter absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={.75}>
                • Aut iveniam viam aut faciam •
                </CircularText>
              </div>

              <div className="circlularTextClockwise absolute h-32 w-32 flex justify-center items-center bottom-16 max-xl:bottom-0 max-xl:left-0 left-16 opacity-10">  
                <CircularText side={1.1} fontSize={1} offset={.5}>
                • Omne initium difficile est •
                </CircularText>
              </div>

              <div className="circlularTextCounter absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={1.5}>
                • Aut iveniam viam aut faciam •
                </CircularText>
              </div>

              <div className="circlularTextClockwise absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={2}>
                ❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂
                </CircularText>
              </div>

              <div className="circlularTextCounter absolute  h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={2.7}>
                • Aut iveniam viam aut faciam •
                </CircularText>
              </div>

              <div className="circlularTextClockwise absolute  h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={3.4} offset={1.35}>
                ➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔➔
                </CircularText>
              </div>

              <div className="circlularTextCounter absolute flex justify-center items-center h-32 w-32 bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.1} fontSize={4} offset={.5}>
                01001100 - 01010110  - 01011010
                </CircularText>
              </div>


              <div className="circlularTextCounter absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.2} fontSize={4.4} offset={.7}>
                 0x7250eE8997c02039B01A0Aa309048Ffad7a958BA
                </CircularText>
              </div>

              <div className="circlularTextClockwise absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-xl:left-0 opacity-10">  
                <CircularText side={1.3} fontSize={5} offset={1.10}>
                • I • XIX • VIII • XIX •
                </CircularText>
              </div>


              <div className="circlularTextClockwise absolute h-32 w-32 flex justify-center items-center bottom-16 left-16 max-xl:bottom-0 max-[600px]:hidden max-xl:left-0 opacity-10">
                <CircularText side={1.5} fontSize={6} offset={1}>
                ◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭◭
                </CircularText>
              </div>

              <div className="circlularTextCounter absolute max-[2300px]:hidden h-32 w-32 flex justify-center items-center bottom-16 left-16 opacity-10">
                <CircularText side={1.5} fontSize={6} offset={.3}>
                 ↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾↾
                </CircularText>
              </div>

              <div className="circlularTextClockwise absolute max-[2300px]:hidden h-32 w-32 flex justify-center items-center bottom-16 left-16 opacity-10">  
                <CircularText side={1.4} fontSize={5.5} offset={4.5}>
                ◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦
                </CircularText>
              </div>

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
            animation: scrollText 66s infinite linear;
          }
          
          .m-scroll__title h1 {
            transition: all 2s ease;
          }
                
          @keyframes scrollText {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%); /* Adjust based on content width */
            }
          `}
        </style>
      </div>

      <section className='transition h-[160vh] flex justify-center bg-gradient-to-t from-[#111213] to-[#222222] overflow-visible'> 

        <div id="SVG" className="svgText flex justify-center z-30 h-[500px]">
          <svg className="mr-[50px] max-[1280px]:hidden" width="800" height="55" viewBox="0 0 384 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <div className="absolute z-20 h-[160vh] w-screen">
        <Canvas camera={{position: [0, 0, 0] }}>
            <OrbitControls/>
            <Starfield />
        </Canvas> 

        </div>

        </section>

        <div id="horizontalScroll" className="horizontalScroll overflow-hidden">
          <div className="scroll flex overflow-x-hidden" style={{width: '350%'}}>

          <div className="smoke absolute h-screen w-full">
            <Canvas camera={{position: [0, 0, 750], fov: 75 }}>
              <ambientLight intensity={1.5}/>                      
                <Smoke />
            </Canvas> 
          </div> 

            <section id="project" className="Project01 horizontalSection projectSection z-30">
              <Project01 />
            </section>

            <section className="w-[25%]" />

            <section className='Project02 z-30 horizontalSection'>
              <Project02 />
            </section>

            <section className="w-[24%]"/>

            <section className='Project03 overflow-hidden z-30 horizontalSection'>

              <div className="absolute flex flex-col justify-center items-center w-full h-full">
                <div className="relative text-8xl max-[800px]:text-7xl max-[600px]:text-6xl  max-[500px]:text-5xl text-[#5EB1BF] font-kuano mix-blend-color-dodge z-50">
                  <span className="savage text-white -skew-x-12">SA</span>VAGE <span className="savage text-white">GA</span>RDEN
                  <div className="flex flex-row mix-blend-soft-light">
                  <a href="https://github.com/Zagorouiko/Savage-Garden" target="_blank" rel="noopener noreferrer" aria-label="Link to Savage Garden project github">
                      <svg className="icon03 cursor-pointer z-30 iconify iconify--ri" width="35" height="35" viewBox="0 0 24 24" style={{color: 'rgb(255, 29, 142)'}}>
                        <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"></path></svg>
                    </a>
                    <a href="https://savage-garden-8e230876a8ae.herokuapp.com/" target="_blank" rel="noopener noreferrer" aria-label="Link to Savage Garden website">
                      <svg className="icon03 mt-[3px] cursor-pointer z-30 iconify iconify--dashicons" width="33" height="33" viewBox="0 0 20 20" style={{color: 'rgb(255, 29, 142)'}}>
                        <path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0M1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84a7.9 7.9 0 0 1-.73-2.7m8.57-5.4V1.19a4.13 4.13 0 0 1 2.22 2q.308.521.54 1.08zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7zM8.32 1.19v3.09H5.56A8.5 8.5 0 0 1 6.1 3.2a4.13 4.13 0 0 1 2.22-2.01m0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7zm-4.7 2.69H1.11a7.9 7.9 0 0 1 .73-2.7H4a14 14 0 0 0-.38 2.7M4.7 9.68h3.62v2.7H5.11a13 13 0 0 1-.41-2.7m3.63 4v3.09a4.13 4.13 0 0 1-2.22-2a8.5 8.5 0 0 1-.54-1.08zm1.35 3.09v-3.04h2.76a8.5 8.5 0 0 1-.54 1.08a4.13 4.13 0 0 1-2.22 2zm0-4.44v-2.7h3.62a13 13 0 0 1-.41 2.7zm4.71-2.7h2.51a7.9 7.9 0 0 1-.73 2.7H14c.21-.87.337-1.757.38-2.65zm0-1.35A14 14 0 0 0 14 5.63h2.16c.403.85.65 1.764.73 2.7zm1-4H13.6a8.9 8.9 0 0 0-1.39-2.52a8 8 0 0 1 3.14 2.52zm-9.6-2.52A8.9 8.9 0 0 0 4.4 4.28H2.65a8 8 0 0 1 3.14-2.52m-3.15 12H4.4a8.9 8.9 0 0 0 1.39 2.52a8 8 0 0 1-3.14-2.55zm9.56 2.52a8.9 8.9 0 0 0 1.39-2.52h1.76a8 8 0 0 1-3.14 2.48z"></path></svg>
                    </a>
                </div>
                </div>
              </div>
              
              <div className="grid grid-cols-24 grid-rows-24 h-full w-full gap-4 z-20 ">
                <div className="col-start-3 col-end-8 row-start-3 row-end-11  max-[1500px]:col-end-10 max-[1000px]:col-end-13 min-[1900px]:col-start-5 min-[1900px]:row-start-1 overflow-hidden">
                  <img data-speed="-.5" className=" bg-slate-900" src="/SG1.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-18 col-end-23 row-start-15 row-end-25 z-20 max-[1500px]:col-start-17 min-[1900px]:col-end-21 max-[1000px]:col-start-14 ">
                  <img data-speed=".25" className="img bg-slate-900" src="/SG3.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-20 col-end-24 row-start-1 row-end-12 z-20 max-[1500px]:col-start-18 min-[1900px]:col-start-<a19 min-[1900px]:col-end-22 max-[1000px]:col-start-15">
                  <img data-speed="1" className="img bg-slate-900" src="/SG6.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-2 col-end-7 row-start-15 row-end-24 z-20 max-[1500px]:col-end-9 max-[1000px]:col-end-12 min-[1900px]:col-start-3 min-[1900px]:col-end-6 min-[1900px]:row-start-13 min-[2000px]:row-end-25 opacity-75">
                  <img data-speed="-.5" className="img bg-slate-900" src="/SG5.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-13 col-end-17 row-start-2 row-end-11 max-[1500px]:col-start-11 min-[1900px]:col-end-16 min-[1900px]:row-start-1 max-[1000px]:hidden">
                  <img data-speed="-.25" className="img bg-slate-900" src="/SG2.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-8 col-end-12 row-start-15 row-end-25 min-[1900px]:col-end-11 min-[1900px]:row-start-14 max-[1500px]:hidden z-20">
                  <img data-speed=".25" className="img bg-slate-900" src="/img6.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-12 col-end-16 row-start-14 row-end-24 max-[1500px]:col-start-10 min-[1900px]:col-start-13 min-[1900px]:row-end-25 max-[1000px]:hidden z-20">
                  <img data-speed="-.80" className="img bg-slate-900" src="/SG4.webp" alt="Picture of plants"/>
                </div>

                <div className="col-start-8 col-end-12 row-start-3 row-end-13  min-[1900px]:col-start-9 min-[1900px]:row-start-2 max-[1500px]:hidden z-20">
                <video data-speed=".25" className="img bg-slate-900" src="/SGvid.webm" autoPlay loop muted/>
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

        <div id="NFTPhone" className="NFTPhone w-full h-screen max-[1600px]:h-[200vh] bg-[#adb8ff]">
          <Guestbook/>
        </div>

        <div id="contact" className="contact">
          <Footer />
        </div>
      <style>
        {`body {overflow: hidden;}`}
      </style>
    </ReactLenis>
    : <div className="absolute bg-black h-full w-full flex flex-col justify-normal items-center z-[200]"><Loading/></div>}
  </>
  )
}

export default App

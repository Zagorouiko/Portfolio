import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"
import { animateWords } from "../lib/helpers"
import { Canvas } from '@react-three/fiber'
import { useThree, useFrame } from "@react-three/fiber";
import RagingSea from './RagingSea'
import { OrbitControls } from '@react-three/drei'

function Header() {

  useEffect(() => {
    animateWords()

    const icons = document.querySelectorAll('.iconHeader')
 
    icons.forEach((icon, index) => {
      icon.addEventListener('mouseenter', () => {
        icon.style.color = '#F52F57'
      })

      icon.addEventListener('mouseleave', () => {
        icon.style.color = 'rgb(234, 246, 255)'
      })
    })
  }, [])

  useGSAP(() => {
    const logo = document.querySelector('.logo')
    const terrainCanvas = document.querySelector('.TerrainCanvas')
    const iconHeaders = document.querySelectorAll('.iconHeader')
    const animText = document.querySelector('.animText')

    const tl = gsap.timeline({ paused: true, defaults: { duration: 4, ease: 'power2.inOut'  } })
    const tl2 = gsap.timeline({ paused: true, defaults: { duration: 4, ease: 'power2.inOut' } })

    tl.fromTo([logo, iconHeaders, animText], { 
      opacity: 0
     }, {
      opacity: .85
     })

    tl2
    .fromTo([logo, iconHeaders, animText], { 
      filter: "blur(10px)"
    }, {
      filter: "blur(0px)"
    })
    .fromTo(terrainCanvas, { 
      filter: "blur(10px)"
    }, {
      filter: "blur(0px)"
    }, "-=1")

    tl.play()
    tl2.play()
    
  }, [])

  return (
    <>
      <svg className="logo mt-36" width="161" height="182" viewBox="0 0 129 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105 134H106V133V112.498V111.498H105H44.2911V16V15H43.2911H24H23V16V133V134H24H105Z" stroke="white" strokeWidth="2"/>
        <path d="M105.825 34.1629L106 33.9076V33.5982V16V15H105H49H48V16V33.8717V34.8717H49H84.8131L48.1654 90.4011L48 90.6517V90.9519V107V108H49H105H106V107V90.5872V89.5872H105H68.7511V88.3435L105.825 34.1629Z" stroke="white" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M128 1V148H1V1H128ZM0 0H129V149H0V0Z" fill="white"/>
      </svg>

        <div className="animText text-3xl mt-5 flex flex-row"><p className="title">Hello.</p> 
        </div>
        <div className="flex flex-row mt-4">

          <a className="cursor-pointer" href="https://www.linkedin.com/in/zagorouiko/" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos Linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" className="iconHeader cursor-pointer iconify iconify--mdi" width="45" height="45" viewBox="0 0 24 24" style={{color: 'rgb(234, 246, 255)'}}>
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z">
              </path>
            </svg>
          </a>

          <a className="cursor-pointer" href="https://github.com/Zagorouiko" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos Github">
            <svg className="iconHeader cursor-pointer iconify iconify--ri" width="45" height="45" viewBox="0 0 24 24" style={{color: 'rgb(234, 246, 255)'}}>
              <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10">
              </path>
            </svg>
          </a>
        </div>

    <div className="TerrainCanvas absolute h-full w-full top-0 object-cover -z-10">
      <Canvas 
      camera={{
        position: [-5.92, 1.86, -2.22],
      fov: 50, 
      rotation: [-2.44, -1.11, -2.49]
      }}
      >
        <OrbitControls/>
        <RagingSea />
        <HandleCamera />
      </Canvas>
    </div>

    <style>
      {`
        .icon > svg {
          color: #EAF6FF;
          width: 45px;
          height: 45px;
          cursor: pointer;
          transition: color 0.3s; /* Optional: for smooth color transition */
        }

        .icon > svg:hover {
          color: #0000FF; /* Change to the desired hover color */
        }

        .logo {
          animation: fill 0.5s ease forwards 3.1s;
        }
        
        .logo path:nth-child(1) { 
          stroke-dasharray: 404px;
          stroke-dashoffset: 404px;
          animation: line-animation 2.8s ease forwards .6s;
        }

        .logo path:nth-child(2) {
          stroke-dasharray: 398.63px;
          stroke-dashoffset: 398.63px;
          animation: line-animation 2.8s ease forwards .9s;
        }

        .logo path:nth-child(3) {
          stroke-dasharray: 1104px;
          stroke-dashoffset: 1104px;
          animation: line-animation 2.8s ease forwards 1.2s;
        }

        @keyframes line-animation {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fill {
          from {
            fill: transparent;
            }
          to {
            fill: white;
          }
        }      
      `}
    </style>
    </>
  )
}

export function HandleCamera() {
  const { camera } = useThree()

  useFrame((state) => {
    const speed = .5; 
    const angle = state.clock.elapsedTime * speed
    const x = Math.cos(angle)
    const z = Math.sin(angle) 

    camera.position.set(x - 5.92, 1.86, z - 2.22)
    camera.rotation.set(x - 2.44, -1.11, z - 2.49)
    camera.lookAt(0, 1.5, 0)

  })
}

export default Header

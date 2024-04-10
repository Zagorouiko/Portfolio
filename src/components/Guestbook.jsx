import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from "react"
import { createRoot } from 'react-dom/client'
import Smoke from './Smoke'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Guestbook() {
    const canvasRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && !canvasRef.current.querySelector(".phone")) {
                  // Load the lazy component when it comes into view
                  import("./Phone").then(module => {
                      // Render the lazy component
                      const PhoneComponent = module.default;
                      canvasRef.current.innerHTML = "" // Clear any existing content
                      const div = document.createElement("div")
                      div.className = "phone absolute h-full w-full top-0 object-cover z-10"
                      canvasRef.current.appendChild(div)
                      const root = createRoot(div);
                      root.render(
                        <Canvas camera={{position: [0, 0, 150], fov: 75 }}>
                          {/* <OrbitControls /> */}
                          <ambientLight intensity={1.5}/>                      
                          <Suspense fallback={null}>
                              <PhoneComponent position={[7, 0,  0]} />
                              {/* <Smoke /> */}
                          </Suspense>
                        </Canvas>                    )
                  })
              }
          })
      })

      // Start observing the canvas
      observer.observe(canvasRef.current);

      // Cleanup the observer when the component unmounts
      return () => {
          observer.unobserve(canvasRef.current);
      }
  }, [])

    return (
      <>     
      <div className="grid grid-cols-8 grid-rows-8 h-full mb-48">
        <div className='col-start-2  col-end-4 row-start-2 row-end-7 text-[#EAF6FF] z-50'>
        <h1 className="text-8xl">Leave an NFT</h1>
          <p className='text-xl'>
            NFTs are hard. I made it easy. <br/>With a click of a button - AI generated art will be created into an NFT using an abstract wallet<br/> 
          </p>
        </div>
        <div ref={canvasRef} className="absolute h-screen w-full" />
      </div>
      </>
    )
  }
  
  export default Guestbook
  
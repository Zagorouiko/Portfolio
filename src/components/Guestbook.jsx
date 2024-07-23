import { Canvas } from '@react-three/fiber'
import { useEffect, useRef } from "react"
import { createRoot } from 'react-dom/client'
import { Html } from '@react-three/drei'

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
                        <Canvas camera={{position: [0, 0, 33]}}>
                          <PhoneComponent position={[0, 0,  0]}/>
                        </Canvas>                    )
                  })
              }
          })
      })

      // Start observing the canvas
      observer.observe(canvasRef.current)
      // observer.observe(obs.current)

      // Cleanup the observer when the component unmounts
      return () => {
          observer.unobserve(canvasRef.current)
          // observer.unobserve(obs.current)
      }
  }, [])

    return (
      <>     
      <div className="grid grid-cols-8 grid-rows-8 h-full mb-48">
        <div className='max-[1600px]:col-start-1 max-[1600px]:col-end-9 max-[1600px]:row-start-1 max-[1600px]:row-end-5 col-start-1 col-end-5 row-start-1 row-end-9'>
          <video className='h-full w-full object-cover' type="video/mp4" autoPlay loop muted src="/NFTVideo.webm" />
        </div>
        
        <div className='nftPhoneSection max-[1600px]:col-start-1 max-[1600px]:col-end-9 max-[1600px]:row-start-5 max-[1600px]:row-end-9 col-start-5 col-end-9 row-start-1 row-end-9'>
          <div ref={canvasRef} className="absolute h-screen max-[1600px]:w-full w-1/2" />
        </div>
      </div>
      </>
    )
  }
  
  export default Guestbook
  
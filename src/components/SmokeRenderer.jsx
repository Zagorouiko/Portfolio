import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from "react"
import { createRoot } from 'react-dom/client'
import Smoke from './Smoke'

function SmokeRenderer() {
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
                          <ambientLight intensity={1.5}/>                      
                          <Suspense fallback={null}>
                              <PhoneComponent  position={[5, 0,  0]} />
                              <Smoke />
                          </Suspense>
                        </Canvas>                    )
                  })
              }
          });
      });

      // Start observing the canvas
      observer.observe(canvasRef.current);

      // Cleanup the observer when the component unmounts
      return () => {
          observer.unobserve(canvasRef.current);
      };
  }, []);

    return (
      <>     
        <div ref={canvasRef} className="absolute h-screen w-full" />
      </>
    )
  }
  
  export default SmokeRenderer
  
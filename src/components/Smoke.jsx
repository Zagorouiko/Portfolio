import { useLoader } from "@react-three/fiber";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";


export default function Smoke() {


    let smokeTexture = useLoader(THREE.TextureLoader, 
        '/smoke.webp'
        )

    const smokeCount = 150
    let smokeParticles = useRef([]) 

    useFrame(() => {
        smokeParticles.current.forEach(particle => {
            particle.rotation.z += 0.0005
        })
    })
    

    useEffect(() => {
    
        const endProject = document.querySelector('.NFTPhone')
        const startProject = document.querySelector('.Project01')

        let endProjectRect = endProject.getBoundingClientRect()
        let startProjectRect = startProject.getBoundingClientRect()

        window.addEventListener('resize', () => {
            endProjectRect = endProject.getBoundingClientRect()
            startProjectRect = startProject.getBoundingClientRect()
        })

        window.addEventListener('scroll', () => {
          if (window.scrollY > startProjectRect.top && window.scrollY < endProjectRect.top) {
            smokeParticles.current.forEach((smoke, index) => {
                smoke.rotation.z += window.scrollY * 0.00000025
            })
          }
        })
      }, [])

    return (
    <>
        {Array(smokeCount).fill().map((_, i) => (
            <mesh key={i} ref={(mesh) => { smokeParticles.current[i] = mesh }} 
            position={[ Math.random()*500-250 , Math.random()*500-250 , Math.random()*1000-100 ]} 
            >
                <planeGeometry args={[300,300]} />
                <meshLambertMaterial color={0x00dddd} map={smokeTexture} transparent />
            </mesh>
        ))}
    </>
    )
  }
  
  
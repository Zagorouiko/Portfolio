import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function Starfield() {

    const particleCount = 500
    const pointRef = useRef([])
    const positionArray = new Float32Array(particleCount * 3)
    // const { camera } = useThree()

    useEffect(() => {
    
        const about = document.querySelector('.aboutSection')
        const transition = document.querySelector('.transition')
        
        const cursor = {}
        cursor.x = 0
        cursor.y = 0

        const aboutRect = about.getBoundingClientRect()
        const transitionRect = transition.getBoundingClientRect()
        window.addEventListener('scroll', () => {
          if (window.scrollY > aboutRect.top && window.scrollY < transitionRect.bottom) {
            //   camera.position.y = window.scrollY * 0.0001
              pointRef.current.forEach((point, index) => {
                point.rotation.z += window.scrollY * 0.0000004
                point.rotation.x += window.scrollY * 0.0000004
            })
          }
        })

        // window.addEventListener('mousemove', (event) => {
        //     cursor.x = event.clientX
        //     cursor.y = event.clientY

        //     camera.position.x = (cursor.x - window.innerWidth / 2) * 0.0001
        //     camera.position.y = (cursor.y - window.innerHeight / 2) * 0.0001
        //     })
      }, [])



    for(let i = 0; i < particleCount * 3; i++) { 
        positionArray[i] = (Math.random() - 0.5) * 1
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.001,
        transparent: true,
    })

    useFrame(() => {
        pointRef.current.forEach((point, index) => {
            point.rotation.y += 0.0005
        })
    })
 
    return (
    <>
    
    {Array(particleCount).fill().map((_, i) => (
        <points key={i} geometry={geometry} material={particleMaterial} ref={(mesh) => { pointRef.current[i] = mesh }}/>        
    ))}

    </>
    )
  }
  
  
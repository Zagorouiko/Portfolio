import { OrbitControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"
import * as THREE from "three"

export default function Starfield() {

    const particleCount = 5000
    const pointRef = useRef([])
    const positionArray = new Float32Array(particleCount * 3)

    for(let i = 0; i < particleCount * 3; i++) { 
        positionArray[i] = (Math.random() - 0.5) * 5
    }

    // const { position } = useControls('particles', {
    //     position: {
    //         value: [0, 0, 0 ],
    //         step: 0.1,
    //         min: - 10,
    //         max: 10,
    //     }})

    // const { cameraPosition } = useControls('camera', {
    //     cameraPosition: {
    //         value: [0, 0, 0 ],
    //         step: 0.1,
    //         min: - 10,
    //         max: 10,
    //     }})

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.001,
        transparent: true,
    })

    useFrame(() => {
        pointRef.current.forEach((point, index) => {
            point.rotation.y += 0.001
        })
    })
 
    return (
    <>
    {/* <OrbitControls /> */}

    {Array(particleCount).fill().map((_, i) => (
        <points key={i} geometry={geometry} material={particleMaterial} ref={(mesh) => { pointRef.current[i] = mesh }}/>        
    ))}

    </>
    )
  }
  
  
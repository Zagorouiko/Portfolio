import { useLoader } from "@react-three/fiber";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function Smoke() {

    let smokeTexture = useLoader(THREE.TextureLoader, 
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
        )
    let smokeParticles = useRef([]) 


    useFrame(({ clock }) => {
        let delta = clock.getDelta()
        smokeParticles.current.forEach(particle => {
            const quaternion = new THREE.Quaternion();
            quaternion.setFromEuler(particle.rotation);
            quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), delta * .5))
            particle.quaternion.copy(quaternion)
        });
    })

    return (
    <>
        {Array(150).fill().map((_, i) => (
            <mesh key={i} ref={(mesh) => { smokeParticles.current[i] = mesh }} position={[ Math.random()*500-250 , Math.random()*500-250 , Math.random()*1000-100 ]} rotation={[0,0,Math.random() * 360]}>
                <planeGeometry args={[300,300]} />
                <meshLambertMaterial color={
                    // 0x00dddd
                    '#FFFFFF'
                    } map={smokeTexture} transparent />
            </mesh>
        ))}
    </>
    )
  }
  
  
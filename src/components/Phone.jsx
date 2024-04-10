import { Html, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
// import { useControls } from 'leva'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Phone() {
    const model = useGLTF("/iPhoneModel.gltf")
    const phone = useRef()
    const frame = useRef()

    function toggleWireframe(model, isWireframe, opacity, duration) {
        model.traverse(function(child) {
          if (child.isMesh && child.material) {
            gsap.to(child.material, {
              opacity: opacity,
              duration: duration || 1, // default duration is 1 second
              onUpdate: function() {
                child.material.wireframe = isWireframe;
                child.material.transparent = true;
              }
            });
          }
        });
      }

    useGSAP(() => {
        // gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline()
        tl.from(phone.current.rotation, { y: 5, duration: 2, ease: 'power1.inOut' })
        tl.from(phone.current.position, { y: 50, duration: 2, ease: 'power1.inOut' }, '<')
        console.log(phone.current)
        // tl.from(phone.current.opacity, { y: 0, duration: 2, ease: 'power1.inOut' }, '<')
        toggleWireframe(model.scene, false, 1, 2)
    })

    // const { screenPosition, screenRotation, screenScalex, screenScaley } = useControls('Screen', {
    //     screenPosition: {
    //         value: [ 0.167, -0.227, 0.09 ],
    //         step: 0.001,
    //         min: - 10,
    //         max: 10,
    //     },
    //     screenRotation: {
    //         value: [ 0, 0, 0 ],
    //         step: 0.001,
    //         min: - 10,
    //         max: 10,
    //     },
    //     screenScalex: {
    //         value: 510,
    //         step: .01,
    //         min: 100,
    //         max: 4000,
    //     },
    //     screenScaley: {
    //         value: 1077.00,
    //         step: .01,
    //         min: 100,
    //         max: 4000,
    //     }
    // })

    // const { distanceFactor } = useControls('distanceFactor', {
    //     distanceFactor: { 
    //         value: 1.19,
    //         step: 0.01,
    //         min: 0,
    //         max: 5,
    //     }
    // })

    // const { phoneRotation, phonePosition } = useControls('Phone', {
    //     phoneRotation: { 
    //         value: [ 0, -0.33, 0 ],
    //         step: 0.01,
    //         min: - 10,
    //         max: 10,
    //     },

    //     phonePosition: { 
    //         value: [ 9.3, 3.2, 123.2 ],
    //         step: .1,
    //         min: 0,
    //         max: 300,
    //     }
    // })


    return (
        <>
        <primitive ref={phone} object={model.scene} position={[ 9.3, 3.2, 123.2 ]} scale={[10, 10, 10]} rotation={[ 0, -0.33, 0 ]} opacity="0" wireframe="true"> 
        <Html 
            occlude={[phone]} 
            distanceFactor={1.19}
            wrapperClass="NFTpage"
            position={[ 0.167, -0.227, 0.09 ]}
            rotation={[ 0, 0, 0 ]}
            // scale={screenScale} 
            transform 
            >
                <iframe
                className='rounded-[68px] bg-[#222531]'
                height={1077}
                width={510}
                ref={frame}              
                src="http://localhost:5173/nfts"        
                />
            </Html>
        </primitive>
        </>
    )
  }
  
  export default Phone
  
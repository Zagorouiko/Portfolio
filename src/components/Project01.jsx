import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { Canvas } from '@react-three/fiber'
import ParticleSystem from "./ParticleSystem"
import * as THREE from 'three'


function Project01() {
  let [texture, setTexture] = useState(null)

  useEffect(() => {
    const loadImage = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = '/ringGrey.jpg'
      image.onload = () => resolve(image)
      image.onerror = (error) => reject(error)
  })

    loadImage.then((image) => {
      texture = new THREE.Texture(image)
      texture.needsUpdate = true
      setTexture(texture)
    })

    return () => {
      loadImage.abort && loadImage.abort();
    }
  }, [])

    return (
      <>
        <div className="grid grid-cols-12 grid-rows-8 h-full gap-4">
        <div className="absolute opacity-10 text-white top-1/2 left-0 text-[700px] font-semibold">01</div>

        {/* <TextRing className="z-50 text-white" side={100}>Solidity•React•Hardhat•TS/CSS/HTML</TextRing> */}
        <div className="col-start-6 col-end-8 row-start-4 row-end-5 text-[#EAF6FF] text-2xl font-semibold">

        <div className="flex self-start mt-4">
            <a href="https://github.com/Zagorouiko/Oura-Lenz-Frenz" target="_blank">
              <Icon className="mr-2 cursor-pointer" color="#fff" width="25" height="25" icon="ri:github-fill"/>
            </a>
            <Icon className="mt-[3px] cursor-pointer" color="#fff" width="22" height="22" icon="dashicons:admin-site-alt3"/>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-[#F45900]">OURA LENZ FRENZ</h1>
          <p className="text-base mt-12 my-24 text-center">A dapp built on top of Lens Protocol. Users with an Oura Ring (sleep tracking ring) can connect their ring to the protocol and create NFTS of their sleep data, then share them with other Oura ring users.</p>

          </div>
        </div>

        <div className="absolute h-screen w-full">
            <Canvas >
              {texture ? (<ParticleSystem texture={texture}/>) : (<></>)}
            </Canvas>
        </div>

        </div>

        <style>
          {`
            .text-ring {
              position: absolute;
            }
            .text-ring [style*=--index] {
              font-family: monospace;
              text-transform: uppercase;
              font-weight: bold;
              font-size: calc(var(--font-size, 2) * 1rem);
              position: absolute;
              top: 50%;
              left: 50%;
              transform:
                translate(-50%, -50%)
                rotate(calc(360deg / var(--total) * var(--index)))
                translateY(calc(var(--radius, 5) * -1ch));
            }
            .galleryItem {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 70px;
              height: 100px;
              background: #b0b0b0;
              margin: 10px;
            }
            .img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `}
        </style>
      </>
    )
  }
  
  export default Project01
  
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
      image.src = '/ringGrey.webp'
      image.onload = () => resolve(image)
      image.onerror = (error) => reject(error)
  })

    loadImage.then((image) => {
      texture = new THREE.Texture(image)
      texture.needsUpdate = true
      setTexture(texture)
    })

    const icons = document.querySelectorAll('.icon01')
    
    icons.forEach((icon, index) => {
      icon.addEventListener('mouseenter', () => {
        icon.style.color = '#EAF6FF'
      })

      icon.addEventListener('mouseleave', () => {
        icon.style.color = '#F45900'
      })
    })

    return () => {
      loadImage.abort && loadImage.abort();
    }
  }, [])

    return (
      <>
        <div className="grid grid-cols-12 grid-rows-8 h-full gap-4">
        <div className="absolute opacity-10 text-white top-1/2 left-0 text-[700px] max-[700px]:text-[500px] font-semibold">01</div>

        <div className="col-start-6 col-end-8 max-[1660px]:col-start-5 max-[1660px]:col-end-9 max-[750px]:col-start-3 max-[750px]:col-end-11 row-start-4 row-end-5 text-[#EAF6FF] text-2xl font-semibold">
          <div className="flex flex-col justify-end items-center mt-10">

          <h1 className="text-3xl max-[1660px]:text-3xl text-[#F45900]">OURA LENZ FRENZ</h1>
          <div className="flex items-center justify-center flex-row">
              <a href="https://github.com/Zagorouiko/Oura-Lenz-Frenz" className="cursor-pointer z-40" target="_blank" rel="noopener noreferrer" aria-label="Navigates Oura Lenz Frenz project github">
                <svg className="icon01 mr-2 cursor-pointer iconify iconify--ri" width="25" height="25" viewBox="0 0 24 24" style={{color: 'rgb(244, 89, 0)'}}>
                  <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"></path></svg>
              </a>
              <svg className="icon01 mt-[3px] cursor-pointer z-40 iconify iconify--dashicons" width="22" height="22" viewBox="0 0 20 20" style={{color: 'rgb(244, 89, 0)'}}>
                <path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0M1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84a7.9 7.9 0 0 1-.73-2.7m8.57-5.4V1.19a4.13 4.13 0 0 1 2.22 2q.308.521.54 1.08zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7zM8.32 1.19v3.09H5.56A8.5 8.5 0 0 1 6.1 3.2a4.13 4.13 0 0 1 2.22-2.01m0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7zm-4.7 2.69H1.11a7.9 7.9 0 0 1 .73-2.7H4a14 14 0 0 0-.38 2.7M4.7 9.68h3.62v2.7H5.11a13 13 0 0 1-.41-2.7m3.63 4v3.09a4.13 4.13 0 0 1-2.22-2a8.5 8.5 0 0 1-.54-1.08zm1.35 3.09v-3.04h2.76a8.5 8.5 0 0 1-.54 1.08a4.13 4.13 0 0 1-2.22 2zm0-4.44v-2.7h3.62a13 13 0 0 1-.41 2.7zm4.71-2.7h2.51a7.9 7.9 0 0 1-.73 2.7H14c.21-.87.337-1.757.38-2.65zm0-1.35A14 14 0 0 0 14 5.63h2.16c.403.85.65 1.764.73 2.7zm1-4H13.6a8.9 8.9 0 0 0-1.39-2.52a8 8 0 0 1 3.14 2.52zm-9.6-2.52A8.9 8.9 0 0 0 4.4 4.28H2.65a8 8 0 0 1 3.14-2.52m-3.15 12H4.4a8.9 8.9 0 0 0 1.39 2.52a8 8 0 0 1-3.14-2.55zm9.56 2.52a8.9 8.9 0 0 0 1.39-2.52h1.76a8 8 0 0 1-3.14 2.48z"></path></svg>
          </div>

          <p className="text-base my-4 text-center max-[1660px]:text-sm">A dapp built on top of Lens Protocol. Users with an Oura Ring (sleep tracking ring) can connect their ring to the protocol and create NFTS of their sleep data, then share them with other Oura ring users.</p>

            </div>
        </div>

        <div className="absolute h-screen w-full z-30">
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
  
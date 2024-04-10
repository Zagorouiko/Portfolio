import { useGSAP } from "@gsap/react";
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { Canvas } from '@react-three/fiber';
import ParticleSystem from "./ParticleSystem";

function Menu() {
  let optionElements
  let lineElements

  useGSAP(() => {
    optionElements = document.querySelectorAll('.option')
    lineElements = document.querySelectorAll('.line')


    optionElements.forEach((option, index) => {
      option.addEventListener('mouseenter', () => {
        gsap.to(option, {opacity: 1, duration: 0.3})
        gsap.to(option, {scale: 1.1, duration: 0.3})
        gsap.to(lineElements[index], {scaleX: 1, duration: 0.5, transformOrigin: 'left'})
      })

      option.addEventListener('mouseleave', () => {
        gsap.to(option, {opacity: 0.2, duration: 0.3})
        gsap.to(option, {scale: 1, duration: 0.3})
        gsap.to(lineElements[index], {scaleX: 0, duration: 0.3})
      })
    })

    return () => {
      optionElements.forEach((option, index) => {
        option.removeEventListener('mouseleave', () => {});
      });
    };
    
  })

    return (
      <>
      <div className="flex items-center justify-between">
      <nav>
        <section className="flex absolute">
          <div className="absolute h-screen w-full top-0 left-0 z-10 flex flex-col justify-evenly items-center bg-[#111213]">
            <Icon className="absolute opacity-50 right-[75rem] top-32 -z-10" color="#444" width="1000" height="1000" icon="mdi:x-ray" />
            <ul className="text-5xl ml-12">

            
             <li className="option opacity-20">
             <div className="line absolute w-[10%] top-2/4 border-b transform origin-left scale-x-0" />
                <div >
                  <a className="ml-10" href="#">            
                    HOME
                  </a>
                </div>          
              </li>
             
             <li className="option pt-10 opacity-20">
             <div className="line absolute w-[10%] top-3/4 border-b transform origin-left scale-x-0" />
              <div>
                <a className="ml-10" href="#about">ABOUT</a>
                </div>
              </li>

             <li className="option pt-10 opacity-20">
             <div className="line absolute w-[10%] top-3/4 border-b transform origin-left scale-x-0" />
                <div>
                 <a className="ml-10" href="#1">PROJECTS</a>
                </div>
              </li>

             <li className="option pt-10 opacity-20">
             <div className="line absolute w-[10%] top-3/4 border-b transform origin-left scale-x-0" />
                <div>
                  <a className="ml-10" href="#guestbook">NFT GUESTBOOK</a>
                </div>
              </li>

             <li className="option pt-10 opacity-20">
             <div className="line absolute w-[10%] top-3/4 border-b transform origin-left scale-x-0" />
                <div>
                  <a className="ml-10" href="#contact">CONTACT</a>
                </div>
              </li>

           </ul>
          </div> 
        </section>
      </nav>
    </div>

    <div className="absolute h-screen w-full z-50">
      <Canvas >
        <ParticleSystem/>
      </Canvas>
    </div>
    </>
    )
  }
  
  export default Menu

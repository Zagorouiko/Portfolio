import { useGSAP } from "@gsap/react";
import { useState } from "react"
import { Icon } from '@iconify/react';

function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useGSAP(() => {
    // const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power4.out" } })
  })

    return (
      <>
      
      <div className="flex items-center justify-between">
      <nav>
        <section className="MOBILE-MENU flex absolute">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <Icon className="menu-toggle cursor-pointer fixed top-2 right-3 opacity-50" color="#EAF6FF" width="45" height="45" icon="game-icons:hamburger-menu" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
            <Icon className="absolute opacity-50 right-[75rem] top-32 -z-10" color="#444" width="1000" height="1000" icon="mdi:x-ray" />
              <svg
                className="h-8 w-8 text-gray-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="text-5xl ml-12">
             <li><div><a href="#">HOME</a></div></li>
             <li className="pt-4"><div><a href="#about">ABOUT</a></div></li>
             <li className="pt-4"><div><a href="#1">PROJECT-01 // OURA LENZ FRENZ</a></div></li>
             <li className="pt-4"><div><a href="#2">PROJECT-02 // LIGHTHOUSE</a></div></li>
             <li className="pt-4"><div><a href="#3">PROJECT-03 // SKRAPR</a></div></li>
             <li className="pt-4"><div><a href="#4">PROJECT-04 // SAVAGE GARDEN</a></div></li>
             <li className="pt-4"><div><a href="#guestbook">NFT GUESTBOOK</a></div></li>
             <li className="pt-4"><div><a href="#contact">CONTACT</a></div></li>
           </ul>
          </div>
        </section>
      </nav>

      <style>
        {`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #111213;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}
    </style>

    </div>
    </>
    )
  }
  
  export default Menu
  
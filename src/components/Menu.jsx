import { useState } from "react"

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
      }

    return (
        <nav className='menu relative'>

        <div id="nav-icon3" className={`ham fixed cursor-pointer top-5 right-5 opacity-50 z-50 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>

        <ul className='main-menu fixed w-full left-0 flex flex-col items-center opacity-0 justify-center h-0 bg-[#111213] z-40  text-5xl '>
        <li className="menuItem option opacity-20 z-50">
            <div>
                <a className="hidden" href="#" aria-label="Links to home section" onClick={toggleMenu}>            
                HOME
                </a>
            </div>          
            </li>
        
        <li className="menuItem option pt-10 opacity-20 z-50">
            <div>
            <a className="hidden" href="#about" aria-label="Links to about section" onClick={toggleMenu}>ABOUT</a>
            </div>
            </li>

        <li className="menuItem option pt-10 opacity-20 z-50">
            <div>
            <a className="hidden" href="#project" aria-label="Links to project section" onClick={toggleMenu}>PROJECTS</a>
            </div>
            </li>

        <li className="menuItem option pt-10 opacity-20 z-50">
            <div>
                <a className="hidden" href="#NFTPhone" aria-label="Links to NFT phone section" onClick={toggleMenu}>NFT PHONE</a>
            </div>
            </li>

        <li className="menuItem option pt-10 opacity-20 z-50">
            <div>
                <a className="hidden" href="#contact" aria-label="Links to contact section" onClick={toggleMenu}>CONTACT</a>
            </div>
            </li>              
        </ul>
        
        <style>
        {`
            #nav-icon3 {
            width: 40px;
            height: 45px;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;
            }
            
            #nav-icon3 span {
            display: block;
            position: absolute;
            height: 4px;
            width: 100%;
            background: #EAF6FF;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            }
            
            #nav-icon3 span:nth-child(1) {
            top: 0px;
            }
            
            #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
            top: 12px;
            }
            
            #nav-icon3 span:nth-child(4) {
            top: 24px;
            }
            
            #nav-icon3.open span:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
            }
            
            #nav-icon3.open span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            }
            
            #nav-icon3.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            }
            
            #nav-icon3.open span:nth-child(4) {
            top: 18px;
            width: 0%;
            left: 50%;
            }
        `}
        </style>
        </nav>
    )
  }
  
  export default Menu
  
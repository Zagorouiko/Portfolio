import { Icon } from '@iconify/react';

export default function ContactFooter() {

  return (
    <div className="flex flex-col items-center">
        <h2 className="text-4xl min-xl:tracking-widest tracking-[.5em] font-semibold text-center text-[#D9D9D9]">
          GET IN TOUCH
        </h2>
        <h3 className="text-2xl text-center max-xl:text-xl max-xl:mt-8 max-xl:mx-20 font-semibold mt-10 mx-36 text-[#D9D9D9]">
        Have a question or just want to reach out about a project? Feel free to send me a message.
        </h3>

          <div className="text-xl max-xl:text-xl mt-2 text-[#D9D9D9] font-semibold width-[500px]">

            <div className='mt-10 inline-flex'>
              <a className="cursor-pointer" href="https://www.linkedin.com/in/zagorouiko/" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos Linkedin">
                <Icon className="x ml-[20px] mr-10 align-middle cursor-pointer" color="#d9d9d9" width="35" height="35" icon="mdi:linkedin"/>
              </a>
              <a className="cursor-pointer footerLink mt-1" href="https://www.linkedin.com/in/zagorouiko/" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos Linkedin">
                linkedin.com/in/zagorouiko
              </a>
            </div>
            <div className='mt-10'>
              <Icon className="ml-[25px] inline mr-10" icon="radix-icons:envelope-open" color="#d9d9d9" width="27" height="27" />
              Zagorouiko@gmail.com
            </div>
            <div className='mt-10 inline-flex items-center'>
              <a href="/resumeWEB.pdf" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos resume">
                <img className="inline mr-[65px]" width="75px" height="75px" src="./resumeQR.webp" alt="Resume QR code" />
              </a>
              <a className='footerLink' href="/resumeWEB.pdf" target="_blank" rel="noopener noreferrer" aria-label="Navigates Leon Zagorouikos resume">
                Resume
              </a>
             </div>
          </div>
        </div>
  )
}
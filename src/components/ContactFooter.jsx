import { Icon } from '@iconify/react';

export default function ContactFooter() {

  return (
    <div className="flex flex-col items-center
    "
    >
        <h2 className="text-4xl min-xl:tracking-widest tracking-[.5em] font-semibold text-center text-[#D9D9D9]">
          GET IN TOUCH
        </h2>

        <h3 className="text-2xl text-center max-xl:text-xl max-xl:mt-8 max-xl:mx-20 font-semibold mt-10 mx-36 text-[#D9D9D9]">
        Have a question or just want to reach out about a project? Feel free to send me a message.
        </h3>

          <div className="text-xl max-xl:text-xl mt-2 text-[#D9D9D9] font-semibold">
            <div className='mt-10 inline-flex'>
            <Icon className="x mr-10 align-middle" icon="radix-icons:person" color="#d9d9d9" width="35" height="35" /><p className='right-0'> 545 Mavis Island <br/>Chicago, IL 99191</p>
            </div>
            <div className='mt-10'>
            <Icon className="inline mr-10" icon="radix-icons:envelope-open" color="#d9d9d9" width="35" height="35" /> Zagorouiko@gmail.com
            </div>
            <div className='mt-10'>
              <Icon className="inline mr-10" icon="radix-icons:mobile" color="#d9d9d9" width="35" height="35" /> +1 (561) 254-4464
              </div>
          </div>
        </div>
  )
}
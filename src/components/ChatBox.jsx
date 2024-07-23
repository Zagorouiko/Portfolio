import { useState } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import axios from 'axios'

function ChatBox() {
    const [response, setResponse] = useState("")
    const [isVisible, setIsVisible] = useState(true)

    async function gptChat(formData) {
      const response = await axios.get("http://localhost:3000/openAI-chat", {
        params: { formData: formData }
      })
      setResponse(response.data.gptResponse)
    }
  
      const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const message = formData.get("message")
        e.target.reset();
        gptChat(message)
      }

      useGSAP(() => {
        const tl = gsap.timeline()
        const tl2 = gsap.timeline()
        const tl3 = gsap.timeline()

        const gptLogo = document.querySelector(".gptLogo")
        const closeButton = document.querySelector(".closeButton")

        tl.fromTo(".chatBox", 
        {
            duration: 1,
            clipPath: "circle(13.1% at 81% 76.5%)",
            ease: "power2.inOut"
        },
        {
          duration: 1,
          clipPath: "circle(114% at 81% 76.5%)",
          ease: "power2.inOut"
        }).reverse()

        tl2.fromTo(".gptLogo", 
        {
            opacity: 1,
            duration: .5,
        },
        {
          opacity: 0,
          rotate: 90,
          duration: .5,
        }).reverse()

        tl3.fromTo(".chatBox",
        {
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        },
        {
          duration: 1,
          opacity: 0,
          ease: "power2.inOut"
        }).reverse()

        tl3.fromTo(".chatBox",
        {
          visibility: "visible",
        },
        {
          visibility: "hidden",
        }).reverse()
    

        gptLogo.addEventListener("click", () => {
            tl.play()
            tl2.play()
        })

        closeButton.addEventListener("click", () => {
          tl.reverse()
          tl2.reverse()
          setResponse("")
        })

        if (!isVisible) {
          tl3.play()
        } else {
          tl3.reverse()
        }

      }, [isVisible])

    return (
    <>
        <div className='chatBox fixed w-72 h-96 bottom-5 right-5 bg-[#444] rounded-2xl opacity-80 z-40'>

        <div className='absolute  h-full w-full'>
          <div className='closeButton cursor-pointer absolute right-2 top-2 h-[25px] w-[25px] z-30'>
            <Icon color="#fff" width="25" height="25" icon="material-symbols:close" />
          </div>
        </div>

        <div className='absolute h-full w-full'>
          <div className='gptLogo cursor-pointer absolute top-[270px] right-[33px] h-[45px] w-[45px] z-30'>
            <Icon className='absolute' color="#fff" width="45" height="45" icon="ri:openai-fill" />
          </div>
        </div>

        <div className='absolute top-8 w-full h-[300px] overflow-auto z-20' tabIndex={0}>
         {response ? <p className='response text-white ml-4 mr-6 font-semibold'>{response}</p> : <div className="absolute p-5">Ask me anything</div>}
        </div>
        
            <div className='h-full relative flex flex-row justify-end z-10'>
            <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="GPT prompt message" />
                    <input
                        id="chatBoxMessage"
                        name="message"
                        required
                        className="chatInput absolute w-52 flex-grow bottom-2 left-3 border-0 px-2  bg-[#2E3033] py-1.5 text-white font-semibold shadow-sm  sm:leading-6"
                    />
                    <button type="submit" className='absolute h-9 bg-[#2E3033] hover:bg-[#F52F57]  py-2 px-4 cursor-pointer bottom-2 right-3' aria-label="Submits chat prompt to chatGPT">
                    <Icon color="#ffffff" className='' icon="material-symbols:send" />
                </button> 
            </form>
            </div>  
        </div>
        <style>
            {`
              input.chatInput:focus {
                outline: none;
                caret-color: white;
                background-color: #232324;
              }
            `}
          </style>
    </>
    )
  }
  
  export default ChatBox
  
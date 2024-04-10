import { Icon } from "@iconify/react"
import Draggable from 'react-draggable'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ReactTerminal } from "react-terminal"
import { lightHouseRun, callSkraprAPI } from "../lib/helpers"
import { useEffect, useState } from "react"
import { _ticker } from "gsap/gsap-core"

function Project02() {
  const [date, setDate] = useState(new Date())
  const [isHovered, setIsHovered] = useState(false)
  let timeNoSeconds
  let dateNow
  let formattedDate

  if (date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    formattedDate = date.toLocaleDateString('en-US', options)

    let time = new Date(date).toLocaleTimeString()
    timeNoSeconds = time.split(" ")[0].split(":")[0] + ":" + time.split(" ")[0].split(":")[1] + " " + time.split(" ")[1]
    dateNow = new Date(date).toLocaleDateString()
  }

  useEffect(() => {
    setInterval(() => tick(), 30000)
  })

  function tick() {
    let date = new Date()
    setDate(date);
  }

  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
    run: (args) => runCLI(args),
  }

  const runCLI = (arg) => {
    const reviews = callSkraprAPI()
    // return lightHouseRun(reviews)

  }

  // const dragEvent = (event, ui) => {
  //   console.log(terminalBox, terminalText)
  //   console.log(event, ui)
  // }

   return (
   <>  
        
      <div className="grid grid-cols-12 grid-rows-12 h-full gap-4">

      {/* <img className="absolute w-[75px] h-[50px] right-24 top-24" src="/doom.png" /> */}

      <Draggable 
      // onDrag={dragEvent}
      >
      <div className="col-start-2 col-end-7 row-start-2 row-end-10 bg-[#161616]">

      <ReactTerminal
      commands={commands}
      themes={{
        "my-custom-theme": {
          themeBGColor: "#161616",
          themeToolbarColor: "#606060",
          themeColor: "#C2E812",
          themePromptColor: "#C2E812"
        }
      }}
      welcomeMessage={"C:/Puppeteer/OpenAI-API/React/LIGHTHOUSE"}
      theme="my-custom-theme"
      />

      <div className="flex flex-row" >
        {/* <Icon className="absolute top-0 left-6 cursor-pointer" color="#111" width="15" height="15" icon="material-symbols:minimize" />
        <Icon className="absolute top-3 left-2 cursor-pointer" color="#111" width="10" height="10" icon="ph:x-bold"/> */}
        {/* <Icon className="absolute top-2 left-8 cursor-pointer" color="#111" width="15" height="15" icon="ic:outline-square" /> */}
      </div>

      </div>
      </Draggable>

        <div className="col-start-1 col-end-13 row-start-13 row-end-13 font-windows">
          <div className="relative bg-[#1a1a1a] w-screen h-10 bottom-0">

          <div className="windowIconBackground absolute h-full w-[48px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <span className="tooltipText">Start</span>
            <Icon 
            className="windowIcon absolute left-4 top-[11px] cursor-pointer" 
            width="17" height="17" 
            color={isHovered ? "#0078d7" : "#e8e8e8"} 
            icon="bi:windows" 
            />
          </div>

          <Icon className="searchIcon absolute ml-[56px] z-10 bottom-[7px]" width="25" height="25" color="#fff" icon="material-symbols-light:search" />
            <input
                id="search"
                name="search"
                // type="search"
                placeholder="Type here to search"
                required
                // value={formData.email}
                // onChange={handleChange}
                className="input absolute pl-[42px] text-[15px] left-[45px] h-full w-[288px] bg-[#2a2a2a]"
            />
          
          <div className="caretBackground absolute h-full w-[20px] right-[125px]">
          <span className="tooltipText">Show hidden icons</span>
            <Icon 
            className="absolute top-3 right-[1px]" 
            width="18" height="18" 
            icon="ph:caret-up" />
          </div>

          <div className="timeBackground absolute flex flex-col right-14 text-white text-[.8rem] px-2">
          <span className="tooltipText">{formattedDate}</span>
            <div>{timeNoSeconds}</div>
            <div>{dateNow}</div>
          </div>

          <div className="bubbleBackground absolute h-full w-[40px] right-[10px]">
          <span className="tooltipTextBubble">No new notifications</span>
            <Icon className="absolute right-[7px] top-[10px]" width="25" height="25" color="#fff" icon="material-symbols-light:chat-bubble-outline-rounded" />
          </div>

          </div>
        </div>


        </div>
        <style>
          {`
            .input {
              outline: none;
            }

            input:focus {
              background: #fff;
              border-width: 2px;
              border-color: #0078d7;
              caret-color: black;
            } 

            input:focus + .searchIcon {
              color: black;
            }

            .searchIcon {
              transform: rotate(90deg);
            }

            #terminalEditor {
              font-size: 14px;
              overflow: hidden;
              font-family: 'Modenine', sans-serif;
            }

            .index_editor__JoDSg .index_caret__VS4iV .index_caretAfter__6aXPx {
              width: 5px;
              height: 15px;
              top: 0px;
            }

            #index_terminalContainer__4seT6 .index_editorWithTopBar__L6XKw .index_terminal__teubZ {
              height: 100;
            }

            .windowIconBackground {
              transition: background-color 0.05s;
            }

            .caretBackground {
              transition: background-color 0.05s;
            }

            .caretBackground:hover {
              background-color: #3f3f3f;
            }

            .timeBackground {
              transition: background-color 0.05s;
            }

            .timeBackground:hover {
              background-color: #3f3f3f;
            }

            .bubbleBackground {
              transition: background-color 0.05s;
            }

            .bubbleBackground:hover {
              background-color: #3f3f3f;
            }

            .windowIconBackground:hover {
              background-color: #3f3f3f;
            }

            .windowIcon:hover {
              color: #0078d7;
            }

            .tooltipText {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              white-space: nowrap;
              background-color: #d3d3d3;
              color: #636363;
              padding-left: 5px;
              padding-right: 5px;
              font-size: 12px;
              visibility: hidden;
              opacity: 0;
              transition: all 0.5s ease;
              bottom: 42px;
            }

            .tooltipTextBubble {
              position: absolute;
              left: 50%;
              transform: translateX(-80%);
              white-space: nowrap;
              background-color: #d3d3d3;
              color: #636363;
              padding-left: 5px;
              padding-right: 5px;
              font-size: 12px;
              visibility: hidden;
              opacity: 0;
              transition: all 0.5s ease;
              bottom: 42px;
            }

            .windowIconBackground:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .caretBackground:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }
          
            .timeBackground:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .bubbleBackground:hover .tooltipTextBubble {
              visibility: visible;
              opacity: 1;
            }   

          `}
        </style>
      </>
    )
  }
  
  export default Project02
  
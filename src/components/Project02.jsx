import { Icon } from "@iconify/react"
import Draggable from 'react-draggable'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ReactTerminal } from "react-terminal"
import { callSkraprAPI } from "../lib/helpers"
import { useEffect, useState } from "react"
import { _ticker } from "gsap/gsap-core"
import Spotlight, { SpotlightCard } from "./Spotlight"
import axios from "axios"
import Calendar from 'react-calendar'
import '../lib/calendar/Calendar.css'
import Calculator from "../lib/calculator/index.js"
import AudioPlayer from 'react-h5-audio-player'
import '../lib/spotify/styles.css'
import { useRef } from "react"

function Project02() {

  const [date, setDate] = useState(new Date())
  const [isHovered, setIsHovered] = useState(false)

  let [calendarOpen, setCalendarOpen] = useState(false)
  let [startMenuOpen, setStartMenuOpen] = useState(false)
  let [iconTrayOpen, setIconTrayOpen] = useState(false)
  let [searchOpen, setSearchOpen] = useState(false)
  let [notificationPanelOpen, setNotificationPanelOpen] = useState(false)

  let [calculatorOpen, setCalculatorOpen] = useState(false)
  let [calculatorMinimized, setCalculatorMinimized] = useState(false)

  let [spotifyOpen, setSpotifyOpen] = useState(false)
  let [spotifyMinimized, setSpotifyMinimized] = useState(false)

  let [terminalOpen, setTerminalOpen] = useState(false)
  let [terminalMinimized, setTerminalMinimized] = useState(false)

  let [doomOpen, setDoomOpen] = useState(false)
  let [doomMinimized, setDoomMinimized] = useState(false)

  let [figmaOpen, setFigmaOpen] = useState(false)
  let [figmaMinimized, setFigmaMinimized] = useState(false)

  let [taskbarItems, setTaskbarItems] = useState([])

  let [windowClickedZIndex, setWindowClicked] = useState([])

  let [powerOff, setPowerOff] = useState(false)

  const windowClickedZIndexRef = useRef(windowClickedZIndex)

  const spotifyMinimizedRef = useRef(spotifyMinimized)
  const calculatorMinimizedRef = useRef(calculatorMinimized)
  const doomMinimizedRef = useRef(doomMinimized)
  const terminalMinimizedRef = useRef(terminalMinimized)
  const figmaMinimizedRef = useRef(figmaMinimized)

  const calculatorXRef = useRef(0)
  const calculatorYRef = useRef(0)
  
  const spotifyXRef = useRef(0)
  const spotifyYRef = useRef(0)

  const figmaXRef = useRef(0)
  const figmaYRef = useRef(0)

  const doomXRef = useRef(0)
  const doomYRef = useRef(0)

  const terminalXRef = useRef(0)
  const terminalYRef = useRef(0)

  const figmaRef = useRef(null)
  const terminalRef = useRef(null)
  const calculatorRef = useRef(null)
  const doomRef = useRef(null)
  const spotifyRef = useRef(null)

  const tracks = "/rick.mp3"

  let [response, setResponse] = useState("")

  let timeNoSeconds
  let timeWithSeconds
  let dateNow
  let formattedDate
  let amOrPm

  if (date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    formattedDate = date.toLocaleDateString('en-US', options)

    let time = new Date(date).toLocaleTimeString()
    
    timeWithSeconds = time.split(" ")[0]
    amOrPm = time.split(" ")[1]
    timeNoSeconds = time.split(" ")[0].split(":")[0] + ":" + time.split(" ")[0].split(":")[1] + " " + time.split(" ")[1]
    dateNow = new Date(date).toLocaleDateString()
  }

  useEffect(() => {setInterval(() => tick(), 1000) }, [])

  useGSAP(() => {
    const terminalTaskIcon = document.querySelector(".terminalTaskIcon")
    const calculatorTaskIcon = document.querySelector(".calculatorTaskIcon")
    const doomTaskIcon = document.querySelector(".doomTaskIcon")
    const spotifyTaskIcon = document.querySelector(".spotifyTaskIcon")
    const figmaTaskIcon = document.querySelector(".figmaTaskIcon")
    
    windowClickedZIndexRef.current = windowClickedZIndex

    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })
    const tl5 = gsap.timeline({ paused: true })

    tl.fromTo(terminalTaskIcon, {
      duration: .1,
      backgroundColor: "#1a1a1a",
    },
    {
      duration: .1,
      backgroundColor: "#3f3f3f",
    })

    tl2.fromTo(calculatorTaskIcon, {
      duration: .1,
      backgroundColor: "#1a1a1a",
      borderWidth: "80%",
    },
    {
      duration: .1,
      backgroundColor: "#3f3f3f",
      borderWidth: "10%",
    })

    tl3.fromTo(spotifyTaskIcon, {
      duration: .1,
      backgroundColor: "#1a1a1a",
    }, 
    {
      duration: .1,
      backgroundColor: "#3f3f3f",
    })

    tl4.fromTo(doomTaskIcon, {
      duration: .1,
      backgroundColor: "#1a1a1a",
    },
    {
      duration: .1,
      backgroundColor: "#3f3f3f",
    })

    tl5.fromTo(figmaTaskIcon, {
      duration: .1,
      backgroundColor: "#1a1a1a",
    },
    {
      duration: .1,
      backgroundColor: "#3f3f3f",
    })

    terminalTaskIcon.addEventListener("mouseover", () => {
      tl.play()
    })
    terminalTaskIcon.addEventListener("mouseleave", () => {
      if (windowClickedZIndexRef.current[0] === '.terminal') return
      tl.reverse()
    })

    calculatorTaskIcon.addEventListener("mouseover", () => {
      tl2.play()
    })
    calculatorTaskIcon.addEventListener("mouseleave", () => {
      if (windowClickedZIndexRef.current[0] === '.calculator') return
      tl2.reverse()
    })

    spotifyTaskIcon.addEventListener("mouseover", () => {
      tl3.play()
    })
    spotifyTaskIcon.addEventListener("mouseleave", () => {
      if (windowClickedZIndexRef.current[0] === '.spotify') return
      tl3.reverse()
    })

    doomTaskIcon.addEventListener("mouseover", () => {
      tl4.play()
    })
    doomTaskIcon.addEventListener("mouseleave", () => {
      if (windowClickedZIndexRef.current[0] === '.figma') return
      tl4.reverse()
    })

    figmaTaskIcon.addEventListener("mouseover", () => {
      tl5.play()
    })
    figmaTaskIcon.addEventListener("mouseleave", () => {
      if (windowClickedZIndexRef.current[0] === '.figma') return
      tl5.reverse()
    })
  }, [windowClickedZIndex])

  useEffect(() => {

    if (!spotifyOpen && !spotifyMinimizedRef.current) return

    const spotify = document.querySelector(".spotify");
    const spotifyTaskbarIcon = document.querySelector(".spotifyTaskIcon")
    const spotifyMinimize = document.querySelector(".spotifyMinimize")

    const handleSpotifyClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.spotify')) {
          if (!spotifyMinimizedRef.current) {
            return ['.spotify', ...prevItems]
          }
        }
        const array = prevItems.filter(item => item !== '.spotify')
        return ['.spotify', ...array]
      })
    }

    const handleSpotifyMinimizeClick = (e) => {
      e.stopPropagation()
      setSpotifyMinimized(true)
      setWindowClicked((prevItems) => {
        const array = prevItems.filter(item => item !== '.spotify')
        array.push('.spotify')
        return array
      })
    }

    const handleTaskbarIconClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.spotify')) {
          return ['.spotify', ...prevItems]
        }
        const array = prevItems.filter(item => item !== '.spotify')
        return ['.spotify', ...array]
      })
    }

    spotify.addEventListener("click", handleSpotifyClick)
    spotifyTaskbarIcon.addEventListener("click", handleTaskbarIconClick)
    spotifyMinimize.addEventListener("click", handleSpotifyMinimizeClick)

    return () => {
      spotify.removeEventListener("click", handleSpotifyClick)
      spotifyTaskbarIcon.removeEventListener("click", handleTaskbarIconClick)
      spotifyMinimize.removeEventListener("click", handleSpotifyMinimizeClick)
    }
  }, [spotifyOpen, spotifyMinimized])

  const spotifyCloseClick = () => { 
    setSpotifyTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      return prevItems.filter(item => item !== '.spotify')
    })
    setSpotifyOpen(prevState => !prevState)
  }

  const handleSpotifyTaskOpenClick = () => { 
    setSpotifyMinimized(false)
    setSpotifyTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      const array = prevItems.filter(item => item !== '.spotify')
      return ['.spotify', ...array]
    })
  }

  const spotifyInitialize = () => {
    if (spotifyOpen) return
    setWindowClicked((prevItems) => {
      if (!prevItems.includes('.spotify')) {
        return ['.spotify', ...prevItems];
      }
    })
    setSpotifyOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (!calculatorOpen && !calculatorMinimizedRef.current) return

    const calculator = document.querySelector(".calculator")
    const calculatorTaskbarIcon = document.querySelector(".calculatorTaskIcon")
    const calculatorMinimize = document.querySelector(".calculatorMinimize")

    const handleCalculatorClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.calculator')) {
          if (!calculatorMinimizedRef.current) {
            return ['.calculator', ...prevItems]
          }
        }
        const array = prevItems.filter(item => item !== '.calculator')
        return ['.calculator', ...array]
      })
    }

    const handleCalculatorMinimizeClick = (e) => {
      e.stopPropagation()
      setCalculatorMinimized(true)
      setWindowClicked((prevItems) => {
        const array = prevItems.filter(item => item !== '.calculator')
        array.push('.calculator')
        return array
      })
    }

    const handleCalculatorTaskbarIconClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.calculator')) {
          return ['.calculator', ...prevItems]
        }
        const array = prevItems.filter(item => item !== '.calculator')
        return ['.calculator', ...array]
      })
    }

    calculator.addEventListener("click", handleCalculatorClick)
    calculatorTaskbarIcon.addEventListener("click", handleCalculatorTaskbarIconClick)
    calculatorMinimize.addEventListener("click", handleCalculatorMinimizeClick)

    return () => {
      calculator.removeEventListener("click", handleCalculatorClick)
      calculatorTaskbarIcon.removeEventListener("click", handleCalculatorTaskbarIconClick)
      calculatorMinimize.removeEventListener("click", handleCalculatorMinimizeClick)
    }
  }, [calculatorOpen, calculatorMinimized])

  const calculatorCloseClick = () => { 
    setCalculatorTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      return prevItems.filter(item => item !== '.calculator')
    })
    setCalculatorOpen(prevState => !prevState)
  }

  const handleCalculatorTaskOpenClick = () => { 
    setCalculatorMinimized(false)
    setCalculatorTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      const array = prevItems.filter(item => item !== '.calculator')
      return ['.calculator', ...array]
    })
  }

  const calculatorInitialize = () => {
    if (calculatorOpen) return
    setWindowClicked((prevItems) => {
      if (!prevItems.includes('.calculator')) {
        return ['.calculator', ...prevItems];
      }
    })
    setCalculatorOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (!terminalOpen && !terminalMinimizedRef.current) return

    const terminal = document.querySelector(".terminal")
    const terminalTaskbarIcon = document.querySelector(".terminalTaskIcon")
    const terminalMinimize = document.querySelector(".terminalMinimize")

    const handleTerminalClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.terminal')) {
          if (!terminalMinimizedRef.current) {
            return ['.terminal', ...prevItems]
          }
        }
        const array = prevItems.filter(item => item !== '.terminal')
        return ['.terminal', ...array]
      })
    }

    const handleTerminalMinimizeClick = (e) => {
      e.stopPropagation()
      setTerminalMinimized(true)
      setWindowClicked((prevItems) => {
        const array = prevItems.filter(item => item !== '.terminal')
        array.push('.terminal')
        return array
      })
    }

    const handleTerminalTaskbarIconClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.terminal')) {
          return ['.terminal', ...prevItems]
        }
        const array = prevItems.filter(item => item !== '.terminal')
        return ['.terminal', ...array]
      })
    }

    terminal.addEventListener("click", handleTerminalClick)
    terminalTaskbarIcon.addEventListener("click", handleTerminalTaskbarIconClick)
    terminalMinimize.addEventListener("click", handleTerminalMinimizeClick)

    return () => {
      terminal.removeEventListener("click", handleTerminalClick)
      terminalTaskbarIcon.removeEventListener("click", handleTerminalTaskbarIconClick)
      terminalMinimize.removeEventListener("click", handleTerminalMinimizeClick)
    }

  }, [terminalOpen, terminalMinimized])

  const terminalCloseClick = () => { 
    setTerminalTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      return prevItems.filter(item => item !== '.terminal')
    })
    setTerminalOpen(prevState => !prevState)
  }

  const handleTerminalTaskOpenClick = () => { 
    setTerminalMinimized(false)
    setTerminalTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      const array = prevItems.filter(item => item !== '.terminal')
      return ['.terminal', ...array]
    })
  }

  const terminalInitialize = () => {
    if (terminalOpen) return
    setWindowClicked((prevItems) => {
      if (!prevItems.includes('.terminal')) {
        return ['.terminal', ...prevItems];
      }
    })
    setTerminalOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (!doomOpen && !doomMinimizedRef.current) return
    
    const doom = document.querySelector(".doom")
    const doomTaskbarIcon = document.querySelector(".doomTaskIcon")
    const doomMinimize = document.querySelector(".doomMinimize")

    const handleDoomClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.doom')) {
          if (!doomMinimizedRef.current) {
            return ['.doom', ...prevItems]
          }
        }
        const array = prevItems.filter(item => item !== '.doom')
        return ['.doom', ...array]
      })
    }

    const handleDoomMinimizeClick = (e) => {
      e.stopPropagation()
      setDoomMinimized(true)
      setWindowClicked((prevItems) => {
        const array = prevItems.filter(item => item !== '.doom')
        array.push('.doom')
        return array
      })
    }

    const handleDoomTaskbarIconClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.doom')) {
          return ['.doom', ...prevItems]
        }
        const array = prevItems.filter(item => item !== '.doom')
        return ['.doom', ...array]
      })
    }

    doom.addEventListener("click", handleDoomClick)
    doomTaskbarIcon.addEventListener("click", handleDoomTaskbarIconClick)
    doomMinimize.addEventListener("click", handleDoomMinimizeClick)

    return () => {
      doom.removeEventListener("click", handleDoomClick)
      doomTaskbarIcon.removeEventListener("click", handleDoomTaskbarIconClick)
      doomMinimize.removeEventListener("click", handleDoomMinimizeClick)
    }

  }, [doomOpen, doomMinimized])

  const doomCloseClick = () => { 
    setDoomTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      return prevItems.filter(item => item !== '.doom')
    })
    setDoomOpen(prevState => !prevState)
  }

  const handleDoomTaskOpenClick = () => { 
    setDoomMinimized(false)
    setDoomTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      const array = prevItems.filter(item => item !== '.doom')
      return ['.doom', ...array]
    })
  }

  const doomInitialize = () => {
    if (doomOpen) return
    setWindowClicked((prevItems) => {
      if (!prevItems.includes('.doom')) {
        return ['.doom', ...prevItems];
      }
    })
    setDoomOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (!figmaOpen && !figmaMinimizedRef.current) return
    
    const figma = document.querySelector(".figma")
    const figmaTaskbarIcon = document.querySelector(".figmaTaskIcon")
    const figmaMinimize = document.querySelector(".figmaMinimize")

    const handleFigmaClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.figma')) {
          if (!figmaMinimizedRef.current) {
            return ['.figma', ...prevItems]
          }
        }
        const array = prevItems.filter(item => item !== '.figma')
        return ['.figma', ...array]
      })
    }

    const handleFigmaMinimizeClick = (e) => {
      e.stopPropagation()
      setFigmaMinimized(true)
      setWindowClicked((prevItems) => {
        const array = prevItems.filter(item => item !== '.figma')
        array.push('.figma')
        return array
      })
    }

    const handleFigmaTaskbarIconClick = () => {
      setWindowClicked((prevItems) => {
        if (!prevItems.includes('.figma')) {
          return ['.figma', ...prevItems]
        }
        const array = prevItems.filter(item => item !== '.figma')
        return ['.figma', ...array]
      })
    }

    figma.addEventListener("click", handleFigmaClick)
    figmaTaskbarIcon.addEventListener("click", handleFigmaTaskbarIconClick)
    figmaMinimize.addEventListener("click", handleFigmaMinimizeClick)

    return () => {
      figma.removeEventListener("click", handleFigmaClick)
      figmaTaskbarIcon.removeEventListener("click", handleFigmaTaskbarIconClick)
      figmaMinimize.removeEventListener("click", handleFigmaMinimizeClick)
    }

  }, [figmaOpen, figmaMinimized])

  const figmaCloseClick = () => { 
    setFigmaTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      return prevItems.filter(item => item !== '.figma')
    })
    setFigmaOpen(prevState => !prevState)
  }

  const handleFigmaTaskOpenClick = () => { 
    setFigmaMinimized(false)
    setFigmaTaskMenuVisible(false)
    setWindowClicked((prevItems) => {
      const array = prevItems.filter(item => item !== '.figma')
      return ['.figma', ...array]
    })
  }

  const figmaInitialize = () => {
    if (figmaOpen) return
    setWindowClicked((prevItems) => {
      if (!prevItems.includes('.figma')) {
        return ['.figma', ...prevItems]
      }
    })
    setFigmaOpen(prevState => !prevState)
  }

  async function gptChat(formData) {
    const response = await axios.get("http://zagorouiko.com/openAI-chat", {
      params: { formData: formData }
    })
    setResponse(response.data.gptResponse)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const message = formData.get("message")
    e.target.reset()
    gptChat(message)
  }

  useGSAP(() => {
    const tl = gsap.timeline()
    const tl2 = gsap.timeline()
    const tl3 = gsap.timeline()
    const tl4 = gsap.timeline()
    const tl5 = gsap.timeline()

    const startMenu = document.querySelector(".startMenu")
    const iconTray = document.querySelector(".iconTray")
    const calendar = document.querySelector(".calendar")
    const search = document.querySelector(".search")
    const notificationPanel = document.querySelector(".notificationPanel")

    const startItem = document.querySelectorAll(".startItem")
    const squares = document.querySelectorAll(".square")
    const searchText = document.querySelector(".searchText")
    const searchIcon = document.querySelector(".searchIcon")
    const notificationItem = document.querySelectorAll(".notificationItem")

    tl.fromTo(startMenu, 
      {
        duration: .2,
        opacity: 0,
        height: '0px',
        ease: 'expo.inOut'
      },
      {
      duration: .2,
      opacity: 1,
      height: '600px',
      ease: 'expo.inOut'
    })

    tl.fromTo(startItem, 
      {
      duration: .4,
      y: 35,
      opacity: 0,
      ease: 'expo.inOut',
    },
    {
      duration: .4,
      y: 0,
      opacity: 1,
      ease: 'expo.inOut'
    },
    "-=0.2")

    tl.fromTo(squares, 
      {
      duration: .4,
      y: 35,
      opacity: 0,
      ease: 'expo.inOut',
    },
    {
      duration: .4,
      y: 0,
      opacity: 1,
      ease: 'expo.inOut'
    },
    "-=0.4")

    tl2.fromTo(iconTray, 
      {
        duration: .001,
        opacity: 0,
        height: '0px',
        ease: 'expo.inOut'
      },
      {
      duration: .001,
      opacity: 1,
      height: '120px',
      ease: 'expo.inOut'
    }).reverse()

    tl3.fromTo(calendar, 
    {
      duration: .2,
      opacity: 0,
      height: '0px',
      ease: 'expo.inOut'
    },
    {
      duration: .001,
      opacity: 1,
      height: '400px',
      ease: 'expo.inOut'
    }).reverse()

    tl4.fromTo(search, 
      {
        duration: .001,
        opacity: 0,
        height: '0px',
        ease: 'expo.inOut'
      },
      {
        duration: .001,
        opacity: 1,
        height: '500px',
        ease: 'expo.inOut'
      }).reverse()

      tl4.fromTo([searchText, searchIcon], 
        {
          color: 'white',
          duration: .001,
        },
        {
          color: 'black',
          duration: .001,
        }).reverse()

        tl5.fromTo(notificationPanel,
          {
            duration: .4,
            width: '0px',
          },
          {
            duration: .4,
            width: '400px',
          }).reverse()

          tl5.fromTo(notificationItem, 
            {
            duration: .8,
            opacity: 0,
          },
          {
            duration: .8,
            opacity: 1,
          },)


    tl.reverse()

    if (startMenuOpen) {
      tl.play()
    } else {
      tl.reverse()
    }

    if (iconTrayOpen) {
      tl2.play()
    } else {
      tl2.reverse()
    }
    
    if (calendarOpen) {
      tl3.play()
    } else {
      tl3.reverse()
    }

    if (searchOpen) {
      tl4.play()
    } else {
      tl4.reverse()
    }

    if (notificationPanelOpen) {
      tl5.play()
    } else {
      tl5.reverse()
    }


  }, [calendarOpen, startMenuOpen, iconTrayOpen, searchOpen, notificationPanelOpen])

  useGSAP(() => {

    const tl = gsap.timeline()
    const startIcons = document.querySelector(".startIcons")
    const startItemText = document.querySelectorAll(".startItemText")

    tl.to(startIcons, {
      duration: .4,
      width: '250px',
      backgroundColor: '#262626',
      ease: 'expo.inOut'
    }).reverse()

    tl.to(startItemText, {
      duration: .3,
      opacity: 1,
      ease: 'expo.inOut'
    }, "<")


    startIcons.addEventListener("mouseenter", () => {
      tl.play()
    })

    startIcons.addEventListener("mouseleave", () => {
      tl.reverse()
    })
  }, {})

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })

    const calculator = document.querySelector(".calculator")
    const calculatorTaskIcon = document.querySelector(".calculatorTaskIcon")

    tl.fromTo(calculator, {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    tl2.fromTo(calculatorTaskIcon, {
      duration: .001,
      visibility: 'hidden',
    },
    {
      duration: .001,
      visibility: 'visible',
    })

    tl3
    .fromTo(calculator, {
      duration: .3,
      y: calculatorYRef.current,
      x: calculatorXRef.current,
      scale: 1,
      opacity: 1,
    },{
      duration: .3,
      x: calculatorXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    })
    .fromTo(calculator, {
      duration: .1,
      visibility: 'visible',
    },
    {
      duration: .1,
      visibility: 'hidden',
    })

    tl4
    .fromTo(calculator, {
      duration: .3,
      x: calculatorXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    },
    {
      duration: .3,
      y: calculatorYRef.current,
      x: calculatorXRef.current,
      scale: 1,
      opacity: 1,
    })
    .fromTo(calculator, 
    {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    if (calculatorOpen) {
      tl.play()
      tl2.play()
      if (!taskbarItems.includes(".calculatorTaskIcon")) {
        setTaskbarItems(prevArray => [...prevArray, '.calculatorTaskIcon'])
      }
    } else {
      tl.reverse()
      tl2.reverse()
      setTaskbarItems(prevArray => prevArray.filter(item => item !== ".calculatorTaskIcon"))
    }

    if (calculatorOpen && calculatorMinimized) {
      tl3.play()
    }

    if (calculatorOpen && !calculatorMinimized) {
      tl4.play()
    }

  }, [calculatorOpen, calculatorMinimized])

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })

    const figma = document.querySelector(".figma")
    const figmaTaskIcon = document.querySelector(".figmaTaskIcon")

    tl.fromTo(figma, {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    tl2.fromTo(figmaTaskIcon, {
      duration: .001,
      visibility: 'hidden',
    },
    {
      duration: .001,
      visibility: 'visible',
    })

    tl3
    .fromTo(figma, {
      duration: .3,
      y: figmaYRef.current,
      x: figmaXRef.current,
      scale: 1,
      opacity: 1,
    },{
      duration: .3,
      x: figmaXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    })
    .fromTo(figma, {
      duration: .1,
      visibility: 'visible',
    },
    {
      duration: .1,
      visibility: 'hidden',
    })

    tl4
    .fromTo(figma, {
      duration: .3,
      x: figmaXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    },
    {
      duration: .3,
      y: figmaYRef.current,
      x: figmaXRef.current,
      scale: 1,
      opacity: 1,
    })
    .fromTo(figma, 
    {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    if (figmaOpen) {
      tl.play()
      tl2.play()
      if (!taskbarItems.includes(".figmaTaskIcon")) {
        setTaskbarItems(prevArray => [...prevArray, '.figmaTaskIcon'])
      }
    } else {
      tl.reverse()
      tl2.reverse()
      setTaskbarItems(prevArray => prevArray.filter(item => item !== ".figmaTaskIcon"))
    }

    if (figmaOpen && figmaMinimized) {
      tl3.play()
    }

    if (figmaOpen && !figmaMinimized) {
      tl4.play()
    }

  }, [figmaOpen, figmaMinimized])

  useGSAP(() => {
    const terminal = document.querySelector(".terminal")
    const terminalTaskIcon = document.querySelector(".terminalTaskIcon")

    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })

    tl.fromTo(terminal, {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    tl2.fromTo(terminalTaskIcon, {
      duration: .001,
      visibility: 'hidden',
    },
    {
      duration: .001,
      visibility: 'visible',
    })

    tl3
    .fromTo(terminal, {
      duration: .3,
      y: terminalYRef.current,
      x: terminalXRef.current,
      scale: 1,
      opacity: 1,
    },{
      duration: .3,
      x: terminalXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    })
    .fromTo(terminal, {
      duration: .1,
      visibility: 'visible',
    },
    {
      duration: .1,
      visibility: 'hidden',
    })

    tl4
    .fromTo(terminal, {
      duration: .3,
      x: terminalXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    },
    {
      duration: .3,
      y: terminalYRef.current,
      x: terminalXRef.current,
      scale: 1,
      opacity: 1,
    })
    .fromTo(terminal, 
    {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    if (terminalOpen) {
      tl.play()
      tl2.play()
      if (!taskbarItems.includes(".terminalTaskIcon")) {
        setTaskbarItems(prevArray => [...prevArray, '.terminalTaskIcon'])
      }
    } else {
      tl.reverse()
      tl2.reverse()
      setTaskbarItems(prevArray => prevArray.filter(item => item !== ".terminalTaskIcon"))
    }

    if (terminalOpen && terminalMinimized) {
      tl3.play()
    }

    if (terminalOpen && !terminalMinimized) {
      tl4.play()
    }

  }, [terminalOpen, terminalMinimized])

  useGSAP(() => {
    const spotify = document.querySelector(".spotifyBody")
    const spotifyTaskIcon = document.querySelector(".spotifyTaskIcon")

    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })

    tl.fromTo(spotify, {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    tl2.fromTo(spotifyTaskIcon, {
      duration: .001,
      visibility: 'hidden',
    },
    {
      duration: .001,
      visibility: 'visible',
    })

    tl3
    .fromTo(spotify, {
      duration: .3,
      y: spotifyYRef.current,
      x: spotifyXRef.current,
      scale: 1,
      opacity: 1,
    },{
      duration: .3,
      x: spotifyXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    })
    .fromTo(spotify, {
      duration: .1,
      visibility: 'visible',
    },
    {
      duration: .1,
      visibility: 'hidden',
    })

    tl4
    .fromTo(spotify, {
      duration: .3,
      x: spotifyXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    },
    {
      duration: .3,
      y: spotifyYRef.current,
      x: spotifyXRef.current,
      scale: 1,
      opacity: 1,
    })
    .fromTo(spotify, 
    {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    if (spotifyOpen) {
      tl.play()
      tl2.play()
      if (!taskbarItems.includes(".spotifyTaskIcon")) {
        setTaskbarItems(prevArray => [...prevArray, '.spotifyTaskIcon'])
      }
    } else {
      tl.reverse()
      tl2.reverse()
      setTaskbarItems(prevArray => prevArray.filter(item => item !== ".spotifyTaskIcon"))
    }

    if (spotifyOpen && spotifyMinimized) {
      tl3.play()
    }

    if (spotifyOpen && !spotifyMinimized) {
      tl4.play()
    }

  }, [spotifyOpen, spotifyMinimized])

  useGSAP(() => {
    const doom = document.querySelector(".doom")
    const doomTaskIcon = document.querySelector(".doomTaskIcon")

    const tl = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })
    const tl4 = gsap.timeline({ paused: true })

    tl.fromTo(doom, {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    tl2.fromTo(doomTaskIcon, {
      duration: .001,
      visibility: 'hidden',
    },
    {
      duration: .001,
      visibility: 'visible',
    })

    tl3
    .fromTo(doom, {
      duration: .3,
      y: doomYRef.current,
      x: doomXRef.current,
      scale: 1,
      opacity: 1,
    },{
      duration: .3,
      x: doomXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    })
    .fromTo(doom, {
      duration: .1,
      visibility: 'visible',
    },
    {
      duration: .1,
      visibility: 'hidden',
    })

    tl4
    .fromTo(doom, {
      duration: .3,
      x: doomXRef.current,
      y: 600,
      scale: .1,
      opacity: .3,
    },
    {
      duration: .3,
      y: doomYRef.current,
      x: doomXRef.current,
      scale: 1,
      opacity: 1,
    })
    .fromTo(doom, 
    {
      duration: .1,
      visibility: 'hidden',
    },
    {
      duration: .1,
      visibility: 'visible',
    })

    if (doomOpen) {
      tl.play()
      tl2.play()
      if (!taskbarItems.includes(".doomTaskIcon")) {
        setTaskbarItems(prevArray => [...prevArray, '.doomTaskIcon'])
      }
    } else {
      tl.reverse()
      tl2.reverse()
      setTaskbarItems(prevArray => prevArray.filter(item => item !== ".doomTaskIcon"))
    }

    if (doomOpen && doomMinimized) {
      tl3.play()
    }

    if (doomOpen && !doomMinimized) {
      tl4.play()
    }

  }, [doomOpen, doomMinimized])

  useEffect(() => {

    for (let i = 0; i < taskbarItems.length; i++) {
      const element = document.querySelector(taskbarItems[i])

      if (i === 0) { 
        element.style.marginLeft = "335px"
      }
      if (i === 1) { 
        element.style.marginLeft = "385px"
      }
      if (i === 2) { 
        element.style.marginLeft = "435px"
      }
      if (i === 3) {
        element.style.marginLeft = "485px"
      }
      if (i === 4) {
        element.style.marginLeft = "535px"
      }
    }
  }, [taskbarItems])

  useGSAP(() => {

    for (let i = 0; i < windowClickedZIndex.length; i++) {

      let element = document.querySelector(windowClickedZIndex[i])
      const taskbarElement = document.querySelector(windowClickedZIndex[i] + "TaskIcon")

      if (windowClickedZIndex[i] === '.spotify') { 
        element = document.querySelector('.spotifyBody')
      }

      if (i === 0) { 
        element.style.zIndex = "10"
        taskbarElement.style.backgroundColor = "#3f3f3f"
      }
      if (i === 1) { 
        element.style.zIndex = "9"
        taskbarElement.style.backgroundColor = "#1a1a1a"
      }
      if (i === 2) { 
        element.style.zIndex = "8"
        taskbarElement.style.backgroundColor = "#1a1a1a"
      }
      if (i === 3) {
        element.style.zIndex = "7"
        taskbarElement.style.backgroundColor = "#1a1a1a"
      }
      if (i === 4) {
        element.style.zIndex = "8"
        taskbarElement.style.backgroundColor = "#1a1a1a"
      }
    }
  }, [windowClickedZIndex])

  useGSAP(() => {
    const loginDiv = document.querySelector('.loginDiv')
    const tl = gsap.timeline({ paused: true, defaults: { duration: 2.5, ease: 'power2.inOut' }})
    const tl2 = gsap.timeline({ paused: true, defaults: { duration: 1, ease: 'power2.inOut'} })

    tl.fromTo(loginDiv, {
      pointerEvents: "none",
      opacity: 0,
    }, {
      pointerEvents: "all",
      opacity: .8,
    })

    tl2.fromTo(loginDiv, 
      {
        pointerEvents: "all",
        opacity: .8,
      },
      {
        pointerEvents: "none",
        opacity: 0,
      })

    if (powerOff) {
      tl.play()
    } else {
      tl2.play()
    }

  }, [powerOff])

  function disableScroll() {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop
     let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

     const menu = document.querySelector(".menu")
     const header = document.querySelector(".header")
     const transition = document.querySelector(".transition")
     const about = document.querySelector(".aboutSection")  
     const nftPhone = document.querySelector(".NFTPhone")
     const contact = document.querySelector(".contact")

     header.style.visibility = "hidden"
     menu.style.visibility = "hidden"
     transition.style.visibility = "hidden"
     about.style.visibility = "hidden"
     nftPhone.style.visibility = "hidden"
     contact.style.visibility = "hidden"

        
      window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop)
      }
    }

    function enableScroll() {
      const menu = document.querySelector(".menu")
      const header = document.querySelector(".header")
      const transition = document.querySelector(".transition")
      const about = document.querySelector(".aboutSection")  
      const nftPhone = document.querySelector(".NFTPhone")
      const contact = document.querySelector(".contact")
 
      header.style.visibility = "visible"
      menu.style.visibility = "visible"
      transition.style.visibility = "visible"
      about.style.visibility = "visible"
      nftPhone.style.visibility = "visible"
      contact.style.visibility = "visible"

      window.onscroll = function() {}
     }

  function tick() {
    let date = new Date()
    setDate(date);
  }

  const commands = {
    cd: (directory) => `changed path to ${directory}`,
    run: async () => 
      {
        const value = await callSkraprAPI()
        const lines = value.split(/\d+\./)

        return (
          <div>
            <div className="flex justify-center">Operating System: iOS</div>
            <div className="flex justify-center">App name: OpenAI</div>
            {lines.map((element, index) => {
              return (
              <>
                <div key={index}>{element}</div>
              </>
            )
            })}
          </div>
        ) 
      },
  }

  const [menuVisible, setMenuVisible] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

  const [figmaTaskMenuVisible, setFigmaTaskMenuVisible] = useState(false)
  const [figmaTaskMenuPosition, setFigmaTaskMenuPosition] = useState({ x: 0, y: 0 })

  const [terminalTaskMenuVisible, setTerminalTaskMenuVisible] = useState(false)
  const [terminalTaskMenuPosition, setTerminalTaskMenuPosition] = useState({ x: 0, y: 0 })

  const [calculatorTaskMenuVisible, setCalculatorTaskMenuVisible] = useState(false)
  const [calculatorTaskMenuPosition, setCalculatorTaskMenuPosition] = useState({ x: 0, y: 0 })

  const [spotifyTaskMenuVisible, setSpotifyTaskMenuVisible] = useState(false)
  const [spotifyTaskMenuPosition, setSpotifyTaskMenuPosition] = useState({ x: 0, y: 0 })

  const [doomTaskMenuVisible, setDoomTaskMenuVisible] = useState(false)
  const [doomTaskMenuPosition, setDoomTaskMenuPosition] = useState({ x: 0, y: 0 })

  const hideMenu = () => {
    setMenuVisible(false)
  }

  const rightClick = (e) => { 
    e.preventDefault()
    if (menuVisible) {
      hideMenu()
    } else {
      setMenuVisible(true)
      setMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  const rightClickFigmaTaskIcon = (e) => { 
    e.preventDefault()
    clearRightClickTaskMenus(e)
    if (figmaTaskMenuVisible) {
      setFigmaTaskMenuVisible(false)
    } else {
      setFigmaTaskMenuVisible(true)
      setFigmaTaskMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  const rightClickDoomTaskIcon = (e) => { 
    e.preventDefault()
    clearRightClickTaskMenus(e)
    if (doomTaskMenuVisible) {
      setDoomTaskMenuVisible(false)
    } else {
      setDoomTaskMenuVisible(true)
      setDoomTaskMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  const rightClickTerminalTaskIcon = (e) => { 
    e.preventDefault()
    clearRightClickTaskMenus(e)
    if (terminalTaskMenuVisible) {
      setTerminalTaskMenuVisible(false)
    } else {
      setTerminalTaskMenuVisible(true)
      setTerminalTaskMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  const rightClickSpotifyTaskIcon = (e) => { 
    e.preventDefault()
    clearRightClickTaskMenus(e)
    if (spotifyTaskMenuVisible) {
      setDoomTaskMenuVisible(false)
    } else {
      setSpotifyTaskMenuVisible(true)
      setSpotifyTaskMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  const rightClickCalculatorTaskIcon = (e) => { 
    e.preventDefault()
    clearRightClickTaskMenus(e)
    if (calculatorTaskMenuVisible) {
      setCalculatorTaskMenuVisible(false)
    } else {
      setCalculatorTaskMenuVisible(true)
      setCalculatorTaskMenuPosition({ x: e.clientX, y: e.clientY})
    }
  }

  function clearRightClickTaskMenus(menu) {
    if (menu.target.classList[0] !== "figmaTaskIcon") { 
      setFigmaTaskMenuVisible(false)
    }
    if (menu.target.classList[0] !== "doomTaskIcon") {
      setDoomTaskMenuVisible(false)
    }
    if (menu.target.classList[0] !== "terminalTaskIcon") {
      setTerminalTaskMenuVisible(false)
    }
    if (menu.target.classList[0] !== "spotifyTaskIcon") {
      setSpotifyTaskMenuVisible(false)
    }
    if (menu.target.classList[0] !== "calculatorTaskIcon") {
      setCalculatorTaskMenuVisible(false)
    }
  }

  const handleCalendarClick = () => {
    setCalendarOpen(prevState => !prevState)
  }

  const handleStartMenuClick = () => {
    setStartMenuOpen(prevState => !prevState)
  }

  const handleTrayClick = () => {
    setIconTrayOpen(prevState => !prevState)
  }

  const handleSearchClick = () => {
    document.querySelector(".searchText").value = ""
    setSearchOpen(prevState => !prevState)
  }

  const handleNotificationPanelClick = () => {
    setNotificationPanelOpen(prevState => !prevState)
  }

  const backgroundClickToggle = () => {
    document.querySelector(".searchText").value = ""
    hideMenu()

    if (calendarOpen) { 
      setCalendarOpen(prevState => !prevState)
    }
    if (startMenuOpen) { 
      setStartMenuOpen(prevState => !prevState)
    }
    if (iconTrayOpen) { 
      setIconTrayOpen(prevState => !prevState)
    }
    if (searchOpen) { 
      setSearchOpen(prevState => !prevState)
    }
    if (notificationPanelOpen) {
      setNotificationPanelOpen(prevState => !prevState)
    }
    if (figmaTaskMenuVisible) {
      setFigmaTaskMenuVisible(prevState => !prevState)
    }
    if (doomTaskMenuVisible) {
      setDoomTaskMenuVisible(prevState => !prevState)
    }
    if (spotifyTaskMenuVisible) {
      setSpotifyTaskMenuVisible(prevState => !prevState)
    }
    if (calculatorTaskMenuVisible) {
      setCalculatorTaskMenuVisible(prevState => !prevState)
    }
    if (terminalTaskMenuVisible) {
      setTerminalTaskMenuVisible(prevState => !prevState)
    }
  }

  const handlePowerOff = () => {
    disableScroll()
    setPowerOff(true)
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()

    if (e.target[0].value === "80085") { 
      enableScroll()
      setPowerOff(false)
    }

    e.target.reset()
  }

  const handlePasswordEntered = () => {
    document.querySelector(".passwordText").value = ""
  }

  const handleFigmaDragStop = (e) => {
    const transform = figmaRef.current.style.transform

    const translateValues = transform.match(/translate\(([^)]+)\)/)[1].split(', ');
    const x = parseFloat(translateValues[0]);
    const y = parseFloat(translateValues[1]);

    figmaXRef.current = x
    figmaYRef.current = y
}

  const handleDoomDragStop = (e) => {
    const transform = doomRef.current.style.transform

    const translateValues = transform.match(/translate\(([^)]+)\)/)[1].split(', ');
    const x = parseFloat(translateValues[0]);
    const y = parseFloat(translateValues[1]);

    doomXRef.current = x
    doomYRef.current = y
  }

  const handleSpotifyDragStop = (e) => {
    const transform = spotifyRef.current.style.transform

    const translateValues = transform.match(/translate\(([^)]+)\)/)[1].split(', ');
    const x = parseFloat(translateValues[0]);
    const y = parseFloat(translateValues[1]);

    spotifyXRef.current = x
    spotifyYRef.current = y
  }

  const handleCalculatorDragStop = (e) => {
    const transform = calculatorRef.current.style.transform

    const translateValues = transform.match(/translate\(([^)]+)\)/)[1].split(', ');
    const x = parseFloat(translateValues[0]);
    const y = parseFloat(translateValues[1]);

    calculatorXRef.current = x
    calculatorYRef.current = y
  }

  const handleTerminalDragStop = (e) => {
    const transform = terminalRef.current.style.transform

    const translateValues = transform.match(/translate\(([^)]+)\)/)[1].split(', ');
    const x = parseFloat(translateValues[0]);
    const y = parseFloat(translateValues[1]);

    terminalXRef.current = x
    terminalYRef.current = y
  }

  return (
   <> 

      <div className="loginDiv absolute pointer-events-none z-30 opacity-0 w-full h-screen bg-slate-900">
        <div className="flex flex-col h-full w-full items-center top-[30%] z-50 relative">
        <img  className="z-20 w-[200px] h-[200px] opacity-100 rounded-full" src="/catPirate.webp" alt="Profile picture" />
        <div className="flex mt-[30px]">
          <form onSubmit={handlePasswordSubmit} autoComplete="off">
            <label htmlFor="password"/>
                <input
                    id="password"
                    name="message"
                    required
                    placeholder="Password"              
                    className="passwordText pl-[7px] pr-[3px] py-[3px] loginBox text-[16px] bg-[#2a2a2a]"
                    autoComplete="off"
                    onClick={handlePasswordEntered}
                />
            </form>
          </div>
          <div className="flex mt-[10px] font-semibold">Hint: (39682 * 2) + 721</div>
        </div>
        <video className='absolute h-full w-full object-cover opacity-80 z-40 top-0' type="video/mp4" autoPlay loop muted src="/loginVideo.webm" />
      </div>

      <div className="xl:hidden grid grid-cols-8 grid-rows-8 w-full h-full">
        <div className="col-start-2 col-end-8 row-start-2 row-end-8 bg-[#161616]">
          <div className="w-full flex flex-row justify-end z-20">
            <div className="hover:bg-[#3f3f3f] h-full w-12 flex justify-center">
              <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
            </div>
            <div className="hover:bg-red-600 h-full w-12 flex justify-center">
              <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
            </div>
          </div>

          <ReactTerminal
                welcomeMessage={
                  <div>
                    <h1 className="flex justify-center">Welcome to Lighthouse</h1>
                    <p>A CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack. Enter 'run' to start the process on the OpenAI iOS App.</p>
                  </div>
                }
          commands={commands}
          themes={{
            "my-custom-theme": {
              themeBGColor: "#161616",
              themeColor: "#C2E812",
              themePromptColor: "#C2E812"
            }
          }}
          showControlBar={false}
          showControlButtons={false}
          theme="my-custom-theme"
          />
        </div>
      </div>
       
      <div className="desktop max-xl:hidden grid grid-cols-12 grid-rows-12 h-full">
        <div className="clickableDiv col-start-1 col-end-13 row-start-1 row-end-13 h-full w-full" onContextMenu={rightClick} onClick={backgroundClickToggle}/>

      {spotifyOpen ? 
        <Draggable bounds="parent" onStop={handleSpotifyDragStop}>
          <div ref={spotifyRef} className="spotifyBody windowItem absolute top-1/2 left-1/2">
            <div className="spotify absolute w-full bg-[#2a2a2a] h-[30px] flex flex-row justify-end items-center bottom-[84px]">

              <div className="w-1/2 flex flex-row ml-5 justify-start">    
                <div className="w-[15px] h-[15px] mt-[1px]"><img src="./spotifyLogo.webp" alt="Spotify logo" /></div>
                <div className="ml-[15px] font-windows text-xs">Spotify</div>
              </div>
              
              <div className="w-1/2 flex flex-row justify-end">
                <div className="hover:bg-[#3f3f3f] spotifyMinimize h-full w-12 flex justify-center cursor-pointer" onClick={() => setSpotifyMinimized(true)}>
                  <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
                </div>
                <div className="hover:bg-red-600 spotifyClose h-full w-12 flex justify-center cursor-pointer" onClick={spotifyCloseClick}>
                  <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
                </div>
              </div>
            </div>
            <AudioPlayer
                showSkipControls={true}
                showJumpControls={false}
                src={tracks}
              /> 
          </div>
        </Draggable>
      : <></>}


     {doomOpen ?  
      <Draggable bounds="parent" onStop={handleDoomDragStop}>
      <div ref={doomRef} className="doom max-[1440px]:top-[5%] max-[1440px]:left-0 windowItem w-[1290px] h-[969px] bg-[#161616] top-[10%] left-[10%] z-10 absolute">
        <div className="w-full flex flex-row justify-end z-20">
          <div className="hover:bg-[#3f3f3f] doomMinimize h-full w-12 flex justify-center cursor-pointer" onClick={() => setDoomMinimized(true)}>
            <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
          </div>
          <div className="hover:bg-red-600 doomClose h-full w-12 flex justify-center cursor-pointer" onClick={doomCloseClick}>
            <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
          </div>
        </div>
        <iframe
          className='h-full w-full'
          src="http://zagorouiko.com/doom"
          />
        </div>
      </Draggable> 
      : <></>}

    {figmaOpen ?  
      <Draggable bounds="parent" onStop={handleFigmaDragStop}>
      <div ref={figmaRef} className="figma max-[1440px]:top-[5%] max-[1440px]:left-0 windowItem w-[1200px] h-[830px] bg-[#161616] z-10 top-[10%] left-[10%] absolute">
        <div className="w-full flex flex-row justify-end z-20">
          <div className="hover:bg-[#3f3f3f] figmaMinimize h-full w-12 flex justify-center cursor-pointer" onClick={() => setFigmaMinimized(true)}>
            <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
          </div>
          <div className="hover:bg-red-600 figmaClose h-full w-12 flex justify-center cursor-pointer" onClick={figmaCloseClick}>
            <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
          </div>
        </div>
        <iframe width="1200" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FW7TGOk01HLaHFYI8PMthkx%2FPortfolio-Site%3Fnode-id%3D0-1%26t%3DhuSShhSaG43FlJnx-1" allowfullscreen />
        </div>
      </Draggable> 
      : <></>} 


      {terminalOpen ? 
        <Draggable 
        onStop={handleTerminalDragStop}
        bounds="parent"
        >
          <div ref={terminalRef} className="terminal windowItem col-start-2 col-end-7 row-start-2 row-end-10 bg-[#161616]">

          <div className="w-full flex flex-row justify-end z-20">
            <div className="hover:bg-[#3f3f3f] terminalMinimize h-full w-12 flex justify-center cursor-pointer" onClick={() => setTerminalMinimized(true)}>
              <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
            </div>
            <div className="hover:bg-red-600 terminalClose h-full w-12 flex justify-center cursor-pointer" onClick={terminalCloseClick}>
              <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
            </div>
          </div>

          <ReactTerminal
          commands={commands}
          themes={{
            "my-custom-theme": {
              themeBGColor: "#161616",
              themeColor: "#C2E812",
              themePromptColor: "#C2E812"
            }
          }}
          showControlBar={false}
          showControlButtons={false}
          welcomeMessage={
            <div>
              <h1 className="flex justify-center">Welcome to Lighthouse</h1>
              <p>A CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack. Enter 'run' to start the process on the OpenAI iOS App.</p>
            </div>
          }
          theme="my-custom-theme"
          />
          </div>
        </Draggable>
       : <></>}

      {calculatorOpen ? 
        <Draggable bounds="parent" onStop={handleCalculatorDragStop} >
        <div ref={calculatorRef} className="calculator windowItem absolute w-[320px] h-[500px] bg-[#2a2a2a] border-solid border-[.5px] border-[#333333] px-[1px] pb-[1px] left-1/2 top-1/2">
          <div className="absolute w-full bg-[#2a2a2a] h-[35px] flex flex-row justify-end items-center">

            <div className="w-1/2 flex flex-row ml-5 justify-start">    
              <div className="w-[15px] h-[15px] mt-[1px]"><img className="" src="./WindowsCalculator.webp" alt="Windows Calculator Logo" /></div>
              <div className="ml-[15px] font-windows text-xs">Calculator</div>
            </div>
            
            <div className="w-1/2 flex flex-row justify-end pb-[7px] pl-[1px]">
              <div className="hover:bg-[#3f3f3f] calculatorMinimize h-full w-12 flex justify-center cursor-pointer" onClick={() => setCalculatorMinimized(true)}>
                <Icon color="#fff" width="20" height="30" icon="fluent:minimize-20-regular" />
              </div>
              <div className="hover:bg-red-600 calculatorClose h-full w-12 flex justify-center cursor-pointer" onClick={calculatorCloseClick}>
                <Icon color="#fff" width="25" height="30" icon="iconamoon:close-thin" />
              </div>
            </div>

          </div>
          <div className="relative h-[425px] w-full top-[71px] bg-[#2a2a2a] z-30">
          <Calculator/>
          </div>
        </div>
        </Draggable>
      : <></>}
      

      <div className="rightClickMenu absolute border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: menuVisible ? "block" : "none",
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex justify-center items-center"><img width="150px" length="100px" src="underconstruction.gif"/></div>
              <div className="hover:bg-[#3f3f3f] mt-2 w-full pl-5">View</div>
              <div className="hover:bg-[#3f3f3f] w-full pl-5">Sort by</div>
              <div className="hover:bg-[#3f3f3f] border-b-[.5px] border-[#333333] w-full pb-1 pl-5">Refresh</div>
              <div className="hover:bg-[#3f3f3f] w-full mt-1 pl-5">Paste</div>
              <div className="hover:bg-[#3f3f3f] w-full pl-5">New</div>
              <div className="hover:bg-[#3f3f3f] w-full pl-5">Display Settings</div>
              <div className="hover:bg-[#3f3f3f] mb-2 w-full pl-5">Personalize</div>
          </div> 
        </div>

      <div className="rightClickFigmaTaskMenu z-10 absolute pb-[10px] border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: figmaTaskMenuVisible ? "block" : "none",
            left: `${figmaTaskMenuPosition.x - 118}px`,
            bottom: '39px'
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex flex-row hover:bg-[#3f3f3f] mt-2 w-full pl-[18px]" onClick={handleFigmaTaskOpenClick}>
                <img className="mr-[15px] pt-[5px] pb-[3px]" height="15px" width="10px" src="./figmalogo.webp" alt="Figma Logo" />
                <div className="" >Figma</div>
              </div>
              <div className="hover:bg-[#3f3f3f] w-full pl-[10px] flex flex-row" onClick={figmaCloseClick}>
                <Icon className="mr-[7px]" color="#fff" width="25" height="25" icon="iconamoon:close-thin" />
                <div className="" >Close window</div>
              </div>
          </div> 
        </div>

        <div className="rightClickTerminalTaskMenu z-10 absolute pb-[10px] border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: terminalTaskMenuVisible ? "block" : "none",
            left: `${terminalTaskMenuPosition.x - 118}px`,
            bottom: '39px'
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex flex-row hover:bg-[#3f3f3f] mt-2 w-full pl-[15px]" onClick={handleTerminalTaskOpenClick}>
                <img className="mr-[12px] pt-[5px] pb-[3px]" height="15px" width="16px" src="./terminalIcon.webp" alt="Terminal icon" />
                <div className="" >Terminal</div>
              </div>
              <div className="hover:bg-[#3f3f3f] w-full pl-[10px] flex flex-row" onClick={terminalCloseClick}>
                <Icon className="mr-[7px]" color="#fff" width="25" height="25" icon="iconamoon:close-thin" />
                <div className="" >Close window</div>
              </div>
          </div> 
        </div>

        <div className="rightClickCalculatorTaskMenu z-10 absolute pb-[10px] border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: calculatorTaskMenuVisible ? "block" : "none",
            left: `${calculatorTaskMenuPosition.x - 118}px`,
            bottom: '39px'
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex flex-row hover:bg-[#3f3f3f] mt-2 w-full pl-[15px]" onClick={handleCalculatorTaskOpenClick}>
                <img className="mr-[12px] pt-[5px] pb-[3px]" height="15px" width="16px" src="./WindowsCalculator.webp" alt="Calculator icon" />
                <div className="" >Calculator</div>
              </div>
              <div className="hover:bg-[#3f3f3f] w-full pl-[10px] flex flex-row" onClick={calculatorCloseClick}>
                <Icon className="mr-[7px]" color="#fff" width="25" height="25" icon="iconamoon:close-thin" />
                <div className="" >Close window</div>
              </div>
          </div> 
        </div>

        <div className="rightClickDoomTaskMenu z-10 absolute pb-[10px] border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: doomTaskMenuVisible ? "block" : "none",
            left: `${doomTaskMenuPosition.x - 118}px`,
            bottom: '39px'
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex flex-row hover:bg-[#3f3f3f] mt-2 w-full pl-[10px]" onClick={handleDoomTaskOpenClick}>
                <img className="mr-[8px] pt-[5px] pb-[3px]" height="16px" width="25px" src="./doom.webp" alt="Doom Logo" />
                <div className="" >Doom</div>
              </div>
              <div className="hover:bg-[#3f3f3f] w-full pl-[10px] flex flex-row" onClick={doomCloseClick}>
                <Icon className="mr-[7px]" color="#fff" width="25" height="25" icon="iconamoon:close-thin" />
                <div className="" >Close window</div>
              </div>
          </div> 
        </div>

        <div className="rightClickSpotifyTaskMenu z-10 absolute pb-[10px] border-[.5px] border-[#333333] bg-[#1a1a1a] font-windows w-56 text-[.75rem] leading-[1.5rem]" 
          style={{
            display: spotifyTaskMenuVisible ? "block" : "none",
            left: `${spotifyTaskMenuPosition.x - 118}px`,
            bottom: '39px'
          
          }}> 
            <div className="flex flex-col"> 
              <div className="flex flex-row hover:bg-[#3f3f3f] mt-2 w-full pl-[15px]" onClick={handleSpotifyTaskOpenClick}>
                <img className="mr-[12px] pt-[5px] pb-[3px]" height="15px" width="16px" src="./spotifyLogo.webp" alt="Spotify Logo" />
                <div className="" >Spotify</div>
              </div>
              <div className="hover:bg-[#3f3f3f] w-full pl-[10px] flex flex-row" onClick={spotifyCloseClick}>
                <Icon className="mr-[7px]" color="#fff" width="25" height="25" icon="iconamoon:close-thin" />
                <div className="" >Close Window</div>
              </div>
          </div> 
        </div>

      <div className="calendar right-0 bottom-[140px] absolute flex flex-col font-windows">
        <div className="h-28 bg-[#212121] pt-[16px] pl-[22px] pb-[20px] border-solid border-[.5px] border-[#333333]">
          <div className="w-full text-5xl font-thin">{timeWithSeconds}</div>
          <div className="w-full text-[#9fc1db] text-sm mt-2">{formattedDate}</div>
          {/* <div className="text-xl text-[#909090] ">{amOrPm}</div> */}
        </div>
        <Calendar className="font-windows" value={date} calendarType="gregory"  next2Label={null} prev2Label={null} showFixedNumberOfWeeks={true}/>
      </div>

      <div className="startMenu absolute opacity-0 left-0 bottom-[40px] z-10 w-[660px] h-0 bg-[#212121] font-windows text-xs" onClick={backgroundClickToggle}>
        <div className="flex flex-row h-full">

          <div className="absolute startIcons h-full w-[45px] z-30 text-[15px]">

            <div className="h-1/2 flex flex-col items-center justify-start">
              <div className="startItem relative w-full h-[3rem] hover:bg-[#262626] flex items-center py-4"> 
                <Icon className="ml-[10px]" color="#e8e8e8" width="30" height="22" icon="mdi-light:menu" />
                <div className="opacity-0 startItemText ml-5 font-bold">PROJECT 02</div>
              </div>
            </div>

            <div className=" h-1/2 flex flex-col items-center bottom-4 justify-end">
              <div className="startItem relative w-full h-12 hover:bg-[#3f3f3f] flex items-center ">
                <img  className="z-20 w-[20px] h-[20px] rounded-full ml-[14px]" src="/profile.webp" alt="Profile picture" />
                <div className="opacity-0 startItemText ml-5">Leonidas</div>
              </div>

            <div className="startItem relative w-full h-12 hover:bg-[#3f3f3f] flex items-center cursor-pointer">
              <a href="https://github.com/Zagorouiko/PlusQA-Lighthouse" target="_blank" rel="noopener noreferrer" aria-label="Navigates Lighthouse project github">           
                <Icon className="z-20 ml-[14px]" color="#e8e8e8" width="20" height="20" icon="ri:github-fill"/>
                <div className="opacity-0 startItemText absolute ml-[54px] top-4">Github</div>  
              </a>           
            </div>
            

              <div className="startItem relative w-full h-12 hover:bg-[#3f3f3f] flex flex-row items-center cursor-pointer" onClick={handlePowerOff}>          
                <Icon className="z-20 ml-[14px]" icon="ion:power" width="18" height="20" color="#e8e8e8"/>
                <div className="opacity-0 startItemText absolute ml-[54px]">Power</div>
              </div>
            </div>
          </div>

          <div className="h-full w-[250px] mr-5 ml-[45px]">
          <div className="h-full flex flex-col mt-[16px] pl-5">

          <div className="startItem mb-[14px] ml-[12px]">Built with</div>
          <Spotlight>
            <SpotlightCard>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" aria-label="Navigates React website">
                <div className="startItem flex w-full h-[35px] items-center my-[1px]">
                  <svg className="mr-2" width="45" height="45" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M415 200.028C415 182.141 392.601 165.191 358.259 154.679C366.184 119.677 362.662 91.8289 347.142 82.9139C343.565 80.8219 339.382 79.8319 334.815 79.8319V92.1049C337.346 92.1049 339.382 92.5999 341.088 93.5349C348.573 97.8279 351.82 114.173 349.289 135.197C348.683 140.37 347.693 145.818 346.482 151.377C335.695 148.735 323.918 146.699 311.535 145.378C304.105 135.197 296.4 125.951 288.64 117.861C306.582 101.185 323.422 92.0499 334.87 92.0499V79.7769C319.735 79.7769 299.923 90.5639 279.89 109.275C259.857 90.6739 240.045 79.9969 224.91 79.9969V92.2699C236.302 92.2699 253.198 101.35 271.139 117.916C263.435 126.006 255.73 135.197 248.41 145.378C235.972 146.699 224.195 148.735 213.408 151.432C212.142 145.928 211.207 140.59 210.546 135.472C207.96 114.449 211.152 98.1029 218.581 93.7559C220.232 92.7649 222.379 92.3249 224.91 92.3249V80.0519C220.287 80.0519 216.105 81.0429 212.472 83.1339C197.008 92.0499 193.541 119.842 201.521 154.734C167.289 165.301 145 182.196 145 200.028C145 217.914 167.399 234.864 201.741 245.376C193.816 280.378 197.338 308.226 212.858 317.141C216.435 319.233 220.618 320.223 225.241 320.223C240.375 320.223 260.188 309.436 280.22 290.725C300.253 309.326 320.065 320.003 335.2 320.003C339.823 320.003 344.005 319.012 347.638 316.921C363.102 308.006 366.57 280.213 358.589 245.321C392.711 234.809 415 217.859 415 200.028ZM343.345 163.319C341.309 170.419 338.777 177.738 335.915 185.058C333.659 180.655 331.292 176.253 328.706 171.85C326.174 167.447 323.477 163.154 320.781 158.972C328.596 160.127 336.135 161.558 343.345 163.319ZM318.139 221.931C313.846 229.361 309.444 236.405 304.876 242.955C296.675 243.67 288.365 244.055 280 244.055C271.69 244.055 263.38 243.67 255.234 243.01C250.667 236.46 246.209 229.471 241.916 222.096C237.733 214.887 233.936 207.567 230.469 200.193C233.881 192.818 237.733 185.443 241.861 178.234C246.154 170.804 250.556 163.76 255.124 157.211C263.325 156.495 271.635 156.11 280 156.11C288.31 156.11 296.62 156.495 304.766 157.156C309.333 163.705 313.791 170.694 318.084 178.069C322.267 185.278 326.064 192.598 329.531 199.972C326.064 207.347 322.267 214.722 318.139 221.931ZM335.915 214.777C338.887 222.151 341.419 229.526 343.51 236.681C336.3 238.442 328.706 239.928 320.836 241.083C323.532 236.846 326.229 232.498 328.761 228.04C331.292 223.637 333.659 219.18 335.915 214.777ZM280.11 273.499C274.992 268.215 269.874 262.327 264.81 255.888C269.764 256.108 274.827 256.273 279.945 256.273C285.118 256.273 290.236 256.163 295.245 255.888C290.291 262.327 285.173 268.215 280.11 273.499ZM239.164 241.083C231.349 239.928 223.81 238.497 216.6 236.736C218.636 229.636 221.168 222.317 224.03 214.997C226.286 219.4 228.653 223.802 231.239 228.205C233.826 232.608 236.468 236.901 239.164 241.083ZM279.835 126.556C284.953 131.84 290.071 137.728 295.135 144.167C290.181 143.947 285.118 143.782 280 143.782C274.827 143.782 269.709 143.892 264.7 144.167C269.653 137.728 274.772 131.84 279.835 126.556ZM239.109 158.972C236.413 163.209 233.716 167.557 231.184 172.015C228.653 176.418 226.286 180.82 224.03 185.223C221.058 177.849 218.526 170.474 216.435 163.319C223.645 161.613 231.239 160.127 239.109 158.972ZM189.303 227.875C169.821 219.565 157.218 208.668 157.218 200.028C157.218 191.387 169.821 180.435 189.303 172.18C194.036 170.144 199.209 168.328 204.547 166.621C207.684 177.408 211.812 188.635 216.93 200.138C211.867 211.585 207.795 222.757 204.713 233.489C199.264 231.783 194.091 229.911 189.303 227.875ZM218.912 306.52C211.427 302.227 208.18 285.882 210.711 264.858C211.317 259.685 212.307 254.237 213.518 248.678C224.305 251.32 236.082 253.356 248.465 254.677C255.895 264.858 263.6 274.104 271.36 282.194C253.418 298.87 236.578 308.006 225.13 308.006C222.654 307.95 220.563 307.455 218.912 306.52ZM349.454 264.583C352.04 285.606 348.848 301.952 341.419 306.299C339.768 307.29 337.621 307.73 335.09 307.73C323.698 307.73 306.802 298.65 288.861 282.084C296.565 273.994 304.27 264.803 311.59 254.622C324.028 253.301 335.805 251.265 346.592 248.568C347.858 254.127 348.848 259.465 349.454 264.583ZM370.642 227.875C365.909 229.911 360.736 231.727 355.397 233.434C352.26 222.647 348.133 211.42 343.015 199.917C348.078 188.47 352.15 177.298 355.232 166.566C360.681 168.273 365.854 170.144 370.697 172.18C390.179 180.49 402.782 191.387 402.782 200.028C402.727 208.668 390.124 219.62 370.642 227.875Z" fill="#61DAFB"/>
                    <path d="M279.945 225.179C293.835 225.179 305.096 213.918 305.096 200.028C305.096 186.137 293.835 174.877 279.945 174.877C266.054 174.877 254.794 186.137 254.794 200.028C254.794 213.918 266.054 225.179 279.945 225.179Z" fill="#61DAFB"/>
                  </svg>
                  <span>React</span>
                </div>
              </a>
            </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <a href="https://pptr.dev/" target="_blank" rel="noopener noreferrer" aria-label="Navigates to Puppeteer website">
              <div className="startItem flex w-full h-[35px] items-center my-1">
                <img className="mr-4 ml-2 " width={'25px'} height={'25px'} src="/puppeteerLogo.webp" alt="Puppeteer Logo"/><span>Puppeteer</span>
              </div>
            </a>
            </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noopener noreferrer" aria-label="Navigates to OpenAI website">
              <div className="startItem flex w-full h-[35px] items-center my-[1px]">
                <Icon className='mr-4 ml-2' color="#fff" width="25" height="25" icon="ri:openai-fill" />
                <span>OpenAI-API</span>
              </div>
            </a>
            </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" aria-label="Navigates to Tailwind website">
              <div className="startItem flex w-full h-[35px] items-center my-[1px]">
              <img className='mr-4 ml-2' src="/tailwindlogo.webp" width="25" height="25" alt="Tailwind Logo" />
                <span>Tailwind</span>
              </div>
            </a>
            </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" aria-label="Navigates to Visual Studio code website">
              <div className="startItem flex w-full h-[35px] items-center my-[1px]">
              <img className='mr-4 ml-2' src="/vsCode.webp" width="25" height="25" alt="VS Code Logo" />
                <span>Visual Studio Code</span>
              </div>
            </a>
            </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" aria-label="Navigates to Javascript website">
              <div className="startItem flex w-full h-[35px] items-center my-[1px]">
              <img className='mr-4 ml-2' src="/JSlogo.webp" width="25" height="25" alt="Javascript Logo" />
                <span>NodeJS</span>
              </div>
            </a>
            </SpotlightCard>
          </Spotlight>

            </div>
          </div>

          <div className="h-[300px] w-[335px] mt-[50px] ml-[45px]">

          <div className=" w-full grid grid-flow-dense grid-cols-3 grid-rows-2 gap-[.2rem] pr-2">


          <div className="relative h-full bg-slate-800 before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400  before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#bdbdbd]  after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
          <Spotlight>
            <SpotlightCard>
            <div className="square doomSpotlight bg-[#3f3f3f] h-[100px] cursor-pointer" onClick={doomInitialize}>
              <div className="absolute bottom-[0.25rem] left-[0.5rem]">Doom</div>
              <div className="flex justify-center items-center"><img className="mt-6 max-w-[65%]" src="./doom.webp" alt="Doom Logo" /></div>     
            </div>
            </SpotlightCard>
          </Spotlight>
          </div>

          <Spotlight>
            <SpotlightCard>
            {/* <a href="https://www.figma.com/file/W7TGOk01HLaHFYI8PMthkx/Portfolio-Site?type=design&node-id=0%3A1&mode=design&t=Xx4HS1cnDhj9JbRQ-1" target="_blank" rel="noopener noreferrer" aria-label="Navigates to Figma design file"> */}
              <div className="square figmaSpotlight bg-[#3f3f3f] h-[100px]" onClick={figmaInitialize}>
                <div className="absolute bottom-[0.25rem] left-[0.5rem]">Figma</div>
                <div className="flex justify-center items-center"><img className="max-w-[25%] mt-6" src="./figmalogo.webp" alt="Figma Logo" /></div>
              </div>
            {/* </a> */}
           </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
              <div className="square calculatorSpotlight bg-[#3f3f3f] h-[100px] cursor-pointer" onClick={calculatorInitialize}>
                <div className="absolute bottom-[0.25rem] left-[0.5rem]">Calculator</div>
                <div className="flex justify-center items-center"><img className="max-w-[35%] mt-6" src="./WindowsCalculator.webp" alt="Windows Calculator Logo" /></div>
              </div>
           </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
              <div className="square terminalSpotlight bg-[#3f3f3f] h-[100px] cursor-pointer" onClick={terminalInitialize}>
                <div className="absolute bottom-[0.25rem] left-[0.5rem]">Terminal</div>
                <div className="flex justify-center items-center"><img className="max-w-[35%] mt-6" src="./terminalIcon.webp" alt="terminal icon" /></div>
              </div>
           </SpotlightCard>
          </Spotlight>

          <Spotlight>
            <SpotlightCard>
            <div className="square spotifySpotlight bg-[#3f3f3f] h-[100px] cursor-pointer" onClick={spotifyInitialize}>
                <div className="absolute bottom-[0.25rem] left-[0.5rem]">Spotify</div>
                <div className="flex justify-center items-center"><img className="max-w-[35%] mt-6" src="./spotifyLogo.webp" alt="Spotify Logo" /></div>
              </div>
           </SpotlightCard>
          </Spotlight>

          {/* <Spotlight>
            <SpotlightCard>
          <div className="square bg-[#3f3f3f] h-[100px]">
          </div>
            </SpotlightCard>
          </Spotlight> */}

          </div>
          </div>
        </div>
      </div>

      <div className={`notificationPanel absolute right-0 bottom-[40px] h-full w-0 bg-[#212121] font-windows text-sm z-30 ${notificationPanelOpen ? 'border-solid border-l-[.5px] border-[#333333]' : ''}`}  >
        {notificationPanelOpen ?         
        <>
        <div className="notificationItem absolute flex justify-center top-[110px]  w-full text-lg">Lighthouse</div>
        <div className="notificationItem absolute w-[360px] h-[300px] mx-5 p-3 top-[150px] bg-[#2a2a2a] font-semibold text-[#979797]">
          CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack.
        </div></> : <></>}

      </div>

      <div className="iconTray absolute opacity-0 right-[85px] bottom-[39px] w-[118px] bg-[#212121] border-solid border-[.5px] border-[#333333] grid grid-cols-3 grid-rows-3 z-10 ">
        <div className="OpenAILogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <Icon color="#fff" width="19" height="19" icon="ri:openai-fill" />
          <span style={{bottom: '110px', left: '35px'}} className="tooltipText font-windows">OpenAI</span>
        </div>
        <div className="hover:bg-[#3f3f3f] flex justify-center items-center text-[#C2E812] text-[18px]">02</div>
        <div className="ReactLogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <svg width="35" height="35" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M415 200.028C415 182.141 392.601 165.191 358.259 154.679C366.184 119.677 362.662 91.8289 347.142 82.9139C343.565 80.8219 339.382 79.8319 334.815 79.8319V92.1049C337.346 92.1049 339.382 92.5999 341.088 93.5349C348.573 97.8279 351.82 114.173 349.289 135.197C348.683 140.37 347.693 145.818 346.482 151.377C335.695 148.735 323.918 146.699 311.535 145.378C304.105 135.197 296.4 125.951 288.64 117.861C306.582 101.185 323.422 92.0499 334.87 92.0499V79.7769C319.735 79.7769 299.923 90.5639 279.89 109.275C259.857 90.6739 240.045 79.9969 224.91 79.9969V92.2699C236.302 92.2699 253.198 101.35 271.139 117.916C263.435 126.006 255.73 135.197 248.41 145.378C235.972 146.699 224.195 148.735 213.408 151.432C212.142 145.928 211.207 140.59 210.546 135.472C207.96 114.449 211.152 98.1029 218.581 93.7559C220.232 92.7649 222.379 92.3249 224.91 92.3249V80.0519C220.287 80.0519 216.105 81.0429 212.472 83.1339C197.008 92.0499 193.541 119.842 201.521 154.734C167.289 165.301 145 182.196 145 200.028C145 217.914 167.399 234.864 201.741 245.376C193.816 280.378 197.338 308.226 212.858 317.141C216.435 319.233 220.618 320.223 225.241 320.223C240.375 320.223 260.188 309.436 280.22 290.725C300.253 309.326 320.065 320.003 335.2 320.003C339.823 320.003 344.005 319.012 347.638 316.921C363.102 308.006 366.57 280.213 358.589 245.321C392.711 234.809 415 217.859 415 200.028ZM343.345 163.319C341.309 170.419 338.777 177.738 335.915 185.058C333.659 180.655 331.292 176.253 328.706 171.85C326.174 167.447 323.477 163.154 320.781 158.972C328.596 160.127 336.135 161.558 343.345 163.319ZM318.139 221.931C313.846 229.361 309.444 236.405 304.876 242.955C296.675 243.67 288.365 244.055 280 244.055C271.69 244.055 263.38 243.67 255.234 243.01C250.667 236.46 246.209 229.471 241.916 222.096C237.733 214.887 233.936 207.567 230.469 200.193C233.881 192.818 237.733 185.443 241.861 178.234C246.154 170.804 250.556 163.76 255.124 157.211C263.325 156.495 271.635 156.11 280 156.11C288.31 156.11 296.62 156.495 304.766 157.156C309.333 163.705 313.791 170.694 318.084 178.069C322.267 185.278 326.064 192.598 329.531 199.972C326.064 207.347 322.267 214.722 318.139 221.931ZM335.915 214.777C338.887 222.151 341.419 229.526 343.51 236.681C336.3 238.442 328.706 239.928 320.836 241.083C323.532 236.846 326.229 232.498 328.761 228.04C331.292 223.637 333.659 219.18 335.915 214.777ZM280.11 273.499C274.992 268.215 269.874 262.327 264.81 255.888C269.764 256.108 274.827 256.273 279.945 256.273C285.118 256.273 290.236 256.163 295.245 255.888C290.291 262.327 285.173 268.215 280.11 273.499ZM239.164 241.083C231.349 239.928 223.81 238.497 216.6 236.736C218.636 229.636 221.168 222.317 224.03 214.997C226.286 219.4 228.653 223.802 231.239 228.205C233.826 232.608 236.468 236.901 239.164 241.083ZM279.835 126.556C284.953 131.84 290.071 137.728 295.135 144.167C290.181 143.947 285.118 143.782 280 143.782C274.827 143.782 269.709 143.892 264.7 144.167C269.653 137.728 274.772 131.84 279.835 126.556ZM239.109 158.972C236.413 163.209 233.716 167.557 231.184 172.015C228.653 176.418 226.286 180.82 224.03 185.223C221.058 177.849 218.526 170.474 216.435 163.319C223.645 161.613 231.239 160.127 239.109 158.972ZM189.303 227.875C169.821 219.565 157.218 208.668 157.218 200.028C157.218 191.387 169.821 180.435 189.303 172.18C194.036 170.144 199.209 168.328 204.547 166.621C207.684 177.408 211.812 188.635 216.93 200.138C211.867 211.585 207.795 222.757 204.713 233.489C199.264 231.783 194.091 229.911 189.303 227.875ZM218.912 306.52C211.427 302.227 208.18 285.882 210.711 264.858C211.317 259.685 212.307 254.237 213.518 248.678C224.305 251.32 236.082 253.356 248.465 254.677C255.895 264.858 263.6 274.104 271.36 282.194C253.418 298.87 236.578 308.006 225.13 308.006C222.654 307.95 220.563 307.455 218.912 306.52ZM349.454 264.583C352.04 285.606 348.848 301.952 341.419 306.299C339.768 307.29 337.621 307.73 335.09 307.73C323.698 307.73 306.802 298.65 288.861 282.084C296.565 273.994 304.27 264.803 311.59 254.622C324.028 253.301 335.805 251.265 346.592 248.568C347.858 254.127 348.848 259.465 349.454 264.583ZM370.642 227.875C365.909 229.911 360.736 231.727 355.397 233.434C352.26 222.647 348.133 211.42 343.015 199.917C348.078 188.47 352.15 177.298 355.232 166.566C360.681 168.273 365.854 170.144 370.697 172.18C390.179 180.49 402.782 191.387 402.782 200.028C402.727 208.668 390.124 219.62 370.642 227.875Z" fill="#61DAFB"/>
            <path d="M279.945 225.179C293.835 225.179 305.096 213.918 305.096 200.028C305.096 186.137 293.835 174.877 279.945 174.877C266.054 174.877 254.794 186.137 254.794 200.028C254.794 213.918 266.054 225.179 279.945 225.179Z" fill="#61DAFB"/>
          </svg>
          <span style={{bottom: '110px', left: '110px'}} className="tooltipText opacity-100 font-windows">React</span>
        </div>        
        <div className="NodeJSLogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <img src="/JSlogo.webp" width="18" height="18" alt="Javascript Logo" />
          <span style={{bottom: '72px', left: '35px'}} className="tooltipText font-windows">NodeJS</span>
        </div>
        <div className="VSCodeLogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <img src="/vsCode.webp" width="18" height="18" alt="VS Code Logo" />
          <span style={{bottom: '72px', left: '85px'}} className="tooltipText font-windows">Visual Studio Code</span>
        </div>
        <div className="NPMLogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <img src="/npmlogo.webp" width="21" height="21" alt="NPM Logo" />
          <span style={{bottom: '75px', left: '110px'}} className="tooltipText font-windows">NPM</span>
        </div>
        <div className="TailwindLogo hover:bg-[#3f3f3f] flex justify-center items-center">
          <img src="/tailwindlogo.webp" width="21" height="21" alt="Tailwind Logo" />
          <span style={{bottom: '35px', left: '35px'}} className="tooltipText font-windows">Tailwind</span>
        </div>
      </div>

    {searchOpen ?
      <div className="search absolute h-0 w-[700px] bg-[#212121] bottom-[40px] left-[45px] border-solid border-[.5px] border-[#333333]">
          <div className="absolute w-full h-14 border-solid border-b-[.5px] border-[#16161647]">
            <div className="absolute w-full h-full flex flex-row justify-end items-center">

              <div className="w-1/2 flex flex-row ml-5 justify-start">    
                <div className="flex justify-center items-center font-windows text-sm border-solid border-b-[3px] w-[40px] h-[50px] border-[#5c96e1]">GPT</div>
              </div>

              <div className="w-1/2 flex flex-row justify-end">
                <div className="h-full w-12 flex justify-center">
                  <Icon className="cursor-pointer" color="#fff" width="25" height="30" icon="iconamoon:close-thin" onClick={handleSearchClick}/>
                </div>
              </div>

            </div>
          </div>

          <div className="h-[442px] w-full grid grid-rows-2 grid-flow-col gap-4 mt-14 p-4">
            <div className="row-span-2 rounded-md bg-[#2a2a2a] overflow-auto">            
              {response ? <div className="absolute m-5 w-[285px] h-[370px]">{response}</div> : <div className="absolute p-5">Ask about the project...</div>}
            </div>
            <div className="col-span-1">
            <video className="absolute object-cover h-[197px]" src="/Flowervideo.webm" width="325px" type="video/mp4" autoPlay loop muted />
            </div>
            <div className="row-span-1 ">
             <video className="absolute object-cover h-[197px]" src="/skull_loader.webm" width="325px" type="video/mp4" autoPlay loop muted />
            </div>
          </div>
      </div>
      : <></>}

        <div className="taskbar col-start-1 col-end-13 row-start-13 row-end-13 font-windows z-20">
          <div className="relative bg-[#1a1a1a] w-full h-10 bottom-0">

          <div className="windowIconBackground absolute h-full w-[48px]" onClick={handleStartMenuClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {startMenuOpen ? <></> : <span className="tooltipText">Start</span>}  
              <Icon 
              className="windowIcon absolute left-4 top-[11px] cursor-pointer" 
              width="17" height="17" 
              color={isHovered ? "#0078d7" : "#e8e8e8"} 
              icon="bi:windows" 
              />
          </div>

          <Icon className="searchIcon absolute ml-[56px] z-10 bottom-[7px]" width="25" height="25" color="#fff" icon="material-symbols-light:search" />
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="searchBoxmessage"/>
            <input
                id="searchBoxmessage"
                name="message"
                required
                placeholder="Type here to search"              
                className="searchText searchBox input absolute pl-[42px] text-[15px] left-[45px] h-full w-[288px] bg-[#2a2a2a]"
                autoComplete="off"
                onClick={handleSearchClick}
            />
          </form>

          <div className="calculatorTaskIcon absolute h-full w-[48px] flex justify-center items-center hover:bg-[#3f3f3f] border-solid border-b-[1px] border-[#5c96e1]" onContextMenu={rightClickCalculatorTaskIcon} onClick={() => setCalculatorMinimized(false)} >
          <div class="border-inner"></div><div className="w-[25px] h-[25px]"><img className="" src="./WindowsCalculator.webp" alt="Windows Calculator icon" /></div>
          </div>

          <div className="terminalTaskIcon absolute h-full w-[48px] flex justify-center items-center hover:bg-[#3f3f3f] border-solid border-b-[1px] border-[#5c96e1]" onContextMenu={rightClickTerminalTaskIcon} onClick={() => setTerminalMinimized(false)}>
            <div className="w-[25px] h-[25px]">
              <img className="w-[25px] h-[25px]" src="./terminalIcon.webp" alt="terminal icon" />
              </div>
          </div>

          <div className="spotifyTaskIcon absolute h-full w-[48px] flex justify-center items-center hover:bg-[#3f3f3f] border-solid border-b-[1px] border-[#5c96e1]" onContextMenu={rightClickSpotifyTaskIcon} onClick={() => setSpotifyMinimized(false)}>
            <div className="w-[25px] h-[25px]"><img className="" src="./spotifyLogo.webp" alt="Spotify Logo" /></div>
          </div>

          <div className="doomTaskIcon absolute h-full w-[48px] flex justify-center items-center hover:bg-[#3f3f3f] border-solid border-b-[1px] border-[#5c96e1]" onContextMenu={rightClickDoomTaskIcon} onClick={() => setDoomMinimized(false)}>
            <div className="w-[40px] h-[30px]"><img className="mt-[5px]" width="40px" height="25px" src="./doom.webp" alt="DOOM Logo" /></div>
          </div>

          <div className="figmaTaskIcon absolute h-full w-[48px] flex justify-center items-center hover:bg-[#3f3f3f] border-solid border-b-[1px] border-[#5c96e1]" onContextMenu={rightClickFigmaTaskIcon} onClick={() => setFigmaMinimized(false)}>
            <div className="w-[20px] h-[25px]"><img className="w-[20px] h-[25px]"  src="./figmalogo.webp" alt="Figma Logo" /></div>
          </div>
          
          <div className="caretBackground absolute h-full w-[18px] right-[127px]" onClick={handleTrayClick}>
            {iconTrayOpen ? <></> : <span className="tooltipText">Show hidden icons</span>}  
            <Icon 
            className="absolute top-3 right-[1px]" 
            width="18" height="18" 
            icon="ph:caret-up" />
          </div>

          <div className="timeBackground absolute flex flex-col right-[51px] text-white text-[.8rem] px-2 items-center" onClick={handleCalendarClick}>        
            {calendarOpen ? <></> : <span className="tooltipText">{formattedDate}</span>} 
            <div className="">{timeNoSeconds}</div>
            <div>{dateNow}</div>
          </div>

          <div className="bubbleBackground absolute h-full w-[40px] right-[10px]" onClick={handleNotificationPanelClick}>
            <span className="tooltipTextBubble">1 new notification</span>
            <Icon className="absolute right-[7px] top-[10px]" width="25" height="25" color="#fff" icon="material-symbols-light:chat-bubble-outline-rounded" />
          </div>

          </div>
        </div>


        </div>
        <style>
          {`
            .no-scroll {
              position: fixed;
              width: 100%;
              height: 100%;
           }

            abbr {
              text-decoration: none;
              font-weigt: normal;
            }

            .input.searchBox {
              outline: none;
            }

            input.searchBox:focus {
              background: #fff;
              border-width: 2px;
              border-color: #0078d7;
              caret-color: black;
            } 

            .input.loginBox {
              outline: none;
            }

            input.loginBox:focus {
              border-width: 2px;
              border-color: #0078d7;
              caret-color: white;
              background-color: #232324;
            }


            .searchIcon {
              transform: rotate(90deg);
            }

            #terminalEditor {
              font-size: 14px;
              overflow: hidden;
              font-family: 'Modenine', sans-serif;
              overflow: auto;
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

            .square:hover {
              border: 2px solid #888888;
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
              z-index: 50;
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
              z-index: 50;
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

            .TailwindLogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .ReactLogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .NodeJSLogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .VSCodeLogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .NPMLogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            }

            .OpenAILogo:hover .tooltipText {
              visibility: visible;
              opacity: 1;
            } 

            .startMenu {
              box-shadow: 2px -2px 11px 1px rgba(0,0,0,0.07);
              -webkit-box-shadow: 2px -2px 11px 1px rgba(0,0,0,0.07);
              -moz-box-shadow: 2px -2px 11px 1px rgba(0,0,0,0.07);
            }

            .search {
              box-shadow: 1px 2px 11px 1px rgba(0,0,0,0.15);
              -webkit-box-shadow: 1px 2px 11px 1px rgba(0,0,0,0.15);
              -moz-box-shadow: 1px 2px 11px 1px rgba(0,0,0,0.15);
            }

            .react-calendar__tile .react-calendar__tile--now .react-calendar__tile--active .react-calendar__tile--range .react-calendar__tile--rangeStart .react-calendar__tile--rangeEnd .react-calendar__tile--rangeBothEnds .react-calendar__month-view__days__day {
              border: 2px solid #006edc;
              box-shadow: inset 0 0 0 3px black;
            }
          `}
        </style>
      </>
    )
  }
  
  export default Project02
  
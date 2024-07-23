
function About() {

  return (
    <>
    <div id="about" className="relative">
    <svg className="absolute left-0 top-64 -z-10" width="736" height="255" viewBox="0 0 736 255" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-206 253L47 0H179L-73 252L-206 253Z" fill="#C2E812"/>
      <path d="M-148.48 114L-34.48 0H25L-88.55 113.55L-148.48 114Z" fill="#C2E812"/>
      <path d="M237.25 115.75L353 0H221L171.25 49.75L171 49.5V50L-32 253L101 252L171.99 181.01L172 182.5L244 254.5L375.5 254L237.25 115.75Z" fill="#C2E812"/>
      <path d="M426 254.5L557.5 254L419.25 115.75L535 0H403L353.25 49.75L353 49.5V50L290 114" fill="#C2E812"/>
      <path d="M604 254.5L735.5 254L597.25 115.75L713 0H581L531.25 49.75L531 49.5V50L468 114" fill="#C2E812"/>
    </svg>

    <div className="flex relative justify-between">
      <div class="m-scroll__title">
        <div className="text-[150px] opacity-5 font-semibold -z-10">
          <h1>
           <a>BLOCKCHAIN_</a>
           <a>DESIGNER_</a>
           <a>DEVELOPER_</a>
        </h1>
        <h1>
           <a>BLOCKCHAIN_</a>
           <a>DESIGNER_</a>
           <a>DEVELOPER_</a>
        </h1>
        </div>
      </div>
    </div>

      <div className="absolute float-right mr-24 mt-5 glitch text-6xl top-32 right-0 font-semibold tracking-[.75em] " title="ABOUT">
        ABOUT
      </div>

      </div>

      <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-2 col-end-7 row-start-5 row-end-11 text-[#EAF6FF] text-2xl font-semibold">
            <img src="/tv.png"></img>
            <div className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.</div>
          </div>

        <div className="col-start-8 col-end-12 row-start-5 row-end-11 text-[#EAF6FF] text-2xl font-semibold">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed.  Aliquet sagittis id consectetur purus ut faucibus pulvinar. Proin gravida hendrerit lectus a. Ornare aenean euismod elementum nisi quis eleifend.  In dictum non consectetur a erat nam. Vitae turpis massa sed elementum tempus egestas sed sed</p>
        </div>
      </div>
      <style>
        {`
        
        .m-scroll__title {
          display: flex;
          position: absolute;
          transform: scale(2);
          transition: all 1s ease;
        }
        
        .m-scroll__title > div {
          display: flex;
          animation: scrollText 33s infinite linear;
        }
        
        .m-scroll__title h1 {
          transition: all 2s ease;
        }
      
        
        @keyframes scrollText {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }

        .glow {
          color: #fff;
          text-shadow:
              0 0 7px #fff,
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #0fa,
              0 0 40px #0fa,
              0 0 45px #0fa,
              0 0 50px #0fa,
              0 0 75px #0fa;
        }
        `}
      </style>
      </>
  )
}

export default About

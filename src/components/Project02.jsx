import { Icon } from "@iconify/react"

function Project02() {

    return (
      <>
      <svg className="absolute left-0 top-0" width="45" height="549" viewBox="0 0 45 549" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 341.518L0 396.964L0 0L45 0" fill="#EAF6FF"/>
        <path d="M45 432.322L0 487.768L0 433.125L45 376.072" fill="#EAF6FF"/>
        <path d="M45 493.393L0 548.839L0 518.304L45 461.25" fill="#EAF6FF"/>
        <path d="M27.936 37.704H18.32L14 33.384L14 19.992L18.304 15.688L27.936 15.688L32.24 19.992V33.384L27.936 37.704ZM18.32 27.144L29.872 20.008L16.368 20.008L18.32 21.368L18.32 27.144ZM29.872 33.384L27.936 32.008L27.936 26.248L16.368 33.384H29.872ZM21.008 39.0786L25.312 43.3826V54.8386C25.1093 55.1586 24.8907 55.4733 24.656 55.7826C24.4213 56.092 24.192 56.4013 23.968 56.7106H29.312C29.088 56.4013 28.864 56.0866 28.64 55.7666C28.416 55.4466 28.192 55.1266 27.968 54.8066V41.0146L29.328 39.0786H32.24V56.7106L27.936 61.0306H20.992V45.2866C21.2373 45.0306 21.472 44.7213 21.696 44.3586C21.92 44.0066 22.1387 43.6866 22.352 43.3986H16.96L18.32 45.2866V59.0946L16.944 61.0306H14L14 39.0786H21.008Z" fill="#232528"/>
      </svg>

      <div className="grid grid-cols-12 grid-rows-12 h-full gap-4">
        <div className="col-start-2 col-end-4 row-start-2 row-end-12 text-[#EAF6FF] text-2xl font-semibold">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-8xl text-[#EAF6FF]">LIGHT <br className="mt-10"/> HOUSE  </h1>
          <p className="text-xl mt-10">CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack.</p>
          
          <div className="self-start">
            <div className="mt-10 text-xl">Puppeteer Library</div>
            <div className="text-xl">OpenAI API</div>
            <div className="text-xl">React</div> 
            <div className="text-xl">JS/CSS/HTML</div>
          </div>

          <div className="flex self-start mt-4">
            <Icon className="mr-2" color="#EAF6FF" width="35" height="35" icon="ri:github-fill"/>
          </div>

          
          <svg className="mt-12" width="179" height="20" viewBox="0 0 179 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.37742 0H0V20H7.37742V0Z" fill="white"/>
            <path d="M22.9088 0H15.5314V20H22.9088V0Z" fill="white"/>
            <path d="M38.4402 0H31.0628V20H38.4402V0Z" fill="white"/>
            <path d="M53.9716 0H46.5942V20H53.9716V0Z" fill="#F45900"/>
            <path d="M69.503 0H62.1256V20H69.503V0Z" fill="#F45900"/>
            <path d="M85.0345 0H77.6571V20H85.0345V0Z" fill="#F45900"/>
            <path d="M100.566 0H93.1885V20H100.566V0Z" fill="white"/>
            <path d="M116.097 0H108.72V20H116.097V0Z" fill="white"/>
            <path d="M131.629 0H124.251V20H131.629V0Z" fill="white"/>
            <path d="M147.16 0H139.783V20H147.16V0Z" fill="white"/>
            <path d="M162.691 0H155.314V20H162.691V0Z" fill="white"/>
            <path d="M178.223 0H170.845V20H178.223V0Z" fill="white"/>
          </svg>

          </div>
        </div>

        <div className="col-start-5 col-end-9 row-start-1 row-end-7 bg-[#D9D9D9] opacity-10 mt-4">

        </div>

        <div className="col-start-5 col-end-9 row-start-7 row-end-13 bg-[#D9D9D9] opacity-10 mb-4">

        </div>

        <div className="col-start-9 col-end-13 row-start-1 row-end-13 bg-[#D9D9D9] opacity-10 my-4 mr-4">

        </div>

        </div>

      </>
    )
  }
  
  export default Project02
  
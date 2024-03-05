import { Icon } from "@iconify/react"

function Project01() {

    return (
      <>
        <svg className="absolute left-0 top-0" width="45" height="549" viewBox="0 0 45 549" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 341.518L0 396.964L0 0L45 0" fill="#F45900"/>
          <path d="M45 432.322L0 487.768L0 433.125L45 376.072" fill="#F45900"/>
          <path d="M45 493.393L0 548.839L0 518.304L45 461.25" fill="#F45900"/>
          <path d="M25.936 34.704H16.32L12 30.384L12 16.992L16.304 12.688L25.936 12.688L30.24 16.992L30.24 30.384L25.936 34.704ZM16.32 24.144L27.872 17.008L14.368 17.008L16.32 18.368L16.32 24.144ZM27.872 30.384L25.936 29.008L25.936 23.248L14.368 30.384L27.872 30.384ZM12 36.0786H16.32L16.32 42.9426L14.96 44.8306L25.216 44.8306C25.1307 44.6813 25.04 44.5213 24.944 44.3506C24.8587 44.18 24.7787 44.0146 24.704 43.8546H23.264V39.5506H27.088L30.24 45.0706V49.1506L14.96 49.1506L16.32 51.0386V55.9986L14.96 57.8866H12L12 36.0786Z" fill="#232528"/>
        </svg>

        <div className="grid grid-cols-12 grid-rows-12 h-full gap-4">
        <div className="col-start-2 col-end-4 row-start-2 row-end-12 text-[#EAF6FF] text-2xl font-semibold">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-8xl text-[#F45900]">OURA <br className="mt-10"/> LENZ  <br className="mt-10"/> FRENZ</h1>
          <p className="text-xl mt-10">A dapp built on top of Lens Protocol. Users with an Oura Ring (sleep tracker) can connect their ring to the protocol and create NFTS of their sleep data, then share them with other Oura ring users.</p>
          
          <div className="self-start">
            <div className="mt-10 text-xl">Solidity</div>
            <div className="text-xl">React</div>
            <div className="text-xl">Hardhat</div>
            <div className="text-xl">TS/CSS/HTML</div>
          </div>

          <div className="flex self-start mt-4">
            <Icon className="mr-2" color="#EAF6FF" width="35" height="35" icon="ri:github-fill"/>
            <Icon color="#EAF6FF" width="33" height="33" icon="dashicons:admin-site-alt3"/>
          </div>

          
            <svg className="mt-12" width="176" height="20" viewBox="0 0 176 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.28134 0H0V20H7.28134V0Z" fill="#F45900"/>
              <path d="M22.6104 0H15.3291V20H22.6104V0Z" fill="#F45900"/>
              <path d="M37.9397 0H30.6583V20H37.9397V0Z" fill="#F45900"/>
              <path d="M53.2688 0H45.9874V20H53.2688V0Z" fill="white"/>
              <path d="M68.5979 0H61.3165V20H68.5979V0Z" fill="white"/>
              <path d="M83.927 0H76.6456V20H83.927V0Z" fill="white"/>
              <path d="M99.2562 0H91.9749V20H99.2562V0Z" fill="white"/>
              <path d="M114.585 0H107.304V20H114.585V0Z" fill="white"/>
              <path d="M129.915 0H122.633V20H129.915V0Z" fill="white"/>
              <path d="M145.244 0H137.962V20H145.244V0Z" fill="white"/>
              <path d="M160.573 0H153.291V20H160.573V0Z" fill="white"/>
              <path d="M175.902 0H168.621V20H175.902V0Z" fill="white"/>
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
  
  export default Project01
  
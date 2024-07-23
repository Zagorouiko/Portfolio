import { Icon } from "@iconify/react"

function Project04() {

    return (
      <>
    <svg className="absolute left-0 top-0" width="45" height="549" viewBox="0 0 45 549" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 341.518L0 396.964L0 0L45 0" fill="#474747"/>
      <path d="M45 432.322L0 487.768L0 433.125L45 376.072" fill="#474747"/>
      <path d="M45 493.393L0 548.839L0 518.304L45 461.25" fill="#474747"/>
      <path d="M25.936 36.704H16.32L12 32.384L12 18.992L16.304 14.688L25.936 14.688L30.24 18.992L30.24 32.384L25.936 36.704ZM16.32 26.144L27.872 19.008L14.368 19.008L16.32 20.368L16.32 26.144ZM27.872 32.384L25.936 31.008L25.936 25.248L14.368 32.384H27.872ZM30.24 40.0626L27.776 42.3986H21.968C22.192 42.708 22.4107 43.0173 22.624 43.3266C22.8373 43.6466 23.0613 43.956 23.296 44.2546V53.8706C23.0933 54.18 22.8747 54.484 22.64 54.7826C22.4053 55.092 22.1813 55.4013 21.968 55.7106H27.792L30.24 58.0306V60.0306L12 60.0306V55.7106L18.976 55.7106L18.976 42.4306L23.28 38.0786H30.24V40.0626Z" fill="#171717"/>
    </svg>

    <div className="grid grid-cols-12 grid-rows-12 h-full gap-4">
        <div className="col-start-2 col-end-4 row-start-2 row-end-12 text-[#EAF6FF] text-2xl font-semibold">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-8xl text-[#474747]">SAVAGE <br className="mt-10"/> GARDEN  </h1>
          <p className="text-xl mt-10">CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack.</p>
          
          <div className="self-start">
            <div className="mt-10 text-xl">React</div>
            <div className="text-xl">React Three Fiber</div>
            <div className="text-xl">Tailwind</div> 
            <div className="text-xl">JS/CSS/HTML</div>
          </div>
 
          <div className="flex self-start mt-4">
            <Icon className="mr-2" color="#EAF6FF" width="35" height="35" icon="ri:github-fill"/>
            <Icon color="#EAF6FF" width="33" height="33" icon="dashicons:admin-site-alt3"/>
          </div>

          
          <svg className="mt-12 "width="182" height="20" viewBox="0 0 182 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49322 0H0V20H7.49322V0Z" fill="white"/>
            <path d="M23.2684 0H15.7751V20H23.2684V0Z" fill="white"/>
            <path d="M39.044 0H31.5508V20H39.044V0Z" fill="white"/>
            <path d="M54.8187 0H47.3254V20H54.8187V0Z" fill="white"/>
            <path d="M70.5938 0H63.1006V20H70.5938V0Z" fill="white"/>
            <path d="M86.3694 0H78.8762V20H86.3694V0Z" fill="white"/>
            <path d="M102.145 0H94.6519V20H102.145V0Z" fill="white"/>
            <path d="M117.919 0H110.426V20H117.919V0Z" fill="white"/>
            <path d="M133.695 0H126.202V20H133.695V0Z" fill="white"/>
            <path d="M149.47 0H141.977V20H149.47V0Z" fill="#474747"/>
            <path d="M165.246 0H157.752V20H165.246V0Z" fill="#474747"/>
            <path d="M181.02 0H173.527V20H181.02V0Z" fill="#474747"/>
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
  
  export default Project04
  
import { Icon } from "@iconify/react"

function Project03() {

    return (
      <>
    <svg className="absolute left-0 top-0" width="45" height="549" viewBox="0 0 45 549" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 341.518L0 396.964L0 0L45 0" fill="#C2E812"/>
      <path d="M45 432.322L0 487.768L0 433.125L45 376.072" fill="#C2E812"/>
      <path d="M45 493.393L0 548.839L0 518.304L45 461.25" fill="#C2E812"/>
      <path d="M26.936 37.704H17.32L13 33.384L13 19.992L17.304 15.688L26.936 15.688L31.24 19.992L31.24 33.384L26.936 37.704ZM17.32 27.144L28.872 20.008L15.368 20.008L17.32 21.368L17.32 27.144ZM28.872 33.384L26.936 32.008L26.936 26.248L15.368 33.384H28.872ZM31.24 38.5005L31.24 60.4525L13 60.4525L13 38.5325H15.944C16.168 38.8525 16.3973 39.1672 16.632 39.4765C16.8773 39.7965 17.1067 40.1218 17.32 40.4525L17.32 54.1965L15.944 56.1325L21.352 56.1325L19.992 54.2285L19.992 41.8605H22.952L24.312 43.7965V56.1325H28.312C28.088 55.8232 27.864 55.5085 27.64 55.1885C27.416 54.8685 27.192 54.5485 26.968 54.2285V40.4365L28.328 38.5005H31.24Z" fill="#232528"/>
    </svg>

    <div className="grid grid-cols-12 grid-rows-12 h-full gap-4">
        <div className="col-start-2 col-end-4 row-start-2 row-end-12 text-[#EAF6FF] text-2xl font-semibold">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-8xl text-[#C2E812]">SKRAPR</h1>
          <p className="text-xl mt-10">CLI tool to help write test cases for QA clients. An aggregator of poor reviews from the Apple app store & Playstore. Reviews are filtered by chatGPT and a categorized summary is sent to Slack.</p>
          
          <div className="self-start">
            <div className="mt-10 text-xl">Puppeteer Library</div>
            <div className="text-xl">Vanilla JS</div>
          </div>

          <div className="flex self-start mt-4">
            <Icon className="mr-2" color="#EAF6FF" width="35" height="35" icon="ri:github-fill"/>
          </div>

          
          <svg className="mt-12"width="178" height="20" viewBox="0 0 178 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.34681 0H0V20H7.34681V0Z" fill="#EAF6FF"/>
            <path d="M22.8137 0H15.4669V20H22.8137V0Z" fill="#EAF6FF"/>
            <path d="M38.2805 0H30.9337V20H38.2805V0Z" fill="#EAF6FF"/>
            <path d="M53.7478 0H46.401V20H53.7478V0Z" fill="#EAF6FF"/>
            <path d="M69.2146 0H61.8678V20H69.2146V0Z" fill="#EAF6FF"/>
            <path d="M84.6816 0H77.3348V20H84.6816V0Z" fill="#EAF6FF"/>
            <path d="M100.148 0H92.8016V20H100.148V0Z" fill="#C2E812"/>
            <path d="M115.616 0H108.269V20H115.616V0Z" fill="#C2E812"/>
            <path d="M131.082 0H123.736V20H131.082V0Z" fill="#C2E812"/>
            <path d="M146.549 0H139.203V20H146.549V0Z" fill="white"/>
            <path d="M162.016 0H154.67V20H162.016V0Z" fill="white"/>
            <path d="M177.483 0H170.136V20H177.483V0Z" fill="white"/>
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
  
  export default Project03
  
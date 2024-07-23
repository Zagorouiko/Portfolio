import ContactFooter from "./ContactFooter"
import ContactForm from "./ContactForm"

function Footer() {

    return (
    <div className="grid grid-cols-12 relative py-12 bg-gradient-to-t from-[#111213] to-[#222222]">
    <div className="xl:col-start-1 xl:col-end-7 col-start-1 col-end-13 h-full">
      <ContactFooter/>
    </div>
    
    <div className="xl:col-start-7 xl:col-end-13 xl:mt-0 mt-[50px] col-start-1 col-end-13 h-full">
      <ContactForm/>
    </div>
    </div>
    )
  }
  
  export default Footer
  
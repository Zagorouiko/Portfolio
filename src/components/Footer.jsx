import ContactFooter from "./ContactFooter"
import ContactForm from "./ContactForm"

function Footer() {

    return (
    <div className="grid grid-cols-12 relative">
    <div className="xl:col-start-1 xl:col-end-7 col-start-1 col-end-13 h-full">
      <ContactFooter/>
    </div>
    
    <div className="xl:col-start-7 xl:col-end-13 col-start-1 col-end-13 h-full">
      <ContactForm/>
    </div>
    </div>
    )
  }
  
  export default Footer
  
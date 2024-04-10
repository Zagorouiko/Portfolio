
import { useState } from "react"

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

    const [formSubmitted, setFormSubmitted] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend API with the form data
            const response = await fetch('localhost:5173/api/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (response.ok) {
              console.log('Email sent successfully!');
              setFormSubmitted(true)

              setTimeout(() => {
                  setFormSubmitted(false)
              }, 5000);

              
              // Optionally, you can handle success feedback to the user
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
              });
            } else {
              console.error('Failed to send email');
              // Handle error feedback to the user
            }
          } catch (error) {
            console.error('Error sending email:', error);
            // Handle error feedback to the user
          }

      };
    

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-12 mx-36 max-xl:mx-14">
    <div className="col-span-6 mr-4">
                    <label htmlFor="first-name" className="text-base font-semibold leading-6 text-[#D9D9D9]">
                    FIRST_NAME
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        required
                        minLength={1}
                        maxLength={25}
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="col-span-6">
                <label htmlFor="last-name" className="text-base font-semibold leading-6 text-[#D9D9D9]">
                    LAST_NAME
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        required
                        minLength={1}
                        maxLength={35}
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="block w-full border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="col-span-12">
                    <label htmlFor="email" className="block text-base font-semibold leading-6 text-[#D9D9D9] mt-6">
                    EMAIL//
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="block w-full border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm   sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="col-span-12">
                    <label htmlFor="message" className="block text-base font-semibold leading-6 text-[#D9D9D9] mt-6">
                    MESSAGE_
                    </label>
                    <div className="mt-2">
                    <textarea
                        id="message"
                        name="message"
                        type="message"
                        rows="6"
                        required
                        minLength={1}
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="message"
                        className="block w-full border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                {formSubmitted ?
                (<p className="mt-2 py-2 text-left w-[24rem] text-sm font-semibold text-[#D9D9D9]">Successfully submitted form! We'll contact you soon</p>)
                :
                (<button
                type="submit"
                className="mt-6 w-[10rem] h-[3rem] bg-[#F45900] text-center text-2xl font-semibold text-[#D9D9D9] shadow-sm hover:bg-[#222020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                SEND
              </button>)}
        </form>
  )
}
function ContactPage() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-white">
          {/* Left Section - Contact Info */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get In Touch With Us</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
  
            <div className="space-y-6">
              {/* Address */}
              <div>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <span className="text-gray-700">
                    <span className="font-medium">Address</span><br />
                    256 Elm St Suite 100, New York NY10003, United States
                  </span>
                </p>
              </div>
  
              {/* Phone */}
              <div>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">📞</span>
                  <span className="text-gray-700">
                    <span className="font-medium">Phone</span><br />
                    Hostline: (+1) 546-6789
                  </span>
                </p>
              </div>
  
              {/* Working Time */}
              <div>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <span className="text-gray-700">
                    <span className="font-medium">Working Time</span><br />
                    Monday-Friday: 9:00 - 22:00<br />
                    Saturday: 9:00 - 21:00<br />
                    Sunday: Closed
                  </span>
                </p>
              </div>
            </div>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="Abc"
                  className="block w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="abc@def.com"
                  className="block w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="block w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Hi I'd like to ask about..."
                  className="block w-full p-3 border border-gray-300 rounded-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-3 rounded-none hover:bg-yellow-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default ContactPage
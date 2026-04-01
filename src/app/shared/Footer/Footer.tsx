import { BsTwitter, BsYoutube } from "react-icons/bs"
import { FaClock, FaFacebook, FaPhoneVolume } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"


const Footer = () => {
  return (
    <footer className="bg-[#f8f9f2] pt-16 pb-8 px-6 md:px-20 font-sans text-[#555]  w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/*---------Logo & Address--------Section----------*/}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#1a4d2e] p-2 rounded-md">
                {/*-----Simplified------Shield------Icon---------*/}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1a4d2e] tracking-tight">ZANCE</h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            KLLG st, No 99, Pku City,<br />
            28282 Big City Pekanbaru<br />
            Indonesia
          </p>
          <div className="flex gap-3">
            <div className="bg-[#01A04C] hover:bg-black hover:text-white p-2 rounded-full text-white cursor-pointer hover:scale-110 duration-300 hover:rotate-360">
              <FaFacebook size={18} fill="currentColor" />
            </div>
            <div className="bg-[#01A04C] hover:bg-black hover:text-white p-2 rounded-full text-white cursor-pointer hover:scale-110 duration-300 hover:rotate-360">
              <BsTwitter size={18} fill="currentColor" />
            </div>
            <div className="bg-[#01A04C] hover:bg-black hover:text-white p-2 rounded-full text-white cursor-pointer hover:scale-110 duration-300 hover:rotate-360">
              <BsYoutube size={18} fill="currentColor" />
            </div>
          </div>
        </div>

        {/*---------Useful--------Links------------*/}
        <div>
          <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Useful Link</h3>
          <ul className="space-y-4">
            {['About Us', 'Professional Team', 'Case Study', 'Testimonial', 'Article & News', 'Contact Us'].map((link) => (
              <li key={link} className="flex items-center gap-2 hover:text-[#1a4d2e] cursor-pointer transition-colors">
                <div className="w-5 h-5 border-2 border-[#1a4d2e] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#1a4d2e] rounded-full"></div>
                </div>
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/*-------Our--------Services---------*/}
        <div>
          <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-4">
            {['Family Insurance', 'Home Insurance', 'Car Insurance', 'Business Insurance', 'Travel Insurance', 'Life Insurance'].map((service) => (
              <li key={service} className="flex items-center gap-2 hover:text-[#1a4d2e] cursor-pointer transition-colors">
                 <div className="w-5 h-5 border-2 border-[#1a4d2e] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#1a4d2e] rounded-full"></div>
                </div>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Office */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-500">Subscribe our newsletter to get our latest update & news.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black uppercase tracking-wider">Office</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaClock className="text-[#01A04C] text-[20px]"/>
                <span>10AM - 5PM</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneVolume className="text-[#01A04C] text-[20px]"/>
                <span>+(123) 4567 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMessage className="text-[#01A04C] text-[20px]"/>
                <span className="font-medium cursor-pointer">Click Here To Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>Copyright © 2025 Rometheme. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
import { BiLogoFacebook } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-myBlue py-10 lg:py-16">
        <div className="container lg:max-w-6xl mx-auto">
          <div className="px-4 text-white text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl lg:text-left font-semibold mb-4 lg:mb-8">CONTACT US</h3>
            <div className="mb-4 lg:mb-8 flex justify-center lg:justify-start text-2xl md:text-4xl">
              <a href="https://www.facebook.com/ubomipem" target="_blank" rel="noopener noreferrer">
                <BiLogoFacebook />
              </a>
              <a className="ml-8" href="mailto:ubomievents@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail />
              </a>
              <a className="ml-8" href="tel:+27640999546" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt />
              </a>
            </div>
            <p className="text-sm md:text-base text-center">© {currentYear} Ubomi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

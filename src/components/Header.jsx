import image from "../assets/Header_Image.png";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="drop-shadow-xl">
      <div className="bg-myGreen pt-10 lg:py-16 flex flex-col justify-center items-center">
        <div className="container lg:max-w-6xl mx-auto">
          <div className="lg:flex lg:justify-center">
            <div className="lg:w-1/2">
              <img
                className="w-4/5 mb-8 mx-auto drop-shadow-lg"
                src={logo}
                alt="Ubomi Logo"
              />
              <div className="px-4 text-left">
                <div className="lg:border-l lg:pl-4">
                  <h1 className="md:hidden font-semibold text-4xl md:text-5xl leading-tight mb-8 text-white">
                    EVENTS &
                    <br />
                    PROJECT <br />
                    MANAGEMENT
                  </h1>
                  <h1 className="hidden md:flex font-semibold text-4xl md:text-5xl mb-8 text-white">
                    EVENTS &
                    <br />
                    PROJECT MANAGEMENT
                  </h1>
                </div>
                <p className="text-white mb-8 md:text-xl">
                  100% female black-owned company providing full-service,
                  lifestyle-based, professional event planning and project
                  management.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:px-6">
              <img
                className="lg:rounded-xl lg:shadow-xl"
                src={image}
                alt="Ubomi lunch"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

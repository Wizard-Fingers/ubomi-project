import lindiwePicture from "../../assets/Lidiwe.jpeg";
import art from "../../assets/Art_Lindiwe_Cook.png";

const AboutTheOwner = () => {
  return (
    <section className="bg-myOrange py-10 lg:py-16 shadow-xl">
      <div className="container lg:max-w-6xl mx-auto">
        <div className="lg:flex lg:flex-row-reverse lg:justify-center">
          <div className="px-4 lg:w-1/2 lg:px-0 text-white">
            <div className="w-1/5 md:w-1/6 border-2 border-t border-white rounded-xl mb-4"></div>
            <h2 className="text-3xl lg:text-4xl mb-4 font-semibold drop-shadow-md">
              ABOUT THE OWNER
            </h2>
            <div className="lg:px-4 lg:border-r">
              <p className="text-lg lg:text-xl mb-8">
                My passion for event coordination began during my upbringing in
                the Eastern Cape of South Africa, where coming together in
                celebration was a central aspect of life. While pursuing new
                career opportunities, I relocated to Pretoria while maintaining
                my devotion to uplifting others.
              </p>
              <p className="text-lg lg:text-xl mb-8">
                With a background in Human Resources and Commerce, I have
                cultivated a skill set that includes event planning,
                fundraising, and relationship building. My experience is broad,
                ranging from team-building activities to conferences and product
                launches.
              </p>
              <p className="text-lg lg:text-xl mb-8">
                I excel at facilitating engaging and memorable events tailored
                to meet the unique needs of my clients.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 lg:mr-10 flex flex-col  items-center">
            <div
              className="bg-cover bg-center w-72 md:w-96 h-72 md:h-96 rounded shadow-lg"
              style={{ backgroundImage: `url(${lindiwePicture})` }}
            ></div>
            <img
              className="-mt-8 w-3/4 md:w-3/6 lg:w-3/4"
              src={art}
              alt="Lindiwe Cook"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheOwner;

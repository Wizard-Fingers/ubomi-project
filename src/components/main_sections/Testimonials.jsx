import quotesArt from "../../assets/quotes.png";

const Testimonials = () => {

  return (
    <section className="py-10 lg:py-16">
      <div className="container lg:max-w-6xl mx-auto">
        <div className="px-4">
          <div className="w-1/5 md:w-1/12 mx-auto border-2 border-t border-black rounded-xl mb-4"></div>
          <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase mb-4">
            Testimonials
          </h2>
          <div className="md:flex flex-wrap lg:justify-center font-semibold md:text-lg pt-4">
            {/* first card */}
            <div className="md:max-w-xs mb-6 md:m-4 lg:m-1 p-4 rounded-xl shadow-lg flex ">
              <img className="h-4 mr-2" src={quotesArt} alt="Quotes" />
              <div>
                <p className="mb-4">
                  For anyone looking for an innovative and self-starting project
                  and events manager, I highly recommend Lindiwe Cook, she will
                  surpass all expectations! Lindiwe is able to bring much-needed
                  organisational and leadership skills to any project and can
                  make magic with modest and big budgets
                </p>
                <p className="italic">Lusanda Madikizela</p>
              </div>
            </div>
            <div className="md:max-w-xs mb-6 md:m-4 lg:m-1 p-4 rounded-xl shadow-lg flex lg:mx-4">
              <img className="h-4 mr-2" src={quotesArt} alt="Quotes" />
              <div>
                <p className="mb-4">
                  Her attention to detail and continued briefing the client on
                  the status of preparation and planning being either a project
                  or event, will give you peace of mind and with the final
                  product leaving you fired up and excited.
                </p>
                <p className="italic">Xoliswa Boqwana</p>
              </div>
            </div>
            <div className="md:max-w-xs mb-6 md:m-4 lg:m-1 p-4 rounded-xl shadow-lg flex ">
              <img className="h-4 mr-2" src={quotesArt} alt="Quotes" />
              <div>
                <p className="mb-4">
                  Lindiwe’s work always exceeds expectations. you don't have to
                  doubt that she loves what she does because everything is about
                  her passion for conducting her work
                </p>
                <p className="italic">Thami Gqabi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

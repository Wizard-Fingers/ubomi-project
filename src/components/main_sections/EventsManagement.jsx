import image from "../../assets/Events_Management.jpeg";

const EventsManagement = () => {
  return (
    <section className="bg-myOrange pt-10 md:py-10 lg:py-16">
      <div className="container lg:max-w-6xl mx-auto">
        <div className="lg:flex lg:justify-center">
          <div className="px-4 lg:w-1/2 lg:px-0 lg:mr-10 text-white">
            <div className="w-1/5 md:1/6 border-2 border-t border-white rounded-xl mb-4"></div>
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-4 drop-shadow-md">
              Events management
            </h2>
            <div className=" lg:pl-4 lg:border-l ">
              <p className="mb-8 md:text-lg lg:text-xl">
                Pre-event planning budget creation & management detailed
                timelines for the event venue booking and contract negotiation
                event management, design floor plan layout and décor planning
                menu creation specific for the event outsourcing of extra
                services, eg entertainers, photographer, catering, rental
                companies, shuttle services.
              </p>
              <p className="mb-8 md:text-lg lg:text-xl">
                Execution of every detail of your event onsite management & post
                event coordinate team/volunteers tear down and clean up
                post-event summary and follow-up.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 lg:px-4">
            <img
              width={400}
              className="mx-auto max-h-screen lg:max-h-96 rounded shadow-lg lg:rounded-xl lg:shadow-xl"
              src={image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsManagement;

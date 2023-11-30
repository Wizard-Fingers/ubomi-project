import image from "../../assets/new.jpeg";

const ProjectManagement = () => {
  return (
    <section className="pt-10 md:py-10 lg:py-16">
      <div className="container lg:max-w-6xl mx-auto">
        <div className="lg:flex lg:flex-row-reverse lg:justify-center">
          <div className="lg:w-1/2 lg:px-0 px-4 mb-8 lg:mb-0">
            <div className="w-1/5 border-2 border-t border-gray-800 rounded-xl mb-4"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-6 drop-shadow-md">
              Project management
            </h2>
            <ul className="md:text-xl lg:text-2xl">
              <li className="lg:mb-4">Project Planning</li>
              <li className="lg:mb-4">Time and cost Management</li>
              <li className="lg:mb-4">Quality and Risk Management</li>
              <li className="lg:mb-4">Human Resources Management</li>
              <li className="lg:mb-4">Communications Management</li>
              <li className="lg:mb-4">Wrap-Up and Closing</li>
            </ul>
          </div>
          <div className="lg:w-2/5 lg:px-4  lg:mr-10  my-auto ">
            <img
              width={400}
              className="mx-auto max-h-screen lg:max-h-96 rounded shadow-lg lg:rounded-xl lg:shadow-xl"
              src={image}
              alt="Ubomi Project Management"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;

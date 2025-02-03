import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LatestVisasSection = () => {
  const value = [
    {
      id: 1,
      Country: "USA",
      Country_image: "https://i.ibb.co.com/5NdxdWv/United-States.jpg",
      Visa_type: "Tourist Visa",
      Processing_time: "10-15 business days",
      Fee: "$160",
      Validity: "6 months",
      Application_method: "Online",
      See_Details_button: "https://example.com/usa-visa-details",
      link: "/usa",
    },
    {
      id: 2,
      Country: "Canada",
      Country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      Visa_type: "Work Visa",
      Processing_time: "4-6 weeks",
      Fee: "$250",
      Validity: "2 years",
      Application_method: "Online",
      See_Details_button: "https://example.com/canada-visa-details",
      link: "/canada",
    },
    {
      id: 3,
      Country: "UK",
      Country_image: "https://i.ibb.co.com/nqSH2DF7/Dubai.jpg",
      Visa_type: "Student Visa",
      Processing_time: "3 weeks",
      Fee: "$350",
      Validity: "1 year",
      Application_method: "In-person",
      See_Details_button: "https://example.com/uk-visa-details",
      link: "/uk",
    },
    {
      id: 4,
      Country: "Australia",
      Country_image: "https://i.ibb.co.com/23SWTkTc/Los-Angeles.jpg",
      Visa_type: "Business Visa",
      Processing_time: "2-3 weeks",
      Fee: "$200",
      Validity: "1 year",
      Application_method: "Online",
      See_Details_button: "https://example.com/australia-visa-details",
      link: "/australia",
    },
    {
      id: 5,
      Country: "Germany",
      Country_image: "https://i.ibb.co.com/Zp7SzM0Q/india.jpg",
      Visa_type: "Schengen Visa",
      Processing_time: "15-20 business days",
      Fee: "€80",
      Validity: "90 days",
      Application_method: "In-person",
      See_Details_button: "https://i.ibb.co.com/nqSH2DF7/Dubai.jpg",
      link: "/germany",
    },
    {
      id: 6,
      Country: "Japan",
      Country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      Visa_type: "Tourist Visa",
      Processing_time: "5-7 business days",
      Fee: "$60",
      Validity: "3 months",
      Application_method: "Online",
      See_Details_button: "https://example.com/japan-visa-details",
      link: "/japan",
    },
  ];

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-2xl font-semibold flex justify-center text-center my-8">
        Latest Visas Section
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {value.map((items) => (
          <div
            key={items.id}
            className="border border-gray-300 shadow-xl rounded-lg"
          >
            <img
              className="w-full h-auto object-cover"
              src={items.Country_image}
              alt=""
            />
            <div className="text-gray-600 my-6 px-10">
              <h2 className="text-xl font-bold">{items.Country}</h2>
              <p className="text-lg font-normal my-3">
                Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel
                urna fermentum congue.
              </p>
              <Link to={items.link}>
                <button className="btn flex items-center w-[300px] px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-700 hover:text-white transition duration-200">
                  Read More <FaArrowRightLong className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVisasSection;

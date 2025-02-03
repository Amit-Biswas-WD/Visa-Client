import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllVisa = () => {
  const value = [
    {
      id: 1,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "USA",
      visa_type: "Tourist visa",
      processing_time: "15 days",
      required_documents: [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
      ],
      description: "Tourist visa for visiting the USA for leisure or business.",
      age_restriction: 18,
      fee: 160,
      validity: "6 months",
      application_method: "Online",
    },
    {
      id: 2,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Canada",
      visa_type: "Student visa",
      processing_time: "20 days",
      required_documents: [
        "Valid passport",
        "Visa application form",
        "Proof of enrollment",
      ],
      description: "Student visa for studying in Canadian institutions.",
      age_restriction: 17,
      fee: 150,
      validity: "1 year",
      application_method: "Offline",
    },
    {
      id: 3,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Australia",
      visa_type: "Official visa",
      processing_time: "10 days",
      required_documents: ["Official letter", "Valid passport", "Photograph"],
      description: "Official visa for government-related activities.",
      age_restriction: 21,
      fee: 100,
      validity: "3 months",
      application_method: "Online",
    },
    {
      id: 4,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "United Kingdom",
      visa_type: "Tourist visa",
      processing_time: "12 days",
      required_documents: [
        "Valid passport",
        "Bank statement",
        "Travel itinerary",
      ],
      description: "Tourist visa for exploring the UK.",
      age_restriction: 18,
      fee: 140,
      validity: "6 months",
      application_method: "Online",
    },
    {
      id: 5,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Germany",
      visa_type: "Student visa",
      processing_time: "25 days",
      required_documents: [
        "Valid passport",
        "Proof of acceptance",
        "Health insurance",
      ],
      description: "Student visa for academic programs in Germany.",
      age_restriction: 18,
      fee: 75,
      validity: "1 year",
      application_method: "Offline",
    },
    {
      id: 6,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "France",
      visa_type: "Tourist visa",
      processing_time: "15 days",
      required_documents: [
        "Valid passport",
        "Travel insurance",
        "Accommodation proof",
      ],
      description: "Visa for tourism and cultural visits in France.",
      age_restriction: 18,
      fee: 90,
      validity: "90 days",
      application_method: "Online",
    },
    {
      id: 7,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Japan",
      visa_type: "Official visa",
      processing_time: "7 days",
      required_documents: [
        "Official letter",
        "Invitation letter",
        "Valid passport",
      ],
      description: "Visa for official government business in Japan.",
      age_restriction: 21,
      fee: 85,
      validity: "3 months",
      application_method: "Offline",
    },
    {
      id: 8,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "India",
      visa_type: "Tourist visa",
      processing_time: "5 days",
      required_documents: [
        "Valid passport",
        "Visa application form",
        "Recent photo",
      ],
      description: "Tourist visa for visiting India.",
      age_restriction: 18,
      fee: 60,
      validity: "6 months",
      application_method: "Online",
    },
    {
      id: 9,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Italy",
      visa_type: "Student visa",
      processing_time: "30 days",
      required_documents: [
        "Valid passport",
        "Acceptance letter",
        "Proof of funds",
      ],
      description: "Student visa for studying in Italy.",
      age_restriction: 18,
      fee: 50,
      validity: "1 year",
      application_method: "Offline",
    },
    {
      id: 10,
      country_image: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      country_name: "Brazil",
      visa_type: "Official visa",
      processing_time: "14 days",
      required_documents: [
        "Official request letter",
        "Passport copy",
        "Photograph",
      ],
      description: "Official visa for diplomatic missions to Brazil.",
      age_restriction: 21,
      fee: 110,
      validity: "6 months",
      application_method: "Online",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {value.map((items) => (
          <div
            key={items.id}
            className="border border-gray-300 shadow-xl rounded-lg"
          >
            <img
              className="w-full h-auto object-cover"
              src={items.country_image}
              alt=""
            />
            <div className="text-gray-600 my-6 px-10">
              <h2 className="text-xl font-bold">{items.country_name}</h2>
              <p className="text-lg font-normal my-3">
                Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel
                urna fermentum congue.
              </p>
              <Link>
                <button className="btn border border-gray-300 flex items-center w-[300px] px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-700 hover:text-white transition duration-200">
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

export default AllVisa;

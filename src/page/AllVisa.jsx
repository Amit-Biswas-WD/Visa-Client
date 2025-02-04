import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const allData = useLoaderData();
  console.log(allData);

  return (
    <div className="container mx-auto my-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {allData.map((items) => (
          <div
            key={items._id}
            className="border border-gray-300 shadow-xl rounded-lg"
          >
            <img
              className="w-full h-auto object-cover"
              src={items.url}
              alt=""
            />
            <div className="text-gray-600 my-6 px-10">
              <h2 className="text-xl font-bold">{items.country_name}</h2>
              <p className="text-lg font-normal my-3">
                Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel
                urna fermentum congue.
              </p>
              <Link to={`/allVisaDetails/${items._id}`}>
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

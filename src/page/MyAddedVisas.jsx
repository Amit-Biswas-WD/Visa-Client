import { Link } from "react-router-dom";

const MyAddedVisas = () => {
  const handleDelete = (id) => {
    console.log("delete", id);
  };
  return (
    <div className="container mx-auto my-4 grid md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div className="flex gap-6 border border-amber-300 shadow-2xl w-full">
        <img
          className="w-[48%]"
          src="https://i.ibb.co.com/yc7jZdhn/image1.png"
          alt=""
        />
        <div className="w-[48%] my-2">
          <h2 className="text-2xl font-semibold">Country Name</h2>
          <p className="text-base font-normal my-1">Visa_type</p>
          <p className="text-base font-normal my-1">Processing_time</p>
          <p className="text-base font-normal my-1">Fee</p>
          <p className="text-base font-normal my-1">Validity</p>
          <p className="text-base font-normal my-1">Application_method</p>
          <div className="my-1 flex gap-10">
            <Link to={`/update`}>
              <button className="btn my-1 border  border-red-500 bg-red-400 hover:bg-red-700 hover:text-white duration-700">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete()}
              className="btn my-1 border border-green-600 bg-green-400 hover:bg-green-700 hover:text-white duration-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisas;

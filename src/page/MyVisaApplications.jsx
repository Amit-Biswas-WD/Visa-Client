import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const allData = useLoaderData();
  const [allVisa, setAllVisa] = useState(allData);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Canceled it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addVisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Canceled!", "Your file has been Canceled.", "success");
              const remainingVisa = allVisa.filter((visa) => visa._id !== id);
              setAllVisa(remainingVisa);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">Total Applications: {allVisa.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {allVisa.map((visa) => (
          <div
            key={visa._id}
            className="border border-amber-200 shadow-2xl p-8"
          >
            <img
              src={visa.url}
              alt={visa.country_name}
              className="w-[30%] h-auto object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-2">{visa.country_name}</h2>
            <p>Visa Type: {visa.visa_type}</p>
            <p>Processing Time: {visa.processing_time}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.application_method}</p>
            <p>Processing Date: {visa.processing_date}</p>
            <p>Fee: {visa.fee}</p>
            <button
              onClick={() => handleCancel(visa._id)}
              className="btn btn-ghost btn-xs border border-red-400 hover:text-white bg-red-300 hover:bg-red-600 mt-2"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;

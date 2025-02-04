import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const allData = useLoaderData();
  const [allVisa, setAllVisa] = useState(allData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addVisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUser = allVisa.filter((user) => user._id !== id);
              setAllVisa(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name | Image</th>
            <th>Visa Type</th>
            <th>Processing Time</th>
            <th>Fee</th>
            <th>Validity</th>
            <th>Application Method</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {allVisa?.map((visa, index) => (
            <tr key={visa._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={visa.url} alt={visa.country_name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{visa.country_name}</div>
                  </div>
                </div>
              </td>
              <td>{visa.visa_type}</td>
              <td>{visa.processing_time}</td>
              <td>{visa.fee}</td>
              <td>{visa.validity}</td>
              <td>{visa.application_method}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAddedVisas;

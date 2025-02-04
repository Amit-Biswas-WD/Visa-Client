const MyVisaApplications = () => {
  return (
    // <div className="container mx-auto my-4 grid md:grid-cols-2 sm:grid-cols-1 gap-10">
    //   <div className="flex gap-6 border border-amber-300 shadow-2xl w-full">
    //     <img
    //       className="w-[48%]"
    //       src="https://i.ibb.co.com/yc7jZdhn/image1.png"
    //       alt=""
    //     />
    //     <div className="w-[48%] my-2">
    //       <h2 className="text-2xl font-semibold">Country Name</h2>
    //       <p className="text-base font-normal my-1">Visa_type</p>
    //       <p className="text-base font-normal my-1">Processing_time</p>
    //       <p className="text-base font-normal my-1">Fee</p>
    //       <p className="text-base font-normal my-1">Validity</p>
    //       <p className="text-base font-normal my-1">Application_method</p>
    //       <p className="text-base font-normal my-1">Applied_date</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name | Image</th>
              <th>Visa_type</th>
              <th>Processing_time</th>
              <th>Fee</th>
              <th>Validity</th>
              <th>Application_method</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
              Visa_type
              </td>
              <td>Processing_time</td>
              <td>Fee</td>
              <td>Validity</td>
              <td>Application_method</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVisaApplications;

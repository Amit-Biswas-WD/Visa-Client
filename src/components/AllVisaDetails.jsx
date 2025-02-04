import { useLoaderData } from "react-router-dom";

const AllVisaDetails = () => {
  const allData = useLoaderData();

  const {
    country_name,
    url,
    visa_type,
    processing_time,
    validity,
    application_method,
    required_documents,
    description,
    processing_date,
    age_restriction,
    fee,
  } = allData;

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-semibold">
        AllVisaDetails: {allData.country_name}
      </h2>
      <div className="my-8 border border-yellow-400 shadow-2xl p-4 rounded-lg">
      <div className="md:flex gap-8">
          <img className="w-[400px] h-auto" src={url} alt="" />
          <div>
            <h2 className="text-2xl font-bold my-3">
               {country_name}
            </h2>
            <p className="my-2 text-lg">Visa Type: {visa_type}</p>
            <p className="my-2 text-lg">Validity: {validity}</p>
            <p className="my-2 text-lg">
              Application Method: {application_method}
            </p>
            <p className="my-2 text-lg">Processing Date: {processing_date}</p>
            <p className="my-2 text-lg">Processing Time: {processing_time}</p>
            <p className="my-2 text-lg">Age Restriction: {age_restriction}</p>
            <p className="my-2 text-lg">Fee: {fee}</p>
            <p className="my-2 text-lg">Description: {description}</p>
            <p className="my-2 text-lg">
              Required Documents: {required_documents}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVisaDetails;

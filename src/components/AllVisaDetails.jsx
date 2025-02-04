import { useLoaderData } from "react-router-dom";

const AllVisaDetails = () => {
  const allData = useLoaderData();
  console.log(allData.country_name);

  return <div>AllVisaDetails: {allData.country_name}</div>;
};

export default AllVisaDetails;

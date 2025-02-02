import AddVisaPage from "../components/home/AddVisaPage"
import Banner from "../components/home/Banner"
import LatestVisasSection from "../components/home/LatestVisasSection"

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestVisasSection/>
      <AddVisaPage/>
    </div>
  )
}

export default Home
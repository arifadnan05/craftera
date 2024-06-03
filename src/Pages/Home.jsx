import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import CraftCategory from "./CraftCategory"
import HomeCard from "./HomeCard/HomeCard"
import PhotoGallery from "./PhotoGallery/PhotoGallery"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCard></HomeCard>
      <div>
        <div>
          <div className="divider text-4xl my-28">Our Best Category</div>
        </div>
        <CraftCategory></CraftCategory>
      </div>
      <PhotoGallery></PhotoGallery>
      <Contact></Contact>
    </div>
  )
}

export default Home

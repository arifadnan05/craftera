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
      <CraftCategory></CraftCategory>
      <PhotoGallery></PhotoGallery>
      <Contact></Contact>
    </div>
  )
}

export default Home

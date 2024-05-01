import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import HomeCard from "./HomeCard/HomeCard"
import PhotoGallery from "./PhotoGallery/PhotoGallery"

const Home = () => {
  return (
    <div>
      <h1>This is home components</h1>
      <Banner></Banner>
      <HomeCard></HomeCard>
      <PhotoGallery></PhotoGallery>
      <Contact></Contact>
    </div>
  )
}

export default Home

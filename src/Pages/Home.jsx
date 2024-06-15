import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import CraftCategory from "./CraftCategory"
import HomeCard from "./HomeCard/HomeCard"
import PhotoGallery from "./PhotoGallery/PhotoGallery"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <div>
          <div className="divider text-4xl mt-28 mb-10">See Our Items</div>
          <p className="text-center text-lg mb-28">We are determined to provide you the attracting arts and crafts with cheap cost. But don't worry they are unique and looking good.From intricately designed jewelry to charming home decor, each item in our store is carefully crafted with love and attention to detail. We believe that every piece tells a story and adds a touch of personality to your space.</p>
        </div>
        <HomeCard></HomeCard>
      </div>
      <div>
        <div>
          <div className="divider text-4xl my-28">Our Best Category</div>
        </div>
        <CraftCategory></CraftCategory>
      </div>
      <div>
        <div className="divider text-4xl mt-28 mb-10">Our Photo Gallery</div>
        <p className="text-center text-lg mb-28">We are determined to provide you the attracting arts and crafts with cheap cost. But don't worry they are unique and looking good.From intricately designed jewelry to charming home decor, each item in our store is carefully crafted with love and attention to detail. We believe that every piece tells a story and adds a touch of personality to your space.</p>
        <PhotoGallery></PhotoGallery>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default Home
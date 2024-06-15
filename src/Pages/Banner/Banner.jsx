
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Swiper

        spaceBetween={200}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}


      >

        <SwiperSlide>
          <>
            <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('https://images.saatchiart.com/saatchi/809265/art/8624615/7688296-HSC00002-7.jpg')] rounded-2xl flex flex-col items-center justify-center bg-[#15151580] bg-cover bg-center bg-no-repeat min-h-screen w-full">
              <div className='absolute md:top-[25%] flex flex-col items-center justify-center'>
                <h1 className='font-black text-xl md:text-3xl lg:text-6xl text-white'>The Saga of Rickshaw</h1>
                <p className='text-white text-center lg:text-[20px] md:text-[16px] w-1/2 lg:mt-4 text-[12px]'>

                  This is Bangladesh rikshaw bangladesh every place are seeing this and its bangladesh tradition</p>

                <Link to={'/bad-request'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">View Details</span>
                </Link>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide className='rounded-2xl'>
          <>
            <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('https://img.pikbest.com/origin/09/33/36/22MpIkbEsTXJq.jpg!w700wp')] rounded-2xl flex flex-col items-center justify-center bg-[#15151580] bg-cover bg-center bg-no-repeat min-h-[40vh] md:h-screen w-full">
              <div className='absolute md:top-[25%] flex flex-col items-center justify-center'>
                <h1 className='font-black text-xl md:text-3xl lg:text-6xl text-white'>A Beautiful Village Nature</h1>
                <p className='text-white lg:text-[20px] text-center md:text-[16px] w-1/2 lg:mt-4 text-[12px]'>

                A serene village, lush with greenery, blooming flowers, babbling brooks, and vibrant, picturesque landscapes.</p>

                <Link to={'/bad-request'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">View Details</span>
                </Link>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('https://www.shutterstock.com/image-photo/close-group-writing-utensils-600nw-81693070.jpg')] rounded-2xl flex flex-col items-center justify-center bg-[#15151580] bg-cover bg-center bg-no-repeat min-h-[40vh] md:h-screen w-full">
              <div className='absolute md:top-[25%] flex flex-col items-center justify-center'>
                <h1 className='font-black text-xl md:text-3xl lg:text-6xl text-white'>The Art</h1>
                <p className='text-white lg:text-[20px] text-center md:text-[16px] w-1/2 lg:mt-4 text-[12px]'>

                  The art preparation before any drawing. there are many art of this craft items. there is have pencil and others.</p>

                <Link to={'/bad-request'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-purple-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">View Details</span>
                </Link>
              </div>
            </div>
          </>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
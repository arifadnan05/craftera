
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

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
          delay: 4000,
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
            <div className='w-full h-full relative flex justify-center items-center'>
              <img className='h-full w-full' src='https://images.saatchiart.com/saatchi/809265/art/8624615/7688296-HSC00002-7.jpg' />



              <div className='absolute md:top-[25%] flex flex-col items-center justify-center'>
                <h1 className='font-black text-xl md:text-3xl lg:text-6xl text-red-500'>The Saga of Rickshaw</h1>
                <p className='text-rose-600 lg:text-[20px] md:text-[16px] w-1/2 lg:mt-4 text-[12px]'>

                  This is Bangladesh rikshaw bangladesh every place are seeing this and its bangladesh tradition</p>

                <Link to={'/AllTouristsSpot'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
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
            <div className='w-full h-full relative flex justify-center items-center'>
              <img className='h-full w-full ' src='https://images.saatchiart.com/saatchi/809265/art/8624615/7688296-HSC00002-7.jpg' />



              <div className='absolute  md:top-[25%] flex flex-col items-center justify-center'>
                <h1 className='font-bold text-xl md:text-3xl lg:text-6xl text-red-500'>The Saga of Rickshaw</h1>
                <p className='text-white lg:text-[20px] md:text-[16px] w-1/2 lg:mt-4 text-[12px]'>

                  This is Bangladesh rikshaw bangladesh every place are seeing this and its bangladesh tradition</p>

                <Link to={'/AllTouristsSpot'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
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


/*
 import banner3 from '../../assets/banner-3.jpg'
import banner5 from '../../assets/banner-5.jpg'
import banner7 from '../../assets/banner-7.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'animate.css';
// import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './styles.css';

// import banner2 from '../../assets/banner2.jpg'

import { Link } from 'react-router-dom';





const Hero = () => {
    return (
        <>
            <Swiper

                spaceBetween={200}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper  "

            >
                <SwiperSlide>
                    <>

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={banner7} alt="" />
                            <div className='absolute top-[10%] lg:top-[43%] md:top-[25%] lg:ml-24 mx-auto container '  >
                                <h1 className='font-bold text-xl md:text-3xl lg:text-6xl text-white animate_animated animate_fadeInDown' >Explore the world Adventure</h1>
                                <p className='text-white lg:text-[20px] md:text-[16px] w-1/2 ml-20 md:ml-48 lg:ml-96 lg:mt-4 text-[12px] animate_animated animate_fadeInLeft'>

                                    Southeast Asia Tourism Management involves the strategic planning, development, and implementation of policies sustainable tourism.</p>


                                <Link to={'/AllTouristsSpot'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
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

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={banner5} alt="" />
                            <div className='absolute top-[10%] lg:top-[43%] md:top-[25%] lg:ml-24 mx-auto container '  >
                                <h1 className='font-bold text-xl md:text-3xl lg:text-6xl text-white animate_animated animate_fadeInDown' >Explore the world Adventure</h1>
                                <p className='text-white lg:text-[20px] md:text-[16px] w-1/2 ml-20 md:ml-48 lg:ml-96 lg:mt-4 text-[12px] animate_animated animate_fadeInLeft'>

                                    Southeast Asia Tourism Management involves the strategic planning, development, and implementation of policies sustainable tourism.</p>


                                <Link to={'/AllTouristsSpot'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
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

                        <div className='w-full h-full relative '>
                            <img className='h-full w-full ' src={banner3} alt="" />
                            <div className='absolute top-[10%] lg:top-[43%] md:top-[25%] lg:ml-24 mx-auto container '  >
                                <h1 className='font-bold text-xl md:text-3xl lg:text-6xl text-white animate_animated animate_fadeInDown' >Explore the world Adventure</h1>
                                <p className='text-white lg:text-[20px] md:text-[16px] w-1/2 ml-20 md:ml-48 lg:ml-96 lg:mt-4 text-[12px] animate_animated animate_fadeInLeft'>

                                    Southeast Asia Tourism Management involves the strategic planning, development, and implementation of policies sustainable tourism.</p>


                                <Link to={'/AllTouristsSpot'} className="relative mt-5 animate_animated animate_fadeInRight inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50">
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

        </>
    );
};

export default Hero;

*/
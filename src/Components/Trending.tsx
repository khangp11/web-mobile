import React from 'react'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Pagination, Navigation } from 'swiper/modules';
const Trending = () => {
    return (
        <>
            <header>
                <div>
                    <nav
                        className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                        <div className="flex w-full flex-wrap items-center justify-between px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <p className='flex-1 text-xl mt-1'>Back</p>
                            <div className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className='flex mb-4 h-12 bg-white'>
                <h1 className='text-2xl ml-2'>Most popular</h1>
                <h2 className='mt-2 ml-40'>26 plances</h2>
            </div>

            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper flex items-center justify-center"
            >
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
            </Swiper>

            <div className="p-3 relative">
                <div className="bg-white shadow-md rounded-md p-4">
                    <h6 className="mb-1"><a href="#" className="text-black">The osahan Restaurant</a></h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <i className="feather-clock"></i> 15–25 min
                        </span>
                        <span className="float-right text-black-50">$500 FOR TWO</span>
                    </p>
                </div>
            </div>


            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper flex items-center justify-center"
            >
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
            </Swiper>

            <div className="p-3 relative">
                <div className="bg-white shadow-md rounded-md p-4">
                    <h6 className="mb-1"><a href="#" className="text-black">The osahan Restaurant</a></h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <i className="feather-clock"></i> 15–25 min
                        </span>
                        <span className="float-right text-black-50">$500 FOR TWO</span>
                    </p>
                </div>
            </div>


            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper flex items-center justify-center"
            >
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <form className="mx-auto">
                        <img className="w-80 h-80 object-cover" src="https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg" alt="" />
                    </form>
                </SwiperSlide>
            </Swiper>

            <div className="p-3 relative">
                <div className="bg-white shadow-md rounded-md p-4">
                    <h6 className="mb-1"><a href="#" className="text-black">The osahan Restaurant</a></h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <i className="feather-clock"></i> 15–25 min
                        </span>
                        <span className="float-right text-black-50">$500 FOR TWO</span>
                    </p>
                </div>
            </div>  <br /><br /> <br />





            <Footer />
        </>
    )
}

export default Trending
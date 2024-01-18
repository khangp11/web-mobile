import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer';
import SwiperCategorys from './swiper/SwiperCategorys';
import SwiperTrending from './swiper/SwiperTrending';
import SwiperMostpopular from './swiper/SwiperMostpopular';
import SwiperMostsales from './swiper/SwiperMostsales';
const Home = () => {

    return (
        <>
            <Header />

            <SwiperCategorys />

            <SwiperTrending />

            <SwiperMostpopular />

            <SwiperMostsales />

            <Footer />

        </>
    )
}

export default Home
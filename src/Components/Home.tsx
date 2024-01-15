import React from 'react'
import Header from './Header'
import Footer from './Footer';
import SwiperCategorys from './SwiperCategorys';
import SwiperTrending from './SwiperTrending';
import SwiperMostpopular from './SwiperMostpopular';
import SwiperMostsales from './SwiperMostsales';
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
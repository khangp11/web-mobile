import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Food } from '../Type';
import { localStorageService } from '../util/localStorageService';

interface SwiperSlidesposter {
    image: string,
}

const SwiperTrending = () => {
    const [ListFood, setListFood] = useState<Food[]>([])

    const [Listposter, setListposter] = useState<SwiperSlidesposter[]>([])

    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:8080/api/food`);
            setListFood(response.data || {});
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = (food: Food) => {
        localStorageService(food, 1)
    };


    const data = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmyGBGoVf-z7tjnoPe5C-KC-uisGOubhQcw&usqp=CAU',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloM_uFL-NTatnGknrdY6fP1XDgeNtzGV3Mo5HC0ZvE8F6GfVi7HKv3r3UZQ&s',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtMatJxD-6ZiRSQ-qzz7sEVhilOnoYi0L8S5Mv3F-vuSLNfYVaEwgNIMR9A&s',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpz5Sz__2balJ6mr2qlQvRRcuMt_CR9NpBsLhp58ypSWLnyHUIOUJmxXk6Cg&s',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUogr8UFShOPFlGmo-6VwbhNuTFOjo4SQ9GJCnmTxYsc2ZUHlqrLFIy8zYyQ&s',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMEXnNy7YJlrOw__iWcGyE4V1jwxswJ6OlMKisXrHXna8KR7vAZYwsj4_hw&s',
        },
    ]


    return (
        <>
            <div className='flex mt-1 mb-2'>
                <h1 className='text-2xl ml-2'><Link to={'/trending'}>Trending this week</Link></h1>
                <h2 className='mt-2 ml-20'><Link to={'/trending'}>Views all</Link></h2>
                <Link to={'/trending'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4 ml-2 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg></Link>
            </div>

            <Swiper
                slidesPerView={1.4}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {ListFood.map((food) => (
                    <SwiperSlide className="rounded-lg shadow-2xl ml-2 relative ">
                        <div>
                            <div key={food.id} className='h-40' >
                                <div className='flex absolute'>
                                    <div className='bg-neutral-800 m-2 rounded text-slate-100 text-sm'>
                                        <span className='ml-1 mr-1'>Promoted</span>
                                    </div>
                                    <div className="bg-white w-6 h-6 rounded-full relative ml-40 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-white w-5 h-5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex absolute'>
                                    <div className="bg-lime-400 w-26 h-6 rounded-md relative ml-44 mt-32 text-sm">
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                            <samp className='mt-1'>{food.star}(300+)</samp>
                                        </div>
                                    </div>
                                </div>
                                <img style={{ width: '100%' }} src={`http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/${food.image}.jpg`} alt="" />
                            </div>
                            <div className='mr-10'>
                                <Link to={'/detail'}><p className='text-base flex m-2'><b>{food.food_name}</b></p></Link>
                                <p className='text-sm mr-1 flex m-2'>{food.description}</p>
                                <div className='flex mt-3 ml-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className='ml-1 text-sm'>15-30 min</p>
                                    <p className='ml-7 text-sm'>$30 FOR TWO</p>
                                </div>
                                <div className='h-9 grid grid-cols-3 gap-6 content-start m-2'>
                                    <span className='bg-red-700 rounded-lg text-sm text-slate-50 m-1'>OFFER</span>
                                    <samp className='text-sm m-1'>Oshahan50</samp>
                                    <button className='bg-gray-400 text-white rounded-md ml-6' onClick={() => { handleAddToCart(food) }}>Add</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <br />
            </Swiper> <br />
            <hr />
            <div>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper absolute"
                >
                    {data.map((item, index) => (
                        <SwiperSlide className="bg-white rounded-lg shadow-2xl w-16 ml-2">
                            <div>
                                <div className='m-2'>
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <br />
                </Swiper>
            </div>
        </>
    )
}

export default SwiperTrending

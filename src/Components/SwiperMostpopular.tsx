import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


interface SwiperSlideProps {
    food_name: string,
    quantity: number,
    description: string,
    price: any,
    star: number,
    image: string,
    discount: any,
    category: any,
}
type StarRatingProps = {
    rating: number;
};
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1 my-1">
            {index < rating ? (
                <path className='text-yellow-300' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            ) : (
                <path className='text-stone-500' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            )}
        </svg>
    ));
    return <div className="flex">{stars}</div>;
};

const SwiperMostpopular = () => {
    const [ListFood, setListFood] = useState<SwiperSlideProps[]>([])

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

    return (
        <>
            <div className='flex mt-1 mb-2'>
                <h1 className='text-2xl ml-2'><Link to={'/trending'}>Most popular</Link></h1>
                <h2 className='mt-2 ml-32'><Link to={'/trending'}>26 plances</Link> </h2>
                <Link to={'/trending'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4 ml-2 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg></Link>
            </div>

            <div className='grid grid-cols-2 gap-4 m-2 bg-white'>
                {ListFood.map((item, index) => (
                    <div className='rounded-lg shadow-2xl'>
                        <div className=''>
                            <div className='flex absolute'>
                                <div className='bg-neutral-800 m-1 rounded text-slate-100 text-sm'>
                                    <span className='ml-1 mr-1'>Promoted</span>
                                </div>
                                <div className="bg-white w-6 h-6 rounded-full relative ml-16 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-white w-5 h-5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex absolute'>
                                <div className="bg-lime-400 w-26 h-6 rounded-md relative ml-20 mt-16 text-sm">
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <samp className='mt-1'>{item.star}(300+)</samp>
                                    </div>
                                </div>
                            </div>
                            <img style={{ height: '95px', width: '100%' }} src={`http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/${item.image}.jpg`} alt="" />
                        </div>
                        <div className='mr-10'>
                            <p className='text-base'><b>{item.food_name}</b></p>
                            <p className='text-sm mr-1'>{item.description}</p>
                            <div className='flex mt-3 ml-1'>
                                <StarRating rating={item.star} />
                            </div>

                            <div className='flex mt-1 w-20 h-9'>
                                <span className='bg-red-700 rounded-lg m-2 text-sm text-slate-50'>OFFER</span>
                                <samp className='text-sm m-2'>Oshahan50</samp>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SwiperMostpopular


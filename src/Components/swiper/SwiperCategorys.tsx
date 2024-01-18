import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios'



interface SwiperSlideProps {
    image: string;
    name_category: string;

}
const getImage = (image: string) => {
    return image ? (
        <div className='m-2'>
            <img style={{ height: '45px' }} src={image} alt="" />
        </div>
    ) : (
        <div className='m-2'>
            {/* image dafau */}
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAuAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAQxAAAgEDAQMECw0JAQAAAAAAAAECAwQRBRIhMRVBUdETMmFyc4GCkaGxwRQiM0JDUlNjkqKywvAkNDVUcYOT4fEj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVNQupWsIOEFNzls4zgC2DJ5Ur81vD/ACPqI5VrfQ0/tvqEGuDG5VuHwp0V5THKlz8yj52WDZBjx1K6fGFH0nvlK4XGlSfltEg1QZPKld9rRpP+4+o6Wl/Wq3UaNSlGKlGTUoyzwx1gaQIXAkAAAAAAAAAAAAAAAAAZutdrb+E9hpGbrXC379+ouDjYWdC47PKtByxNJe+awtmL9bZc5MtPofvM5aP2lx4RfgiaJBT5Ntfo/vMnk60/l4FsAVlY2sdyoU/MT7jtl8hT8cSjfXVSdzOlSm6cKbUZSXFvCfiWGv1x52t1VpV6aqVJTpSai1Le4t8HnzAXL+2oKzrSVGGVBtYjjG4pWW6/t0uGzL1GlqT/AGCv3jM3Tt9/RT5qU3+Fe0DbAQAAAAAAAAAAAAAAAAAGfrCXY6Lb4VN3mZoGdrKzSo45qv5WXA0qUYWtWpNqK7JJtvoW72HJatLsu26L9z9PxkvnY9n/AAo7dV03QaxT23LOe26PMe4xS8XSIN6nUjUipQalFrKa4M9mJaXU7WbW+VB73FcYPna6UbFKcakFOElKL3pogyb+1qwuKtWMHUpze17zjF4Se7nW7O7pOdGhWuatOKpzhTU1Kc5xceDzhZN0hJICtqX7hX70oWO7Uafgpr0xL+p/uFbvShY/xKn3KU36YgbKAQAAAAAAAAAAAAAAAAAFDVvg6PhPyyL5n6x8FR8J7GXBn7JCe/DJzlHNxlncyo6Z35PdtcytpuVP31N75wXrXdK6k84YUVnaz3RBv+6aKt1X7IuxYztFJ6xQ+LSrtdOz/sztlSe/axlyazub6cfriS1uySK1ritTuNOrVKUlKGxLf/Qp6bl6hF/Uy9cSjmpTVT3PKP8A6RcZRfB83oL2mP8Ab0s/JS3eNCDZABAAAAAAAAAAAAAAAAAM/WPg6L+sx91mgVr+3dzQ2IzUJJpqTWf1uyBjIlyXMWVplwvlaT7uGj09OuMdtR9KNUUPF4z1GMUuHnLXJ910UX5T6iJafdtYxRXlPqFFdbJLjtLGTotKvPnUftPqJhpl43vlTXlNijhGmo7yzp38Tjjnoz9cSeTbmO9TpPuZfUdrGyrUbpVqsqeFBxSi285a6iDTQIRJAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" alt="" />
        </div>
    );
};

const SwiperCategorys = () => {
    const [ListCategorys, setListCategorys] = useState<SwiperSlideProps[]>([])

    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:8080/api/category`);
            setListCategorys(response.data || {});
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleCategoryClick = () => {
        console.log("category click")
    }

    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper mt-3 mb-3"
        >
            {ListCategorys.map((item, index) => (
                <SwiperSlide className="bg-white rounded-lg shadow-2xl w-16 h-20 ml-2">
                    <div key={index}>
                        <div className='m-2 h-10'>
                            {getImage(item.image)}
                        </div>
                        <p className='item-center text-xs'>
                            {item.name_category}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            <br />
        </Swiper>
    )
}

export default SwiperCategorys
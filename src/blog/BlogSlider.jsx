import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export const blogSlides = [
    {
        category: 'Programming',
        date: '27/12/2000',
        title: 'BLOOM WHERE YOU ARE PLANTED',
        image: '/intelli-icon.png',
        altText: 'Bloom where you are planted',
        description: 'Bloom where you are planted is a beautiful mantra that reminds us to focus on our current circumstances and find ways to grow within them.',
        author: 'Navneet',
    },
    {
        category: 'Programming',
        date: '27/12/2000',
        title: 'BLOOM WHERE YOU ARE PLANTED',
        image: '/intelli-icon.png',
        altText: 'Bloom where you are planted',
        description: 'Bloom where you are planted is a beautiful mantra that reminds us to focus on our current circumstances and find ways to grow within them.',
        author: 'Navneet',
    },
    {
        category: 'Programming',
        date: '27/12/2000',
        title: 'BLOOM WHERE YOU ARE PLANTED',
        image: '/intelli-icon.png',
        altText: 'Bloom where you are planted',
        description: 'Bloom where you are planted is a beautiful mantra that reminds us to focus on our current circumstances and find ways to grow within them.',
        author: 'Navneet',
    },
    {
        category: 'Programming',
        date: '27/12/2000',
        title: 'BLOOM WHERE YOU ARE PLANTED',
        image: '/intelli-icon.png',
        altText: 'Bloom where you are planted',
        description: 'Bloom where you are planted is a beautiful mantra that reminds us to focus on our current circumstances and find ways to grow within them.',
        author: 'Navneet',
    },
    {
        category: 'Technology',
        date: '01/01/2021',
        title: 'EMBRACE THE FUTURE INTELLI',
        image: '/canva.jpg',
        altText: 'Embrace the Future',
        description: 'Embrace the future with open arms, focusing on innovation and growth in all aspects of life.',
        author: 'Alex',
    },
    // Add more slide objects as needed
];


export default function App() {
    return (
        <div className="blog-swiper-container">
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="BlogSliderSwiper"
            spaceBetween={5}
            slidesPerView={1}
            breakpoints={{
                1000: {
                    slidesPerView: 4,
                },
                800: {
                    slidesPerView: 3,
                },
                460: {
                    slidesPerView: 2,
                },
            }}
        >
            {blogSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="BlogSlider-container">
                        <div className="BlogSlider-card">
                            <header className="BlogSlider-header">
                                <div className="BlogSlider-header-item">{slide.category}</div>
                                <div className="BlogSlider-header-title">
                                    <span>{slide.date}</span>
                                </div>
                            </header>
                            <main className="BlogSlider-main-content">
                                <h1>{slide.title}</h1>
                                <img
                                    src={slide.image}
                                    alt={slide.altText}
                                    className="BlogSlider-main-image"
                                />
                                <p className="BlogSlider-main-text">
                                    {slide.description}
                                </p>
                            </main>
                            <div className="BlogSlider-footer">
                                <div className="BlogSlider-footer-item">{slide.author}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}

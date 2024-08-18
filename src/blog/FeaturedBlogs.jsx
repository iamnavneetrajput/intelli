import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const slideData = [
  {
    image: '/canva.jpg',
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi provident repudiandae eos exercitationem et ea unde sit aperiam inventore..',
    buttonText: 'Learn More',
    category: 'Adventure', // New category field
  },
  {
    image: '/canva.jpg',
    title: 'Title 2',
    description: 'Description for slide 2.',
    buttonText: 'Learn More',
    category: 'Drama', // New category field
  },
  // Add more slide data as needed
];


const FeaturedBlog = () => {
  return (
    <div className="blog-container">
      <Swiper
        direction={'vertical'}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="BlogSwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="text-content">
                <span className="category-label">{slide.category}</span> {/* Category label */}
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a>{slide.buttonText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default FeaturedBlog;

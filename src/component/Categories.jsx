import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Cateogries } from '../pages/Data';

const CategoriesComponent = () => {
    return (
        <div className="swiper-container">
            <h2>Cateogries</h2>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                pagination={{
                    dynamicBullets: true,
                }}
                className="mySwiper"
                spaceBetween={5}
                slidesPerView={1}
                breakpoints={{
                    1000: {
                        slidesPerView: 4
                    },
                    650: {
                        slidesPerView: 3
                    },
                    400: {
                        slidesPerView: 2
                    }
                }}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {Cateogries.map(category => (
                    <SwiperSlide key={category.id}>
                        <CustomCard
                            name={category.name}
                            description={category.description}
                            buttonText="Learn More"
                            link={category.path}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const CustomCard = ({ name, description, buttonText, link }) => {
    return (
        <div className="card">
            <h4>{name}</h4>
            <p>{description}</p>
            <a href={link} className="button">{buttonText}</a>
        </div>
    );
};

export default CategoriesComponent;

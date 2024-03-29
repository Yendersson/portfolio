import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import { knowledges } from '../api/tecnologies';

// import styles bundle
import 'swiper/css/bundle';

const SectionTwo = () => {

    return (
        <div className="container container" id='technologies'>
            <h2>Tecnologias</h2>
            <Swiper className='mb-5 mt-5' 
                spaceBetween={30}
                slidesPerView={3}
                speed={1000} 
                autoplay={{ delay: 400 }} 
                loop={true} 
                pagination={{ clickable: true }} 
                scrollbar={{ draggable: true }} 
                modules={[Autoplay]} 
                breakpoints={{
                    500:{
                        slidesPerView:8
                    }
            }}>
                {knowledges.map((item, index) => (
                    <SwiperSlide className='text-center' key={index}>
                        <img src={item.picture} alt="" />
                        <p>{item.name}</p>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export default SectionTwo;
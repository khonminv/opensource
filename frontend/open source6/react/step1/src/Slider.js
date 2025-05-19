import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider(){
	return(
		<Swiper
			slidesPerView={1}
			spaceBetween={20}
			centeredSlides={true}
			initialSlide={2}
			pagination={true}
			breakpoints={{
				640: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 4
				},
				1024: {
					slidesPerView: 5
				}
			}}
			modules={[Pagination]}
			className="swiper mySwiper"
		>
			<SwiperSlide>Slide1</SwiperSlide>
			<SwiperSlide>Slide2</SwiperSlide>
			<SwiperSlide>Slide3</SwiperSlide>
			<SwiperSlide>Slide4</SwiperSlide>
			<SwiperSlide>Slide5</SwiperSlide>
			<SwiperSlide>Slide6</SwiperSlide>
			<SwiperSlide>Slide7</SwiperSlide>
			<SwiperSlide>Slide8</SwiperSlide>
			<SwiperSlide>Slide9</SwiperSlide>
		</Swiper>
	);
}

export default Slider;
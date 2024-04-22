import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import sajek from "../assets/Sajek.png"

const Home = () => {
    return (
        <div className='mb-32'>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className='flex justify-between gap-11 ml-32 '>
                        <div className=''>
                            <h1 className='text-8xl font-medium text-white'>Coxs bazar</h1>
                            <p className='text-white'>Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <button className='bg-orange-700'>Booking</button>
                        </div>
                        <div className='flex justify-around gap-8'>
                            <div className='w-[270px] h-full rounded-3xl border-4 border-red-600' style={{ backgroundImage: 'url(https://i.postimg.cc/DwdpGS78/Sajek.png)' }}>
                                <h1>Sajek</h1>
                            </div>
                            <div className='w-[270px] h-[416px] rounded-3xl border-4 border-red-600' style={{ backgroundImage: 'url(https://i.postimg.cc/PqS660pH/Sreemongol.png)' }}>
                                <h1>Sajek</h1>
                            </div>
                            <div >
                                <h1>Sajek</h1>
                                <img src={sajek} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Home;
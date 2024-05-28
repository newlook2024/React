import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import blueEyes from '../img/kokkozbrat.png'



export default function SwiperItem() {

    return (
                <div className="swiper-slide">
                    <h2 className="md:text-[40px] text-[21px] leading-7 text-center mb-7 md:text-left md:leading-[56px] text-[#141B41] md:mb-4">
                        Отзывы о приложении
                    </h2>
                    <p className="text-[14px] text-center md:text-left md:text-[18px] font-light text-[#72727e] leading-[25px] md:max-w-[710px] mb-6 md:mb-7">
                        Таким образом консультация с широким активом влечет за собой процесс
                        внедрения и модернизации направлений прогрессивного развития.
                        Разнообразный и богатый опыт сложившаяся структура организации
                        обеспечивает широкому кругу (специалистов) участие в формировании
                        модели развития.
                    </p>
                    <div className="flex flex-col mb-6 pb-6 border-b-2 md:border-none md:flex-row gap-4 items-center md:gap-7 justify-start">
                        <img
                            className="w-[80px] h-[80px] rounded-full"
                            src={blueEyes}
                            alt="man with blue eyes"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-[24px] text-center md:text-left leading-8 text-[#141b41]">
                                John Doe
                            </h4>
                            <p className="text-[18px] text-center md:text-left leading-6 text-[#727272]">
                                Водитель
                            </p>
                        </div>
                    </div>
                </div>
    )
}

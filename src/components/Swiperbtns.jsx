import {useSwiper} from 'swiper/react'

export default function Swiperbtns(props) {
    const swiper = useSwiper()
    
    return (
        <>
            <div className="flex items-center md:absolute justify-center right-0 top-20 gap-5 z-10">
                <button onClick={()=> swiper.slidePrev()} className={props.huk1}>
                    <svg
                        className="w-full"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 5L7.5 10L12.5 15"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button onClick={()=> swiper.slideNext()} className={props.huk}>
                    <svg
                        className="w-full"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

        </>
    )
}

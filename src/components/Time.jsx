import iphone from "../img/iphone.png"
import halfPhone from "../img/halfIphone.png"
import appStore from "../img/appstore.png"
import googlePlay from "../img/googlePlay.png"

export default function Time() {
    return (
        <>
            <section className="md:pt-14 md:pb-16 pb-6 pt-6 bg-[#446DF6] md:bg-transparent">
                <div className="mx-auto max-w-[1194px] px-4">
                    <div className="flex relative justify-between gap-2 items-end bg-[#446DF6] rounded-[20px] pt-10 md:pt-0">
                        <img
                            className="z-[1] hidden right-0 md:flex max-w-[522px] max-h-[350px] lg:max-h-[438px] absolute mt-[-80px]"
                            src={iphone}
                            alt="iphone"
                        />
                        <div className="flex flex-col justify-center items-start md:py-[52px] md:px-[35px] lg:px-[70px]">
                            <h3 className="z-10 md:text-[30px] lg:text-[40px] mb-6 text-center md:text-left text-[21px] md:max-w-[365px] md:mb-4 w-full md:leading-11 text-[#F7F8FD] ">
                                Хватит тратить свое время в очередях
                            </h3>
                            <p className="z-10 lg:text-[18px] md:text-[13px] text-[14px] leading-[19px] w-full mb-7 text-center md:text-left md:max-w-[300px] lg:max-w-[365px] md:mb-11 text-[#E9ECF5] md:leading-6">
                                Приложение скоро будет доступно для бета тестирования в AppStore и
                                Google Play
                            </p>
                            <div className="z-10 flex gap-5 flex-col md:flex-row mb-5 md:mb-0 items-center justify-between mx-auto md:ml-0 max-w-[344px]">
                                <a href="#" className="lg:max-w-[166px] md:max-w-[140px] md:min-h-[45px] lg:min-h-[54px]">
                                    <img src={appStore} alt="Download from App Store" />
                                </a>
                                <a href="#" className="lg:max-w-[166px] md:max-w-[140px] md:min-h-[45px] lg:min-h-[54px]">
                                    <img src={googlePlay} alt="Download from Google Play" />
                                </a>
                            </div>
                            <img
                                src={halfPhone}
                                alt="iphone"
                                className="flex md:hidden mx-auto translate-y-[24px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

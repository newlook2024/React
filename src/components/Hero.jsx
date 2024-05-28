import arrow from '../img/arrow.svg';
import miniArrow from '../img/miniarrow.svg';
import iphone from '../img/12pro.png';
import mobile from '../img/mobile.png';

export default function HeroSection ()  {
  return (
    <section id="hero" className="md:py-10 pt-8 mb-8 pb-0 px-3">
      <div className="flex flex-col md:flex-row justify-between max-w-[1194px] items-center mx-auto">
        <div id="hero__info" className="md:max-w-[525px] z-20">
          <h1 className="text-center md:text-left text-xl leading-6 md:text-4xl w-full md:mb-5 mb-4 text-[#141B41] md:leading-[50px] font-semibold">
            Поиск ближайшей свободной автомойки и бронирование на удобное
            <span className="inline-flex items-end"> время. <img className="z-[-1] hidden pb-2 md:flex" src={arrow} alt="➡" /></span>
          </h1>
          <img className="flex items-center justify-center w-5 h-5 mx-auto mb-4 md:hidden" src={miniArrow} alt="⬇" />
          <p className="md:text-2xl text-[#72727E] md:mb-12 mb-6 text-center md:text-left">
            Мы поможем сохранить ваше время для более интересных занятий, чем стоять в очереди.
          </p>
          <button className="flex w-240px py-4 md:py-[18px] px-5 mx-auto md:ml-0 md:px-[51px] md:mb-0 mb-7 font-medium text-xl text-white md:text-[#EEE] bg-[#446DF6] rounded-md">
            Получить доступ
          </button>
        </div>
        <div id="hero__img" style={{ transform: 'scale(1.4)', zIndex: -1 }} className="hidden md:block">
          <img className="w-full" src={iphone} alt="iphone 12 pro" />
        </div>
        <div className="md:hidden flex w-[320px] h-[260px]">
          <img src={mobile} alt="📱" />
        </div>
      </div>
    </section>
  );
};



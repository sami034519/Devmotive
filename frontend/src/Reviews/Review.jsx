// ReviewsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CompanyStats from '../Incremtal/Incremental';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Founder, TechStart',
    stars: 5,
    review:
      'DevMotive transformed our digital presence with a seamless web application. Their team’s expertise and dedication were evident throughout.',
  },
  {
    name: 'James Lee',
    role: 'CEO, FinTech Innovations',
    stars: 4,
    review:
      'The cloud solutions provided by DevMotive streamlined our operations, leading to significant cost savings and improved efficiency.',
  },
  {
    name: 'Emily Carter',
    role: 'CTO, HealthTech Solutions',
    stars: 5,
    review:
      'Their cybersecurity services gave us peace of mind, knowing our data and systems are secure against evolving threats.',
  },
  {
    name: 'Michael Johnson',
    role: 'Founder, EduTech Enterprises',
    stars: 4,
    review:
      'DevMotive’s finance services were instrumental in ensuring compliance with UK tax laws and regulations.',
  },
  {
    name: 'Olivia Brown',
    role: 'COO, RetailTech Ltd',
    stars: 5,
    review:
      'Their IT consulting helped digitalize our business processes, boosting overall operational efficiency.',
  },
  {
    name: 'David Wilson',
    role: 'Managing Director, LegalTech Advisors',
    stars: 4,
    review:
      'The team provided tailored solutions that addressed our unique challenges effectively and efficiently.',
  },
  {
    name: 'Sophia Martinez',
    role: 'Founder, AgriTech Innovations',
    stars: 5,
    review:
      'Their SaaS development support helped us launch a platform that’s reshaping our industry.',
  },
  {
    name: 'Liam Davis',
    role: 'CEO, FinServe Group',
    stars: 5,
    review:
      'Reliable, responsive, and forward-thinking—DevMotive is our go-to for all things tech and finance.',
  },
];

const StarRating = ({ stars }) => (
  <div className="text-yellow-500 text-lg">
    {'★'.repeat(stars)}
    {'☆'.repeat(5 - stars)}
  </div>
);

const ReviewsSlider = () => {
  return (
    <>
    <div className='bg-white relative z-30 h-5 w-full'></div>
     <div className="bg-black bg-opacity-70 relative z-30 flex justify-center items-center h-16 lg:h-24">
        <h1
          data-aos="fade-up"
          
          className="text-white font-medium lg:text-4xl text-2xl"
        >
          WHAT OUR CLIENTS SAY
        </h1>
      </div>
    <div className='relative z-30 w-full bg-white lg:p-5 lg:pb-1'>
    
    <section className="w-full mx-auto p-10  ">
     

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-50 rounded-xl shadow-md p-6 m-2 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
              <div>
                <p className="text-gray-700 text-base mb-4">"{item.review}"</p>
                <StarRating stars={item.stars} />
              </div>
              <div className="mt-6 pt-4 border-t">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <CompanyStats/>
    </div>
    </>
  );
};

export default ReviewsSlider;

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './MomentsCoverflow.css';

const SHOWCASE_MOMENTS = [
  {
    id: 'moment-01',
    image: '/assets/gallery/gallery-01.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT team and student leaders at campus flagship event',
    caption: 'Student Innovation Summit',
    crop: '50% 25%',
  },
  {
    id: 'moment-02',
    image: '/assets/gallery/gallery-02.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT entrepreneurship conclave and speaker masterclass',
    caption: 'Founder Circles & Keynotes',
    crop: '50% 30%',
  },
  {
    id: 'moment-03',
    image: '/assets/gallery/gallery-03.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT hackathon and rapid prototyping marathon',
    caption: '36-Hour Sprint Nights',
    crop: '50% 35%',
  },
  {
    id: 'moment-04',
    image: '/assets/gallery/gallery-04.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT student founders pitching early-stage ventures',
    caption: 'Eureka Pitch Battles',
    crop: '50% 30%',
  },
  {
    id: 'moment-05',
    image: '/assets/gallery/gallery-05.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT workshop and hands-on venture strategy session',
    caption: 'Ideation to Launch Workshop',
    crop: '50% 30%',
  },
  {
    id: 'moment-06',
    image: '/assets/gallery/gallery-06.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT core team celebrating milestones and community impact',
    caption: 'Community & Culture',
    crop: '50% 35%',
  },
  {
    id: 'moment-07',
    image: '/assets/gallery/gallery-07.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT mentorship conclave with industry operators',
    caption: 'Mentorship & Advisory',
    crop: '50% 25%',
  },
  {
    id: 'moment-09',
    image: '/assets/gallery/gallery-09.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT campus entrepreneurial conclave and award ceremony',
    caption: 'Annual Entrepreneurship Day',
    crop: '50% 30%',
  },
  {
    id: 'moment-10',
    image: '/assets/gallery/gallery-10.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT innovators collaborating on deep-tech solutions',
    caption: 'Builders & Co-Founders',
    crop: '50% 35%',
  },
  {
    id: 'moment-14',
    image: '/assets/gallery/gallery-14.jpg',
    fallback: '/assets/hero/hero-bg.jpg',
    alt: 'E-Cell RCPIT alumni and mentors guiding ambitious student startups',
    caption: 'Alumni Network & Growth',
    crop: '50% 35%',
  },
];

export default function MomentsCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="ecell-showcase-carousel" id="moments">
      <div className="ecell-showcase-container">
        
        {/* Editorial Section Header (starts directly with title) */}
        <div className="ecell-showcase-header">
          <h2 className="ecell-showcase-title">
            Moments That <span className="ecell-showcase-accent">Move Us</span>
          </h2>
          <p className="ecell-showcase-desc">
            Snapshots from the people, events and experiences that shape the E-Cell RCPIT community.
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="ecell-coverflow-wrapper">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="ecell-coverflow-swiper"
          >
            {SHOWCASE_MOMENTS.map((moment, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <SwiperSlide key={moment.id} className="ecell-coverflow-slide">
                  <div className={`ecell-coverflow-card ${isCurrent ? 'is-active-card' : ''}`}>
                    <img
                      src={moment.image}
                      alt={moment.alt}
                      loading="lazy"
                      style={{ objectPosition: moment.crop }}
                      onError={(e) => {
                        if (e.currentTarget.src !== window.location.origin + moment.fallback) {
                          e.currentTarget.src = moment.fallback;
                        }
                      }}
                    />
                    <div className="ecell-coverflow-card-sheen" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

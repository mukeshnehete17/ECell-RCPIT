import { useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Keyboard } from 'swiper/modules';
import TeamCards from '../TeamCards/TeamCards';
import { MOMENTS_MANIFEST, getNormalizedMoments } from './momentsData';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './MomentsCoverflow.css';

const ChevronLeft = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function MomentsCoverflow() {
  const swiperRef = useRef(null);

  // Normalize moments from manifest so arbitrary string paths or objects work seamlessly
  const momentsList = useMemo(() => {
    return getNormalizedMoments(MOMENTS_MANIFEST);
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="ecell-showcase-carousel" id="moments">
      <div className="ecell-showcase-container">
        
        {/* Editorial Section Header */}
        <div className="ecell-showcase-header">
          <h2 className="ecell-showcase-title">
            Moments That <span className="ecell-showcase-accent">Move Us</span>
          </h2>
          <p className="ecell-showcase-desc">
            Snapshots from the people, events and experiences that shape the E-Cell RCPIT community.
          </p>
        </div>

        {/* 2-3-2 Geometric Leadership Team Cards */}
        <TeamCards />

        {/* 3D Coverflow Carousel — Scalable Infinite Carousel */}
        <div className="ecell-coverflow-wrapper">
          
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            speed={650}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 140,
              modifier: 1,
              scale: 0.88,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay, Keyboard]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="ecell-coverflow-swiper"
          >
            {momentsList.map((moment, idx) => (
              <SwiperSlide key={`${moment.id}-${idx}`} className="ecell-coverflow-slide">
                <div className="ecell-coverflow-card">
                  <img
                    src={moment.src}
                    alt={moment.alt}
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.src !== window.location.origin + '/assets/hero/hero-bg.jpg') {
                        e.currentTarget.src = '/assets/hero/hero-bg.jpg';
                      }
                    }}
                  />
                  <div className="ecell-coverflow-card-sheen" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Minimalist Manual Navigation Controls */}
          <div className="ecell-coverflow-nav-controls">
            <button
              type="button"
              onClick={handlePrev}
              className="ecell-coverflow-nav-btn"
              aria-label="Previous moment"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="ecell-coverflow-nav-btn"
              aria-label="Next moment"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

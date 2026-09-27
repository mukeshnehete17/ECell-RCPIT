import { useEffect, useRef, useState } from 'react';
import './Gallery.css';

/*
  ============================================================
  EDITORIAL 3D SCROLL-DRIVEN GALLERY — E-CELL RCPIT
  ============================================================
  - Refined Editorial Header: "Beyond the Frame"
  - 3-Column Independent Parallax
  - 10-Dot Pagination Indicator
*/

const COLUMNS = [
  {
    id: 'col-left',
    type: 'left',
    rotY: -2.5,
    items: [
      { id: 'gallery-01', fallback: '/assets/gallery/gallery-01.jpg', crop: '50% 25%' },
      { id: 'gallery-02', fallback: '/assets/gallery/gallery-02.jpg', crop: '50% 35%' },
      { id: 'gallery-03', fallback: '/assets/gallery/gallery-03.jpg', crop: '50% 40%' },
      { id: 'gallery-04', fallback: '/assets/gallery/gallery-04.jpg', crop: '50% 30%' },
    ],
  },
  {
    id: 'col-center',
    type: 'center',
    rotY: 0,
    items: [
      { id: 'gallery-05', fallback: '/assets/gallery/gallery-05.jpg', crop: '50% 30%' },
      { id: 'gallery-06', fallback: '/assets/gallery/gallery-06.jpg', crop: '50% 40%' },
      { id: 'gallery-07', fallback: '/assets/gallery/gallery-07.jpg', crop: '50% 25%' },
      { id: 'gallery-08', fallback: '/assets/gallery/gallery-14.jpg', crop: '50% 35%' },
      { id: 'gallery-09', fallback: '/assets/gallery/gallery-09.jpg', crop: '50% 30%' },
    ],
  },
  {
    id: 'col-right',
    type: 'right',
    rotY: 2.5,
    items: [
      { id: 'gallery-10', fallback: '/assets/gallery/gallery-10.jpg', crop: '50% 35%' },
      { id: 'gallery-11', fallback: '/assets/gallery/gallery-11.jpg', crop: '50% 30%' },
      { id: 'gallery-12', fallback: '/assets/gallery/gallery-12.jpg', crop: '50% 40%' },
      { id: 'gallery-13', fallback: '/assets/gallery/gallery-13.jpg', crop: '50% 25%' },
    ],
  },
];

const TOTAL_DOTS = 10;

export default function Gallery() {
  const scrollWrapperRef = useRef(null);
  const gridRef = useRef(null);
  const columnRefs = useRef([]);
  const activeDotRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    const grid = gridRef.current;
    const columns = columnRefs.current.filter(Boolean);

    if (!scrollWrapper || !grid || columns.length === 0) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let ticking = false;
    let isDestroyed = false;

    // Evaluate once per mount (not per animation frame)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = motionQuery.matches;
    const handleMotionChange = (e) => {
      reducedMotionRef.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    function calculateGalleryProgress() {
      const rect = scrollWrapper.getBoundingClientRect();
      const scrollDistance = scrollWrapper.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return 0;

      // Progress: 0 at top when entering -> 1 at bottom when completing
      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
      return progress;
    }

    function applyTransforms(p) {
      // RotateX: 75deg -> 0deg (unfolds toward viewer as user scrolls down)
      const rotateX = 75 - p * 75;

      // Scale: 1.15 -> 1.0 (settles into natural scale as user scrolls down)
      const scale = 1.15 - p * 0.15;

      grid.style.transform = `rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

      // Column Y translations moving toward final aligned positions
      // Left: -10% -> 2%
      // Center: 15% -> 5%
      // Right: -10% -> 2%
      const leftY = -10 + p * 12;
      const centerY = 15 - p * 10;
      const rightY = -10 + p * 12;

      const columnYs = [leftY, centerY, rightY];

      columns.forEach((col, idx) => {
        const colData = COLUMNS[idx];
        if (!colData) return;

        const yPercent = columnYs[idx] || 0;
        const currentRotY = (colData.rotY * (1 - p * 0.7)).toFixed(2);
        const tz = colData.type === 'center' ? '12px' : '-6px';

        col.style.transform = `translate3d(0, ${yPercent.toFixed(2)}%, ${tz}) rotateY(${currentRotY}deg)`;
      });

      // Update active pagination dot — setState only when it actually changes
      const dotIndex = Math.min(TOTAL_DOTS - 1, Math.floor(p * TOTAL_DOTS));
      if (dotIndex !== activeDotRef.current) {
        activeDotRef.current = dotIndex;
        setActiveDot(dotIndex);
      }
    }

    function renderGallery() {
      if (isDestroyed) return;

      if (reducedMotionRef.current) {
        grid.style.transform = 'none';
        columns.forEach((col) => {
          col.style.transform = 'none';
        });
        ticking = false;
        return;
      }

      // Responsive 0.20 lerp factor
      currentProgress += (targetProgress - currentProgress) * 0.20;

      applyTransforms(currentProgress);

      if (Math.abs(targetProgress - currentProgress) > 0.0005) {
        requestAnimationFrame(renderGallery);
      } else {
        currentProgress = targetProgress;
        applyTransforms(currentProgress);
        ticking = false;
      }
    }

    function updateScrollTarget() {
      targetProgress = calculateGalleryProgress();

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(renderGallery);
      }
    }

    // Initial calculation
    targetProgress = calculateGalleryProgress();
    currentProgress = targetProgress;
    applyTransforms(currentProgress);

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('resize', updateScrollTarget, { passive: true });

    return () => {
      isDestroyed = true;
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('resize', updateScrollTarget);
    };
  }, []);

  return (
    <section className="ecell-gallery" id="gallery">
      {/* Refined Editorial Heading */}
      <div className="ecell-gallery__header">
        <h2 className="ecell-gallery__title">Beyond the Frame</h2>
        <p className="ecell-gallery__subtext">
          Moments, people and milestones from the E-Cell RCPIT journey.
        </p>
      </div>

      {/* 3D Animated Scroll Scene */}
      <div className="ecell-gallery__scroll" ref={scrollWrapperRef}>
        <div className="ecell-gallery__sticky">
          
          {/* 3D Editorial Photographic Grid */}
          <div className="ecell-gallery__grid-wrapper">
            <div className="ecell-gallery__grid" ref={gridRef}>
              {COLUMNS.map((col, colIdx) => (
                <div
                  key={col.id}
                  className={`ecell-gallery__column ecell-gallery__column--${col.type}`}
                  ref={(el) => {
                    columnRefs.current[colIdx] = el;
                  }}
                >
                  {col.items.map((item) => (
                    <div key={item.id} className="ecell-gallery__item">
                      <img
                        src={`/assets/gallery/${item.id}.jpg`}
                        alt=""
                        loading="lazy"
                        style={{ objectPosition: item.crop }}
                        onError={(e) => {
                          if (e.currentTarget.src !== window.location.origin + item.fallback) {
                            e.currentTarget.src = item.fallback;
                          } else if (e.currentTarget.src !== window.location.origin + '/assets/hero/hero-bg.jpg') {
                            e.currentTarget.src = '/assets/hero/hero-bg.jpg';
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Editorial Pagination Indicator */}
          <div className="ecell-gallery__pagination">
            {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
              <span
                key={`dot-${i}`}
                className={`ecell-gallery__dot ${activeDot === i ? 'is-active' : ''}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

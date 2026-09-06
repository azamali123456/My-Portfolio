import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../style/mystyle.module.css';

const allTestimonials = [
  {
    id: 9,
    name: 'Upwork Client',
    role: 'Upwork Client | 5.0/5',
    text: 'Azam did a great job fixing the mobile responsiveness issues on our Next.js website. He delivered quickly, communicated well, and everything worked as expected. Highly recommended!',
  },
  {
    id: 10,
    name: 'Upwork Client',
    role: 'Upwork Client | 5.0/5',
    text: 'Azam delivered excellent work and completed the project on time. Communication was smooth, and he was professional throughout the project. He understood the requirements well and implemented everything correctly. I would definitely recommend him and would be happy to work with him again in the future.',
  },
  {
    id: 11,
    name: 'Upwork Client',
    role: 'Quotation Platform Client | 5.0/5',
    text: 'I had a great experience working with Azam. He is highly skilled, dedicated, and professional in his approach. Throughout the project, he maintained clear communication, delivered quality work on time, and handled challenges efficiently. What stood out the most was his willingness to go the extra mile and his problem-solving abilities. Working with him felt like collaborating with a friend and a brother. I highly recommend him to anyone looking for a reliable and talented developer. Looking forward to working together again in the future!',
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Testimonials() {
  const items = useMemo(() => shuffle(allTestimonials), []);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), [items.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + items.length) % items.length), [items.length]);

  const timerRef = useRef(null);
  const startAuto = useCallback(() => {
    timerRef.current = setInterval(next, 4000);
  }, [next]);
  const resetAuto = useCallback(() => {
    clearInterval(timerRef.current);
    startAuto();
  }, [startAuto]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  const t = items[current];

  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionEyebrow}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>
          Reviews
        </div>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.sectionSubtitle}>
          What clients and collaborators say about working with me.
        </p>
      </div>

      <div className={styles.testSlider}>
        <button className={styles.testNavBtn} onClick={() => { prev(); resetAuto(); }} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="#3FFF00">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>

        <div className={styles.testSliderViewport}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              className={styles.testSliderCard}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <div className={styles.testimonialOrbit} />
              <div className={styles.testimonialQuoteIcon}>
                <svg width="32" height="32" viewBox="0 0 16 16" fill="#3FFF00">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
                </svg>
              </div>
              <p className={styles.testSliderText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <svg width="36" height="36" fill="#3FFF00" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </div>
                <div>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.testNavBtn} onClick={() => { next(); resetAuto(); }} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="#3FFF00">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>

      <div className={styles.testDots}>
        {items.map((_, i) => (
          <button
            key={i}
            className={`${styles.testDot} ${i === current ? styles.testDotActive : ''}`}
            onClick={() => { setCurrent(i); resetAuto(); }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

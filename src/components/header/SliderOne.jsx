import { useState } from 'react';
import styles from './slider.module.scss';

const food = [
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',
    title: 'just grill it',
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg2.png',
    title: 'out of oven',
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',
    title: 'test two grill',
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg2.png',
    title: 'test two pizza',
  },
];
function SliderOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = food;

  function handleChangeSlides(index) {
    setActiveIndex(index);
  }
  return (
    <>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              activeIndex === index
                ? `${styles.activeSlide} ${styles.slide}`
                : `${styles.slide}`
            }
          >
            <div>
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
            </div>
            <img
              src={slide.img}
              alt={slide.title}
              className={styles.sliderImg}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      <div>
        {slides.map((_, index) => (
          <span
            key={index}
            className={activeIndex === index ? `${styles.activeBtn}` : ''}
            onClick={() => handleChangeSlides(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}

export default SliderOne;

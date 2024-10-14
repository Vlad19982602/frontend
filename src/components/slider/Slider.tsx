import React, { useEffect, useState } from "react";
import "./Slider.css"; // Импорт стилей для слайдера

/**
 * SliderItem component that represents a single slide with a text and an optional image.
 *
 * @component
 * @param {object} props - Props for the SliderItem component

/**
 * Slider component that displays a series of slides with benefits of working with us, including images.
 *
 * @component
 * @example
 * return (
 *   <Slider />
 * )
 */
const Slider: React.FC = () => {
  const slides = [
    {
      text: "Преимущество 1: Высокое качество работы",
      img: "path/to/image1.jpg",
    },
    { text: "Преимущество 2: Конкурентные цены", img: "path/to/image2.jpg" },
    {
      text: "Преимущество 3: Быстрые сроки выполнения",
      img: "path/to/image3.jpg",
    },
    {
      text: "Преимущество 4: Индивидуальный подход к каждому клиенту",
      img: "path/to/image4.jpg",
    },
    {
      text: "Преимущество 5: Поддержка после завершения проекта",
      img: "path/to/image5.jpg",
    },
    {
      text: "Отзывы клиентов:",
      img: "path/to/image6.jpg", // Можно оставить изображение или использовать пустое место
      reviews: [
        'Игорь: "Отличная работа! Рекомендую всем!"',
        'Анна: "Профессиональный подход и высокое качество!"',
        'Сергей: "Все сделано в срок и без лишних вопросов!"',
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Смена слайда каждые 3 секунды

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index} onClick={() => goToSlide(index)}>
            <img src={slide.img} alt={slide.text} className="slide-image" />
            <div className="slide-text">{slide.text}</div>
            {slide.reviews && (
              <div className="reviews">
                {slide.reviews.map((review, idx) => (
                  <p key={idx} className="review-text">
                    {review}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

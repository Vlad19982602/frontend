import React, { useState } from "react";
import "./Examples.css";

/**
 * Examples component that displays completed projects with a toggle button.
 *
 * @component
 * @example
 * return (
 *   <Examples />
 * )
 */
const Examples: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Количество визуализируемых объектов

  const examples = [
    {
      title: 'Квартира в жилом комплексе "Ньютон" г. Челябинск',
      description: "Поставка, монтаж систем вентиляции и кондиционирования.",
      type: "КВАРТИРА",
      link: "/newton1",
      imgSrc:
        "https://static.tildacdn.com/tild3162-3962-4137-b234-303631336363/3ca66266520678bf6ca9.jpg",
    },
    {
      title: 'Частный жилой дом в посёлке "Лесной Остров" г. Челябинск',
      description: "Поставка, монтаж систем вентиляции и кондиционирования.",
      type: "ЧАСТНЫЙ ДОМ",
      link: "/lesnoy_ostrov2",
      imgSrc:
        "https://static.tildacdn.com/tild3833-3934-4463-b036-363664626537/0-02-05-3b56fc96687e.jpg",
    },
    {
      title: 'Частный жилой дом в посёлке "Лесной Остров" г. Челябинск',
      description: "Поставка, монтаж систем вентиляции и кондиционирования.",
      type: "ЧАСТНЫЙ ДОМ",
      link: "/lesnoy_ostrov1",
      imgSrc:
        "https://static.tildacdn.com/tild3637-3338-4631-b537-343664636237/WhatsApp_Image_2020-.jpeg",
    },
    {
      title: 'Ресторан "Хачапури тётушки Марико" г. Санкт-Петербург',
      description: "Поставка, монтаж систем вентиляции и кондиционирования.",
      type: "РЕСТОРАН",
      link: "/marikospb_ventilation",
      imgSrc:
        "https://static.tildacdn.com/tild6137-6463-4463-b765-396334623562/______281222.png",
    },
    {
      title: 'Медицинское учреждение "Стоматологическая здравница"',
      description: "Поставка, монтаж систем вентиляции и кондиционирования.",
      type: "МЕДИЦИНСКОЕ УЧРЕЖДЕНИЕ",
      link: "/stomzdrav_ventilation",
      imgSrc:
        "https://static.tildacdn.com/tild6533-6337-4533-a238-383831623333/vrach1-min.png",
    },
    {
      title: 'ОГАУ "МФЦ Челябинской области"',
      description: "Поставка, монтаж систем кондиционирования.",
      type: "ОФИС",
      link: "/mfc_conditioning",
      imgSrc:
        "https://static.tildacdn.com/tild6130-6339-4736-a438-333632356237/f240063006536f2381f2.jpg",
    },
    {
      title: 'Производство "Чебаркульская птица"',
      description: "Поставка и монтаж систем аспирации.",
      type: "ПРОИЗВОДСТВО",
      link: "/aspiration_chebarkul",
      imgSrc:
        "https://static.tildacdn.com/tild3361-3537-4566-a562-663233643235/photo.jpg",
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Увеличиваем количество отображаемых объектов на 3
  };

  return (
    <div className="examples-section">
      <div className="examples__list">
        {examples.slice(0, visibleCount).map((example, index) => (
          <div className="example__card" key={index}>
            <a href={example.link} className="example__link">
              <div
                className="example__img"
                style={{ backgroundImage: `url(${example.imgSrc})` }}
              ></div>
              <div className="example__text">
                <div className="example__uptitle">{example.type}</div>
                <div className="example__title">{example.title}</div>
                <div className="example__descr">{example.description}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {visibleCount < examples.length && (
        <button className="examples__show-more-button" onClick={handleShowMore}>
          Показать еще
        </button>
      )}
    </div>
  );
};

export default Examples;

import React, { useRef, useState, useEffect } from "react";
import "./Calculator.css";

/**
 * Calculator component that acts as a slider for asking questions in a modal.
 *
 * @component
 * @example
 * return (
 *   <Calculator />
 * )
 */
const Calculator: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [area, setArea] = useState(90); // Начальное значение для площади
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Состояние для выбранного варианта
  const modalRef = useRef<HTMLDivElement>(null); // Реф для модального окна
  const [location, setLocation] = useState(""); // Состояние для месторасположения

  const questions = [
    {
      question: "Тип помещения",
      options: [
        "Офис",
        "Бассейн",
        "Магазин/ТК",
        "Квартира",
        "Кафе/Ресторан/Бар",
        "Пром. помещение/Цех",
        "Гостиница",
        "Мед. учреждение",
      ],
    },
    {
      question: "Площадь помещения (квадратные метры)?",
      range: true,
      min: 10,
      max: 1000,
      step: 5,
      value: area,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setArea(Number(e.target.value)),
    },
    {
      question: "Какую задачу должна решать вентиляция?",
      options: [
        "Подача чистого воздуха в помещение вентиляционной установкой с автоматизацией управления",
        "Изменение и поддержание температуры воздуха",
        "Осушение воздуха (уменьшение влажности)",
      ],
    },
    {
      question: "В каком месяце необходимо запустить систему в работу?",
      options: [
        "В течение 2-6 месяцев",
        "В течение 1 года",
        "По составлению плана и сметы",
      ],
    },
    {
      question: "Месторасположение объекта?",
      textarea: true,
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Сброс выбранного варианта при переходе к следующему вопросу
    } else {
      setShowCalculator(false); // Закрыть калькулятор после последнего вопроса
      setCurrentQuestion(0); // Сбросить текущий вопрос
      setLocation(""); // Сброс месторасположения
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Сброс выбранного варианта при переходе к предыдущему вопросу
    } else {
      setShowCalculator(false); // Закрыть калькулятор при нажатии "Назад" на первом вопросе
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // Установка выбранного варианта
    handleNext(); // Переход к следующему вопросу
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocation(e.target.value); // Установка месторасположения
    handleNext(); // Закрытие модального окна после ответа
  };

  const current = questions[currentQuestion]; // Сохранение текущего вопроса

  // Обработка кликов вне модального окна
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowCalculator(false);
      }
    };

    if (showCalculator) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalculator]);

  return (
    <section className="calculator page__section">
      <div className="calculator__wrapper wrapper">
        <h2 className="calculator__title">РАССЧИТАЙТЕ СТОИМОСТЬ ВЕНТИЛЯЦИИ!</h2>
        <button
          className="calculator__button"
          onClick={() => setShowCalculator(true)}
        >
          Перейти к калькулятору
        </button>

        {showCalculator && (
          <div className="modal">
            <div className="modal__content" ref={modalRef}>
              <h2 className="modal__header">
                Ответьте на 5 простых вопросов, которые помогут нам составить
                точную смету для Вашего объекта.
              </h2>
              <h2 className="calculator__question">{current.question}</h2>
              {current.options ? (
                <ul className="calculator__options">
                  {current.options.map((option, index) => (
                    <li
                      key={index}
                      className={`calculator__option ${
                        selectedOption === option ? "selected" : ""
                      }`}
                      onClick={() => handleOptionSelect(option)} // Обработка выбора варианта
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              ) : current.textarea ? (
                <textarea
                  name="Месторасположение объекта"
                  placeholder="Город, район, улица"
                  className="t-input js-tilda-rule t-input_bbonly"
                  style={{
                    color: "#252c35",
                    border: "1px solid #252c35",
                    backgroundColor: "#f3f2f1",
                    height: "34px",
                    width: "100%",
                  }}
                  rows={1}
                  onChange={handleLocationChange} // Обработка изменения месторасположения
                />
              ) : (
                <div className="calculator__range">
                  <input
                    type="range"
                    min={current.min}
                    max={current.max}
                    step={current.step}
                    value={area}
                    onChange={current.onChange}
                    className="t-range js-tilda-rule"
                    style={{ width: "100%" }}
                  />
                  <div className="t-range__value-txt t-descr t-descr_xxs">
                    {area}
                  </div>
                  <div className="t-range__interval-txt-wrapper">
                    <div
                      className="t-range__interval-txt t-range__interval-txt_min t-descr t-descr_xxs"
                      style={{ color: "#252c35" }}
                    >
                      {current.min}
                    </div>
                    <div
                      className="t-range__interval-txt t-range__interval-txt_max t-descr t-descr_xxs"
                      style={{ color: "#252c35" }}
                    >
                      {current.max}
                    </div>
                  </div>
                </div>
              )}
              <div className="calculator__navigation">
                <button onClick={handlePrev} disabled={currentQuestion === 0}>
                  Назад
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                >
                  Далее
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;

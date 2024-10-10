import React, { useEffect, useState } from "react";
import "./VentilationSystems.css";

/**
 * VentilationSystems component that displays information about ventilation systems.
 *
 * @component
 * @example
 * return (
 *   <VentilationSystems />
 * )
 */
const VentilationSystems: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "надежные, эстетичные, эффективные"; // Полный текст для анимации
  const [index, setIndex] = useState(0); // Индекс текущего символа

  useEffect(() => {
    const typing = () => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText(""); // Очищаем текст для следующего цикла
          setIndex(0); // Сброс индекса
        }, 1000); // Задержка перед перезапуском
      }
    };

    const animationFrame = requestAnimationFrame(typing);

    return () => {
      cancelAnimationFrame(animationFrame); // Очистка анимации при размонтировании
    };
  }, [index, fullText]); // Запуск эффекта при изменении индекса и полного текста

  return (
    <div className="ventilation-container">
      <div
        className="ventilation-cover__wrapper t-valign_bottom"
        style={{ height: "617.6px" }}
      >
        <div data-hook-content="covercontent">
          <div className="ventilation__uptitle t-uptitle t-uptitle_sm t-col t-col_8">
            <div
              style={{ fontSize: "14px", lineHeight: "16px", color: "#ffffff" }}
              data-customstyle="yes"
            >
              Системы вентиляции помещений в Челябинске и Челябинской области
              <br />
              <br />
            </div>
          </div>
          <div className="ventilation__col t-col t-col_8">
            <div className="ventilation__title t-title t-title_md">
              <div style={{ fontSize: "52px" }} data-customstyle="yes">
                Свежий воздух без пыли, запахов, дыма в Вашем доме и на
                производстве с гарантией 3 года
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="ventilation__col t-col t-col_4">
            <div className="ventilation__descr t910__descr t910__descr_center t-descr t-descr_xxxl">
              Создаём <span style={{ color: "#76b82a" }}>{typedText}</span>{" "}
              климатические системы по разумной цене
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentilationSystems;

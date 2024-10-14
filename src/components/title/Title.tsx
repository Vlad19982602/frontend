import React from "react";
import "./ExamplesTitle.css";

/**
 * ExamplesTitle component that displays a title for the section.
 *
 * @component
 * @example
 * return (
 *   <ExamplesTitle />
 * )
 */
const ExamplesTitle: React.FC = () => {
  return (
    <div className="examples-title">
      <strong>ПРИМЕРЫ ВЫПОЛНЕННЫХ ОБЪЕКТОВ</strong>
    </div>
  );
};

export default ExamplesTitle;

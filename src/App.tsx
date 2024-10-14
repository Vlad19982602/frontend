import React from "react";
import Calculator from "./components/calculator/Calculator";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Subheader from "./components/subheader/Subheader";
import VentilationSystems from "./components/ventilationSystem/VentilationSystems";
import Title from "./components/title/Title"; // Импорт нового компонента
import Examples from "./components/examples/Examples"; // Импорт нового компонента
import Slider from "./components/slider/Slider";
import "./style/style.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Subheader />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar />
        <Sidebar />
        <Sidebar />
        <Sidebar />
      </div>
      <div className="main-content">
        <main>
          <VentilationSystems />
        </main>
      </div>
      <div className="container">
        <Calculator />
        <Title /> {/* Использование нового компонента */}
        <Examples /> {/* Использование нового компонента */}
        <Slider /> {/* Использование нового компонента */}
      </div>
    </React.Fragment>
  );
};

export default App;

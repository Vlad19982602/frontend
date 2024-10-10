import React from "react";
import "./style/style.css";
import Header from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";
import Sidebar from "./components/sidebar/Sidebar";
import Calculator from "./components/calculator/Calculator";
import VentilationSystems from "./components/ventilationSystem/VentilationSystems";

const App: React.FC = () => {
  return (
    <>
      <div>
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
            <Calculator />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;

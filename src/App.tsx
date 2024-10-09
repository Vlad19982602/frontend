import React from "react";
import "./style/style.css";
import Header from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";
import Sidebar from "./components/sidebar/Sidebar";
import Calculator from "./components/calculator/Calculator";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Subheader />
      <div className="main-content">
        <Sidebar />
        <main>
          <Calculator />
        </main>
      </div>
    </div>
  );
};

export default App;

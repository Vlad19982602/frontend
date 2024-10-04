import React from "react";
import "./style/style.css";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Subheader />
      {/* Остальная часть приложения */}
    </div>
  );
};

export default App;

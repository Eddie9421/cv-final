import { useState } from "react";
import "../styles/App.css";
import Section from "./Section.jsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-teal-950">
      <h1 className="mt-16 font-medium text-shadow-lg dark:text-white ">
        Bad CV Maker
      </h1>
      <Section></Section>
    </div>
  );
}

export default App;

import { useState } from "react";
import "../styles/App.css";
import Section from "./Section.jsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-16 font-medium text-shadow-lg">Bad CV Maker</h1>
      <Section sectionName="General Info">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="border-[1px]"></input>
      </Section>
    </div>
  );
}

export default App;

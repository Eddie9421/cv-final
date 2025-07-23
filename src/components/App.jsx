import { useState } from "react";
import "../styles/App.css";
import Section from "./Section.jsx";
import InputField from "./InputField.jsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-16 font-medium text-shadow-lg">Bad CV Maker</h1>
      <Section sectionName="General Info">
        <InputField id="name" labelText="Name:" type="text" />
        <InputField id="email" labelText="Email:" type="email" />
        <InputField id="phone-number" labelText="Phone number:" type="tel" />
      </Section>
      <Section sectionName="Educational Info">
        <InputField id="school-name" labelText="School name:" type="text" />
        <InputField
          id="title-of-study"
          labelText="Title of study:"
          type="text"
        />
        <InputField id="date-of-study" labelText="Date of study:" type="date" />
      </Section>
    </div>
  );
}

export default App;

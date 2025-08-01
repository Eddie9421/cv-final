import { useState } from "react";
import "../styles/App.css";
import Section from "./Section.jsx";
import InputField from "./InputField.jsx";

function App() {
  const [editingMode, setEditingMode] = useState(true);

  if (editingMode) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 font-medium text-shadow-lg">Bad CV Maker</h1>
        <form action="">
          <Section sectionName="General Info">
            <InputField id="name" labelText="Name:" type="text" />
            <InputField id="email" labelText="Email:" type="email" />
            <InputField
              id="phone-number"
              labelText="Phone number:"
              type="tel"
            />
          </Section>
          <Section sectionName="Educational Info">
            <InputField id="school-name" labelText="School name:" type="text" />
            <InputField
              id="title-of-study"
              labelText="Title of study:"
              type="text"
            />
            <InputField
              id="date-of-study"
              labelText="Date of study:"
              type="date"
            />
          </Section>
          <Section sectionName="Practical Experience">
            <InputField
              id="company-name"
              labelText="Company name:"
              type="text"
            />
            <InputField
              id="position-title"
              labelText="Position title:"
              type="text"
            />
            <InputField
              id="main-responsibilities"
              labelText="Main responsibilities:"
              type="text"
            />
            <InputField id="date-from" labelText="Date from:" type="date" />
            <InputField id="date-until" labelText="Date until:" type="date" />
          </Section>
        </form>
      </div>
    );
  }
}

export default App;

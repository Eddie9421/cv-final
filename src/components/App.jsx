import { useState } from "react";
import "../styles/App.css";
import Section from "./Section.jsx";
import InputField from "./InputField.jsx";

function App() {
  const [editingMode, setEditingMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "phone-number": "",
    "school-name": "",
    "title-of-study": "",
    "date-of-study": "",
    "company-name": "",
    "position-title": "",
    "main-responsibilities": "",
    "date-from": "",
    "date-until": "",
  });

  function handleChange(id, value) {
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  if (editingMode) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 font-medium text-shadow-lg">CV Maker</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setEditingMode(false);
          }}
        >
          <Section sectionName="General Info">
            <InputField
              id="name"
              labelText="Name:"
              type="text"
              onChange={handleChange}
              value={formData.name}
            />
            <InputField
              id="email"
              labelText="Email:"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
            <InputField
              id="phone-number"
              labelText="Phone number:"
              type="tel"
              onChange={handleChange}
              value={formData["phone-number"]}
            />
          </Section>
          <Section sectionName="Educational Info">
            <InputField
              id="school-name"
              labelText="School name:"
              type="text"
              onChange={handleChange}
              value={formData["school-name"]}
            />
            <InputField
              id="title-of-study"
              labelText="Title of study:"
              type="text"
              onChange={handleChange}
              value={formData["title-of-study"]}
            />
            <InputField
              id="date-of-study"
              labelText="Date of study:"
              type="date"
              onChange={handleChange}
              value={formData["date-of-study"]}
            />
          </Section>
          <Section sectionName="Practical Experience">
            <InputField
              id="company-name"
              labelText="Company name:"
              type="text"
              onChange={handleChange}
              value={formData["company-name"]}
            />
            <InputField
              id="position-title"
              labelText="Position title:"
              type="text"
              onChange={handleChange}
              value={formData["position-title"]}
            />
            <InputField
              id="main-responsibilities"
              labelText="Main responsibilities:"
              type="text"
              onChange={handleChange}
              value={formData["main-responsibilities"]}
            />
            <InputField
              id="date-from"
              labelText="Date from:"
              type="date"
              onChange={handleChange}
              value={formData["date-from"]}
            />
            <InputField
              id="date-until"
              labelText="Date until:"
              type="date"
              onChange={handleChange}
              value={formData["date-until"]}
            />
          </Section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  } else {
    return (
      <>
        <h1>{formData.name}</h1>
        <h2>Contact Details</h2>
        <ul>
          <li>Email Address: {formData.email}</li>
          <li>Phone Number: {formData["phone-number"]}</li>
        </ul>
        <h2>Education</h2>
        <p>{formData["school-name"]}</p>
        <p>{formData["title-of-study"]}</p>
        <p>{formData["date-of-study"]}</p>
        <h2>Experience</h2>
        <p>{formData["company-name"]}</p>
        <p>{formData["position-title"]}</p>
        <p>{formData["main-responsibilities"]}</p>
        <p>
          {formData["date-from"]} - {formData["date-until"]}
        </p>
        <button onClick={() => setEditingMode(true)}>Edit</button>
      </>
    );
  }
}

export default App;

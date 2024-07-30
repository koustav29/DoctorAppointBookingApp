import React, { useState } from "react";
import "./TestOffered.css";
import Sidebar from "../Sidebar";

function TestOffered() {
  const [tests, setTests] = useState([
    { name: "Blood Test", description: "Complete blood count", price: "1300" },
    { name: "Urine Analysis", description: "Urinalysis test", price: "500" },
    { name: "X-Ray", description: "Chest X-ray", price: "1100" },
  ]);

  const [newTest, setNewTest] = useState({
    name: "",
    description: "",
    sampleName: "",
    sampleType: "",
    vialName: "",
    preparationTime: "",
    price: "",
    sampleCollection: [],
    availability: [],
    features: [],
    availableTimeSlots: [],
  });

  const [days, setDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const [timeSlots, setTimeSlots] = useState({
    "9AM - 10AM": false,
    "10AM - 11AM": false,
    "11AM - 12PM": false,
    "12PM - 1PM": false,
    "1PM - 2PM": false,
    "2PM - 3PM": false,
    "3PM - 4PM": false,
    "4PM - 5PM": false,
    "5PM - 6PM": false,
    "6PM - 7PM": false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTest({
      ...newTest,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setNewTest((prevDetails) => {
      const newValues = checked
        ? [...prevDetails[name], value]
        : prevDetails[name].filter((val) => val !== value);
      return { ...prevDetails, [name]: newValues };
    });
  };

  const addTest = () => {
    setTests([...tests, newTest]);
    setNewTest({
      name: "",
      description: "",
      sampleName: "",
      sampleType: "",
      vialName: "",
      preparationTime: "",
      price: "",
      sampleCollection: [],
      availability: [],
      features: [],
      availableTimeSlots: [],
    });
  };

  const deleteTest = (index) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      tests,
    };

    console.log("Payload:", payload);

    // Replace with your POST request logic
    fetch("https://your-api-endpoint.com/save-test-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="TestOffered">
        <section className="tests-offered">
          <h2>Tests Offered</h2>
          <form>
            <div className="form-row">
              <div className="column">
                <label>Test Name</label>
                <input
                  type="text"
                  name="name"
                  value={newTest.name}
                  onChange={handleInputChange}
                  placeholder="Enter Test Name"
                />
              </div>
              <div className="column">
                <label>Test Description</label>
                <input
                  type="text"
                  name="description"
                  value={newTest.description}
                  onChange={handleInputChange}
                  placeholder="Enter Test Description"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="column">
                <label>Sample Name</label>
                <input
                  type="text"
                  name="sampleName"
                  value={newTest.sampleName}
                  onChange={handleInputChange}
                  placeholder="Enter Sample Name"
                />
              </div>
              <div className="column">
                <label>Sample Type</label>
                <input
                  type="text"
                  name="sampleType"
                  value={newTest.sampleType}
                  onChange={handleInputChange}
                  placeholder="Choose Sample Type"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="column">
                <label>Vial Name</label>
                <input
                  type="text"
                  name="vialName"
                  value={newTest.vialName}
                  onChange={handleInputChange}
                  placeholder="Enter Vial Name"
                />
              </div>
              <div className="column">
                <label>Preparation Time</label>
                <input
                  type="text"
                  name="preparationTime"
                  value={newTest.preparationTime}
                  onChange={handleInputChange}
                  placeholder="Enter Preparation Time"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="column">
                <label>Pricing</label>
                <input
                  type="text"
                  name="price"
                  value={newTest.price}
                  onChange={handleInputChange}
                  placeholder="Enter Test Price"
                />
              </div>
              <div className="column">
                <label>Sample Collection</label>
                <div className="sample-collection-container">
                  {["Home", "At Lab"].map((sample) => (
                    <div
                      key={sample}
                      className={`sampleCollection ${
                        newTest.sampleCollection.includes(sample)
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChange({
                          target: {
                            name: "sampleCollection",
                            value: sample,
                            checked: !newTest.sampleCollection.includes(sample),
                          },
                        })
                      }
                    >
                      {sample}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="column">
                <label>Availability</label>
                <div className="date-container">
                  {Object.keys(days).map((day) => (
                    <div
                      key={day}
                      className={`daysAvailability ${
                        newTest.availability.includes(day) ? "active" : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChange({
                          target: {
                            name: "availability",
                            value: day,
                            checked: !newTest.availability.includes(day),
                          },
                        })
                      }
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              <div className="column">
                <label>Additional features</label>
                <div className="additional-features-container">
                  {["Express Service", "Online Reports"].map((feature) => (
                    <div
                      key={feature}
                      className={`features ${
                        newTest.features.includes(feature) ? "active" : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChange({
                          target: {
                            name: "features",
                            value: feature,
                            checked: !newTest.features.includes(feature),
                          },
                        })
                      }
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="column">
                <label>Available Time Slots</label>
                <div className="time-slots-container">
                  {Object.keys(timeSlots).map((slot) => (
                    <div
                      key={slot}
                      className={`timeSlots ${
                        newTest.availableTimeSlots.includes(slot)
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChange({
                          target: {
                            name: "availableTimeSlots",
                            value: slot,
                            checked: !newTest.availableTimeSlots.includes(slot),
                          },
                        })
                      }
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <center>
              <button type="button" className="submit-button" onClick={addTest}>
                Add Test
              </button>
            </center>
          </form>
        </section>

        <section className="saved-tests">
          <h2>Saved Tests</h2>
          <div className="test-cards">
            {tests.map((test, index) => (
              <div className="test-card" key={index}>
                <div
                  className="delete-button"
                  onClick={() => deleteTest(index)}
                >
                  &#10005;
                </div>
                <h3>{test.name}</h3>
                <p>{test.description}</p>
                <p>{test.price}</p>
              </div>
            ))}
          </div>
        </section>
        <center>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Save Details
          </button>
        </center>
      </div>
    </>
  );
}

export default TestOffered;

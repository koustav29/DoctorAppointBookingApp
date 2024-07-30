import React, { useState } from "react";
import "./Labs-onboarding.css";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function LabsOnboarding() {
  const [labDetails, setLabDetails] = useState({
    labName: "",
    labAddress: "",
    phoneNumber: "",
    email: "",
    website: "",
    operatingDays: [],
    availableTimeSlots: [],
    labImages: null,
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

  const [imageUrl, setImageUrl] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLabDetails({
      ...labDetails,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("File size exceeds 1MB limit");
      return;
    }

    setLabDetails({ ...labDetails, labImages: file });

    try {
      const storageRef = ref(storage, `lab-images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrl(url);
      setLabDetails((prevDetails) => ({
        ...prevDetails,
        labImages: url,
      }));

      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleClickForDayChange = (day) => {
    setDays({
      ...days,
      [day]: !days[day],
    });
  };

  const handleClickForTimeChange = (slot) => {
    setTimeSlots({
      ...timeSlots,
      [slot]: !timeSlots[slot],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      labDetails: {
        ...labDetails,
        operatingDays: Object.keys(days).filter((day) => days[day]),
        availableTimeSlots: Object.keys(timeSlots).filter(
          (slot) => timeSlots[slot]
        ),
        labImages: imageUrl,
      },
    };

    console.log("Payload:", payload);

    // Replace with your POST request logic
    fetch("https://your-api-endpoint.com/save-lab-details", {
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
    <div className="LabsOnboarding">
      <section className="lab-information">
        <h2>Lab Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="column">
              <label>Lab Name</label>
              <input
                type="text"
                name="labName"
                value={labDetails.labName}
                onChange={handleInputChange}
                placeholder="Enter Lab Name"
              />
            </div>
            <div className="column">
              <label>Lab Address</label>
              <input
                type="text"
                name="labAddress"
                value={labDetails.labAddress}
                onChange={handleInputChange}
                placeholder="Enter Lab Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={labDetails.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="column">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={labDetails.email}
                onChange={handleInputChange}
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Website</label>
              <input
                type="text"
                name="website"
                value={labDetails.website}
                onChange={handleInputChange}
                placeholder="Enter Website URL"
              />
            </div>
            <div className="column">
              <label>Operating Days</label>
              <div className="date-container">
                {Object.keys(days).map((day) => (
                  <div
                    key={day}
                    className={`days ${days[day] ? "active" : ""}`}
                    onClick={() => handleClickForDayChange(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Upload Lab Images</label>
              <input type="file" onChange={handleFileChange} accept="image/*" />
              <p>Maximum file size: 1MB</p>
              {imageUrl && (
                <div>
                  <p>Image uploaded successfully!</p>
                  <img
                    src={imageUrl}
                    alt="Uploaded lab image"
                    style={{ width: "200px" }}
                  />
                </div>
              )}
            </div>
            <div className="column">
              <label>Available Time Slots</label>
              <div className="time-slots-container">
                {Object.keys(timeSlots).map((slot) => (
                  <div
                    key={slot}
                    className={`timeSlots ${timeSlots[slot] ? "active" : ""}`}
                    onClick={() => handleClickForTimeChange(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <center>
            <button type="submit" className="submit-button">
              Save Details
            </button>
          </center>
        </form>
      </section>
    </div>
  );
}
export default LabsOnboarding;

import React, { useState } from "react";
import "./Labs-onboarding.css";

function LabsOnboarding() {
  const [days, setDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const handleClickForDayChange = (day) => {
    setDays({
      ...days,
      [day]: !days[day],
    });
  };
  const [daysAvailability, setDaysAvailability] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const handleClickForDayAvailabilityChange = (day) => {
    setDaysAvailability({
      ...daysAvailability,
      [day]: !daysAvailability[day],
    });
  };
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
  const handleClickForTimeChange = (slot) => {
    setTimeSlots({
      ...timeSlots,
      [slot]: !timeSlots[slot],
    });
  };
  const [timeSlotsAvailability, setTimeSlotsAvailability] = useState({
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
  const handleClickForTimeAvailabilityChange = (slot) => {
    setTimeSlotsAvailability({
      ...timeSlotsAvailability,
      [slot]: !timeSlotsAvailability[slot],
    });
  };
  const [sampleCollection, setSampleCollection] = useState({
    Home: false,
    "At Lab": false,
  });
  const handleClickForSampleChange = (sample) => {
    setSampleCollection({
      ...sampleCollection,
      [sample]: !sampleCollection[sample],
    });
  };
  const [features, setFeatures] = useState({
    "Express Service": false,
    "Online Reports": false,
  });
  const handleClickForFeatureChange = (feature) => {
    setFeatures({
      ...features,
      [feature]: !features[feature],
    });
  };
  return (
    <div className="LabsOnboarding">
      <section className="lab-information">
        <h2>Lab Information</h2>
        <form>
          <div className="form-row">
            <div className="column">
              <label>Lab Name</label>
              <input type="text" placeholder="Enter Lab Name" />
            </div>
            <div className="column">
              <label>Lab Address</label>
              <input type="text" placeholder="Enter Lab Address" />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <div className="column">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Website</label>
              <input type="text" placeholder="Enter Website URL" />
            </div>
            <div className="column">
              <label>Operating Days</label>
              <div className="date-container">
                {Object.keys(days).map((day) => {
                  return (
                    <div
                      type="checkbox"
                      key={day}
                      className={
                        "days " +
                        (days[day].toString() == "true" ? "active" : "")
                      }
                      onClick={() => handleClickForDayChange(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Upload Lab Images</label>
              <input type="file" />
              <p>Maximum file size: 1MB</p>
            </div>
            <div className="column">
              <label>Available Time Slots</label>
              <div className="time-slots-container">
                {Object.keys(timeSlots).map((slot) => {
                  return (
                    <div
                      type="checkbox"
                      key={slot}
                      className={
                        "timeSlots " +
                        (timeSlots[slot].toString() == "true" ? "active" : "")
                      }
                      onClick={() => handleClickForTimeChange(slot)}
                    >
                      {slot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Save Details
          </button>
        </form>
      </section>

      <section className="tests-offered">
        <h2>Tests Offered</h2>
        <form>
          <div className="form-row">
            <div className="column">
              <label>Test Name</label>
              <input type="text" placeholder="Enter Test Name" />
            </div>
            <div className="column">
              <label>Test Description</label>
              <input type="text" placeholder="Enter Test Description" />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Sample Name</label>
              <input type="text" placeholder="Enter Sample Name" />
            </div>
            <div className="column">
              <label>Sample Type</label>
              <input type="text" placeholder="Choose Sample Type" />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Vial Name</label>
              <input type="text" placeholder="Enter Vial Name" />
            </div>
            <div className="column">
              <label>Preparation Time</label>
              <input type="text" placeholder="Enter Preparation Time" />
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Pricing</label>
              <input type="text" placeholder="Enter Test Price" />
            </div>
            <div className="column">
              <label>Sample Collection</label>
              <div className="sample-collection-container">
                {Object.keys(sampleCollection).map((sample) => {
                  return (
                    <div
                      type="checkbox"
                      key={sample}
                      className={
                        "sampleCollection " +
                        (sampleCollection[sample].toString() == "true"
                          ? "active"
                          : "")
                      }
                      onClick={() => handleClickForSampleChange(sample)}
                    >
                      {sample}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Availability</label>
              <div className="date-container">
                {Object.keys(daysAvailability).map((day) => {
                  return (
                    <div
                      type="checkbox"
                      key={day}
                      className={
                        "daysAvailability " +
                        (daysAvailability[day].toString() == "true"
                          ? "active"
                          : "")
                      }
                      onClick={() => handleClickForDayAvailabilityChange(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="column">
              <label>Additional features</label>
              <div className="additional-features-container">
                {Object.keys(features).map((feature) => {
                  return (
                    <div
                      type="checkbox"
                      key={feature}
                      className={
                        "features " +
                        (features[feature].toString() == "true" ? "active" : "")
                      }
                      onClick={() => handleClickForFeatureChange(feature)}
                    >
                      {feature}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="column">
              <label>Available Time Slots</label>
              <div className="time-slots-container">
                {Object.keys(timeSlotsAvailability).map((slot) => {
                  return (
                    <div
                      type="checkbox"
                      key={slot}
                      className={
                        "timeSlotsAvailability " +
                        (timeSlotsAvailability[slot].toString() == "true"
                          ? "active"
                          : "")
                      }
                      onClick={() => handleClickForTimeAvailabilityChange(slot)}
                    >
                      {slot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Add Test
          </button>
        </form>
      </section>

      <section className="saved-tests">
        <h2>Saved Tests</h2>
        <div className="test-cards">
          <div className="test-card">
            <h3>Blood Test</h3>
            <p>Complete blood count</p>
            <p>$30</p>
          </div>
          <div className="test-card">
            <h3>Urine Analysis</h3>
            <p>Urinalysis test</p>
            <p>$30</p>
          </div>
          <div className="test-card">
            <h3>X-Ray</h3>
            <p>Chest X-ray</p>
            <p>$50</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LabsOnboarding;

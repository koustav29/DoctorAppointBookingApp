import { IconBase } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import dt from "../db/data";
import React, { useState } from "react";

function Card() {
  const [defaultImage, setDefaultImage] = useState({});
  return (
    <>
      {dt.map((item) => (
        <section className="card">
          <div className="card-top">
            <img src={item.imageUrls} height={10} />
            <h3>Lab Name</h3>
            <h2>Neurology</h2>
          </div>
          <div className="card-bottom">
            <section className="location">
              <div className="location-icon">
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
              <p>{item.address}</p>
            </section>
            <a href="details">
              <button className="tests">View Tests and Packages</button>
            </a>
          </div>
        </section>
      ))}
    </>
  );
}

export default Card;

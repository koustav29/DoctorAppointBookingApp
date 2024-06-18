import { IconBase } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star} {star}
            {/* <span className="total-reviews">{reviews}</span> */}
          </section>
          <section className="location">
            <div className="location-icon">
              <p>
                <FontAwesomeIcon icon={faLocationArrow} /> Newtown, kolkata
              </p>
            </div>
          </section>
          <a href="details">
            <button className="tests">View Tests</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Card;

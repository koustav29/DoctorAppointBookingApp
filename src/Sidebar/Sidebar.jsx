import Category from "./Category/Category";
import Speciality from "./Speaciality/Speciality";
import Features from "./Features/Features";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Speciality handleChange={handleChange} />
        <Features handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

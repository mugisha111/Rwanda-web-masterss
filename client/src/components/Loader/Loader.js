import "./Loader.css";
import logo from "../../assets/images/logo.png";

function Loader({ fading }) {
  return (
    <div className={`loader-screen ${fading ? "loader-fade" : ""}`}>
      <div className="loader-content">
        <img src={logo} alt="Rwanda Web Masters" className="loader-logo" />
        <p className="loader-text">Loading</p>
      </div>
    </div>
  );
}

export default Loader;
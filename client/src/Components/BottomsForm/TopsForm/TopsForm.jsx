/* eslint-disable react/prop-types */
import "./TopsForm.scss";
import { useNavigate } from "react-router-dom";
export default function TopsForm({ handleChange, handleSubmit }) {
  const navigate = useNavigate();
  return (
    <div className="tops">
      <h1 className="tops__title">Please enter your measurements</h1>
      <form onSubmit={handleSubmit} className="tops__options">
        <div className="tops__flex">
          <div className="tops__measurements">
            <div className="flex">
              <label htmlFor="sleeveDiameter">Sleeve</label>
              <input
                className="tops__input"
                placeholder="Sleeve Diameter"
                name="sleeveDiameter"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              <label htmlFor="chest">Chest</label>
              <input
                className="tops__input"
                placeholder="Chest"
                name="chest"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="waistDiameter">Waist</label>
              <input
                className="tops__input"
                placeholder="Waist Diameter"
                name="waistDiameter"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="hipDiameter">Hip</label>
              <input
                className="tops__input"
                placeholder="Hip Diameter"
                name="hipDiameter"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="tops__buttons">
            {" "}
            {/* <button
              className=" button tops__buttons--back"
              value="tops"
              //onClick={() => navigate(-1)}
            >
              Go Back
            </button> */}
            <button
              className="button tops__buttons--next"
              value="bottoms"
              onClick={() => navigate("/")}
            >
              Next{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

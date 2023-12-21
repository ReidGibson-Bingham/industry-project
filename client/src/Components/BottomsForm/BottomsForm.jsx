/* eslint-disable react/prop-types */
import "./BottomsForm.scss";
import { useNavigate } from "react-router-dom";
export default function BottomsForm({ handleChange, handleSubmit }) {
  const navigate = useNavigate();
  return (
    <div className="bottoms">
      <h1 className="bottoms__title">Please enter your measurements</h1>
      <form onSubmit={handleSubmit} className="bottoms__options">
        <div className="bottoms__flex">
          <div className="bottoms__measurements">
            <div className="flex">
              <label htmlFor="waistDiameter">Waist</label>
              <input
                className="bottoms__input"
                placeholder="Waist Diameter"
                name="waistDiameter"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              <label htmlFor="hipDiameter">Hip</label>
              <input
                className="bottoms__input"
                placeholder="Hip Diameter"
                name="hipDiameter"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="bottoms__buttons">
            {" "}
            <button
              className="button bottoms__buttons--next"
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

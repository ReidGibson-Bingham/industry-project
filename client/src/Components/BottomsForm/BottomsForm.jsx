/* eslint-disable react/prop-types */
import "./BottomsForm.scss";

export default function BottomsForm({ handleChange, handleSubmit }) {
  return (
    <div className="bottoms">
      <h1 className="bottoms__title">Please enter your measurements</h1>
      <form className="bottoms__options">
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
              onClick={handleSubmit}
            >
              Next{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

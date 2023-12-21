/* eslint-disable react/prop-types */
import "./GenderInput.scss";

export default function GenderInput({ handleChange, handleSubmit }) {
  return (
    <div className="gender__form">
      <h1 className="gender__title">Who are you shopping for?</h1>
      <div className="gender__options">
        {" "}
        <button
          className=" button form__male"
          value="men"
          name="gender"
          onClick={handleChange && handleSubmit}
        >
          Men
        </button>
        <button
          className="button form__female"
          value="women"
          name="gender"
          onClick={handleChange && handleSubmit}
        >
          Women{" "}
        </button>
      </div>
    </div>
  );
}

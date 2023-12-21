/* eslint-disable react/prop-types */
import "./ClothingType.scss";

export default function ClothingType({ handleChange, handleNavigate }) {
  return (
    <div className="clothing__form">
      <h1 className="clothing__title">What item are you shopping for?</h1>
      <div className="clothing__options">
        {" "}
        <button
          className=" button form__tops"
          value="tops"
          name="tops"
          onClick={handleChange && handleNavigate}
        >
          Tops
        </button>
        <button
          className="button form__bottoms"
          value="bottoms"
          name="bottoms"
          onClick={handleChange && handleNavigate}
        >
          Bottoms{" "}
        </button>
      </div>
    </div>
  );
}

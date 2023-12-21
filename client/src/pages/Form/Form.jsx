import "./Form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GenderInput from "../../Components/GenderInput/GenderInput";
import ClothingType from "../../Components/ClothingType/ClothingType";
import BottomsForm from "../../Components/BottomsForm/BottomsForm";
import TopsForm from "../../Components/BottomsForm/TopsForm/TopsForm";

const Form = () => {
  //const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [measurements, setMeasurements] = useState({});
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //   const handleCancel = (e) => {
  //     e.preventDefault();
  //     navigate("/");
  //   };

  const handleSubmit = (e) => {
    console.log(e.target.name);
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    }
    if (step === 2 && e.target.name === "bottoms") {
      {
        setStep(3);
      }
    }
    if (step === 2 && e.target.name === "tops") {
      {
        setStep(4);
      }
    }

    console.log("the data: ", measurements);

    // const postMeasurements = async () => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:8080/measurements",
    //       measurements
    //     );
    //     if (response) {
    //       console.log("the response from the server: ", response);
    //     }
    //   } catch (err) {
    //     console.log("error adding measurments: ", err);
    //   }
    // };

    // postMeasurements();
  };
  console.log(measurements);
  console.log("ITEM", item);
  console.log("STEP", step);

  if (step === 1) {
    return (
      <>
        <div className="form__box">
          <GenderInput
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <div className="form__box">
          <ClothingType
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setItem={setItem}
          />
        </div>
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <div className="form__box">
          <BottomsForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </>
    );
  } else if (step === 4) {
    return (
      <>
        <div className="form__box">
          <TopsForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="form__box">Loading....</div>
    </>
  );
};

export default Form;

import './Form.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Form = () => {

    const navigate = useNavigate();

    const [measurements, setMeasurements] = useState({
        ankleDiameter: '',
        biacromialDiameter: '',
        kneeDiameter: '',
        weight: '',
        girth: '',
        wristDiameter: '',
        height: '',
        sex: '',
        calfDiameter: '',
        headDiameter: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeasurements((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("the data: ", measurements)

        const postMeasurements = async () => {
            try {
                const response = await axios.post('http://localhost:8080/measurements', measurements);
                if (response) {
                    console.log("the response from the server: ", response);
                }
            } catch (err) {
                console.log("error adding measurments: ", err);
            }
        }

        postMeasurements();
    }


    return (

        <>

            <div className="form__box">

                <form className="form" onSubmit={handleSubmit} >
                
                    <input
                        className="form__input"
                        placeholder="Ankle Diameter"
                        name='ankleDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="biacromial diameter"
                        name='biacromialDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Knee Diameter"
                        name='kneeDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Weight"
                        name='weight'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Girth"
                        name='girth'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Wrist Diameter"
                        name='wristDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Height"
                        name='height'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Sex"
                        name='sex'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Calf Diameter"
                        name='calfDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <input
                        className="form__input"
                        placeholder="Head Diameter"
                        name='headDiameter'
                        onChange={handleChange}
                    >
                    </input>

                    <div className='form__button-box'>

                        <button className='form__add-btn' type="submit" >
                            Submit Measurements
                        </button>

                        <button className='form__cancel-btn' type="button" onClick={handleCancel}>
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </>

    )
}

export default Form;
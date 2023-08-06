import { useState } from "react";
import "./App.scss";
import Pic from "./images/icon-star.svg";
function App() {
    const option = [1, 2, 3, 4, 5];
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleOptionChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(!isSubmitted);
    };
    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    {!isSubmitted ? (
                        <>
                            <div className="logo">
                                <img
                                    src={Pic}
                                    alt=""
                                />
                            </div>
                            <h1>How did we do?</h1>
                            <p>
                                Please let us know how we did with your support
                                request. All feedback is appreciated to help us
                                improve our offering!
                            </p>
                            <div className="rating">
                                {option.map((option) => (
                                    <div
                                        key={option}
                                        className="custom-radio"
                                    >
                                        <input
                                            value={option}
                                            type="radio"
                                            name="rating"
                                            onChange={handleOptionChange}
                                            checked={selectedOption === option}
                                            id={`rating-${option}`}
                                        />
                                        <label htmlFor={`rating-${option}`}>
                                            <span className="custom-radio-button">
                                                {option}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleSubmit}>Submit</button>
                        </>
                    ) : (
                        <>
                            <h1>Thankyou</h1>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

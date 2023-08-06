import { useState } from "react";
import "./App.scss";
import Pic from "./images/icon-star.svg";
import Ty from "./images/illustration-thank-you.svg";
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
                            <div className="submit__container">
                                <div className="submit__content">
                                    <img
                                        src={Ty}
                                        alt=""
                                    />
                                    <span>{`You selected ${selectedOption} out of 5`}</span>
                                    <h1>Thank you!</h1>
                                    <p>
                                        We appreciate you taking the time to
                                        give a rating. If you ever need more
                                        support, don't hesitate to get in touch!
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

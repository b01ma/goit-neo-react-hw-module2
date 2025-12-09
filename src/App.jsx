import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import "./index.css";

function App() {
    const [good, setGood] = useState(() => {
        const savedData = localStorage.getItem("feedbackData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            return parsedData.good || 0;
        }
        return 0;
    });
    const [neutral, setNeutral] = useState(() => {
        const savedData = localStorage.getItem("feedbackData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            return parsedData.neutral || 0;
        }
        return 0;
    });
    const [bad, setBad] = useState(() => {
        const savedData = localStorage.getItem("feedbackData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            return parsedData.bad || 0;
        }
        return 0;
    });

    useEffect(() => {
        const feedbackData = { good, neutral, bad };
        localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
    }, [good, neutral, bad]);

    const handleFeedback = (type) => {
        if (type === "good") {
            setGood(good + 1);
        } else if (type === "neutral") {
            setNeutral(neutral + 1);
        } else if (type === "bad") {
            setBad(bad + 1);
        }
    };

    const handleReset = () => {
        setGood(0);
        setNeutral(0);
        setBad(0);
    };

    const total = good + neutral + bad;

    return (
        <div>
            <h1 className="title">Sip Happens Café</h1>
            <p className="description">
                Please leave your feedback about our service by selecting one of the options below.
            </p>
            <Options onFeedback={handleFeedback} onReset={handleReset} />
            {total > 0 ? (
                <Feedback good={good} neutral={neutral} bad={bad} />
            ) : (
                <p className="no-feedback">No feedback given</p>
            )}
        </div>
    );
}

export default App;

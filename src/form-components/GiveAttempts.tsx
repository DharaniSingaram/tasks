import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttemptsLeft) => prevAttemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(
                (prevAttemptsLeft) => prevAttemptsLeft + parsedAttempts
            );
            setRequestedAttempts("");
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    const isUseButtonDisabled = attemptsLeft === 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <div>
                <label htmlFor="requestedAttemptsInput">
                    Requested Attempts:
                </label>
                <input
                    type="number"
                    id="requestedAttemptsInput"
                    value={requestedAttempts}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleUseAttempt} disabled={isUseButtonDisabled}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempts}>Gain Attempts</button>
        </div>
    );
}

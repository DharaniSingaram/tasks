import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptNumber, setAttemptNumber] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    const startClick = () => {
        if (attemptNumber > 0) {
            setAttemptNumber(attemptNumber - 1);
            setProgress(true);
        }
    };

    const stopClick = () => {
        setProgress(false);
    };

    const mulliganClick = () => {
        setAttemptNumber(attemptNumber + 1);
    };

    return (
        <div>
            <div data-testid="attempt-number">
                {" "}
                Number of attempts: {attemptNumber}
            </div>
            <Button
                data-testid="mulligan-button"
                onClick={mulliganClick}
                disabled={progress}
            >
                Mulligan
            </Button>
            <Button
                data-testid="start-button"
                onClick={startClick}
                disabled={progress || attemptNumber === 0}
            >
                Start Quiz
            </Button>
            <Button
                data-testid="stop-button"
                onClick={stopClick}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisible, setAnswerVisible] = useState(false);
    const [answer] = useState("The answer is 42");

    function handleRevealAnswer() {
        setAnswerVisible(!answerVisible);
    }

    return (
        <>
            <Button onClick={handleRevealAnswer}>
                {answerVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {answerVisible && <p>{answer}</p>}
        </>
    );
}

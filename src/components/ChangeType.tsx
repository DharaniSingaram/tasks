import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";

type QuestionType = "Multiple Choice" | "Short Answer";

const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
    "Short Answer": "Multiple Choice",
    "Multiple Choice": "Short Answer"
};

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] =
        useState<QuestionType>("Short Answer");

    function changeQuestionType(): void {
        const newType = QUESTION_TRANSITIONS[questionType];
        setQuestionType(newType);
    }

    return (
        <div>
            <div>
                Question: <span>{questionType}</span>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
        </div>
    );
}

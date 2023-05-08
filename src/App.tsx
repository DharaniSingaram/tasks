import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="heading">
                    <div className="div-1">
                        <h1>
                            Dharani Singaram UD CISC275 with React Hooks and
                            TypeScript
                            <span className="course-name">COS420</span>
                        </h1>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                First column.
                                <div className="div-1"> </div>
                            </Col>
                            <Col>
                                Second column.
                                <div className="div-1"> </div>
                            </Col>
                        </Row>
                    </Container>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                    <img
                        src="file:///Users/dharanisingaram/opt/anaconda3/pkgs/imagecodecs-2021.8.26-py39ha952a84_0/info/recipe/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"
                        alt="A picture of Mona Lisa"
                    />
                    <ul>
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload.
                    </p>
                    <p>Hello World</p>
                    <p>COS420</p>
                    UM COS420 with React Hooks and TypeScript
                </header>
                <hr />
            </div>
            {<DoubleHalf></DoubleHalf>}
            <>
                <hr />
                <ChooseTeam></ChooseTeam>
                <hr />
                <ColoredBox></ColoredBox>
                <hr />
                <ShoveBox></ShoveBox>
                <hr />
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </>
        </>
    );
}

export default App;

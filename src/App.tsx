import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                .div-1{}
                Dharani Singaram UD CISC275 with React Hooks and TypeScript
                width: 100%; background-color: #FF0000; min-height: 40vh;
                display: flex; flex-direction: column; align-items: center;
                justify-content: center; font-size: calc(10px + 2vmin); color:
                color: red;
            </header>
            <h1>
                Header<span style={{ color: "red" }}> One</span>
            </h1>
            <Container>
                <Row>
                    <Col>
                        {" "}
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
        </div>
    );
}

export default App;

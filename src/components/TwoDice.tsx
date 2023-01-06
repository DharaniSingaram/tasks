import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(0);
    const [d2, setD2] = useState<number>(1);

    const rollLeft = (): void => {
        setD1(d6());
    };

    const rollRight = (): void => {
        setD2(d6());
    };

    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                <span
                    data-testid="left-die"
                    dangerouslySetInnerHTML={{ __html: d1.toString() }}
                ></span>
            </div>
            <div>
                <span
                    data-testid="right-die"
                    dangerouslySetInnerHTML={{ __html: d2.toString() }}
                ></span>
            </div>
            {d1 === 1 && d2 === 1 && (
                <div data-testid="game-result">
                    <span>Lose</span>
                </div>
            )}
            {d1 === d2 && d1 !== 1 && (
                <div data-testid="game-result">
                    <span>Win</span>
                </div>
            )}
        </div>
    );
}

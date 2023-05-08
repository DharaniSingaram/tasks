import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Orange", value: "orange" },
    { label: "Purple", value: "purple" },
    { label: "Pink", value: "pink" },
    { label: "Brown", value: "brown" }
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        key={color.value}
                        inline
                        label={color.label}
                        type="radio"
                        name="color"
                        id={`color-${color.value}`}
                        value={color.value}
                        checked={selectedColor === color.value}
                        onChange={handleColorChange}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                    color: "white"
                }}
            >
                Selected color: {selectedColor}
            </div>
        </div>
    );
}

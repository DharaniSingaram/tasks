import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // Declare a state variable called "holidays" that is an array of strings representing the holidays
    const holidays = [
        { name: "New Year's Day", emoji: "🎉" },
        { name: "Valentine's Day", emoji: "💖" },
        { name: "Halloween", emoji: "🎃" },
        { name: "Thanksgiving", emoji: "🦃" },
        { name: "Christmas", emoji: "🎄" }
    ];

    // Declare a state variable called "currentHoliday" and initialize it to "New Year's Day"
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    // Declare a function called "cycleAlphabetically" that will be called when the "Alphabet" button is clicked
    const cycleAlphabetically = () => {
        // Find the index of the current holiday in the "holidays" array
        const currentIndex = holidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );

        // Calculate the next index by incrementing the current index and wrapping around to the beginning of the array if necessary
        const nextIndex = (currentIndex + 1) % holidays.length;

        // Set the current holiday to the holiday at the next index
        setCurrentHoliday(holidays[nextIndex]);
    };

    const cycleByYear = () => {
        // Find the index of the current holiday in the "holidays" array
        const currentIndex = holidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );

        // Calculate the next index by incrementing the current index and wrapping around to the beginning of the array if necessary
        const nextIndex = (currentIndex + 1) % holidays.length;

        // Set the current holiday to the holiday at the next index
        setCurrentHoliday(holidays[nextIndex]);
    };

    return (
        <div>
            {/* Display the current holiday name and emoji */}
            <div>
                Holiday: {currentHoliday.name} {currentHoliday.emoji}
            </div>
            {/* Render the "Alphabet" button with the "cycleAlphabetically" function as the onClick handler */}
            <Button onClick={cycleAlphabetically}>Alphabet</Button>
            {/* Render the "Year" button with the "cycleByYear" function as the onClick handler */}
            <Button onClick={cycleByYear}>Year</Button>
        </div>
    );
}

import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleToggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleIsStudentChange = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    id="editModeSwitch"
                    checked={editMode}
                    onChange={handleToggleEditMode}
                />
                <label htmlFor="editModeSwitch">Edit Mode:</label>
            </div>
            {editMode ? (
                <>
                    <div>
                        <label htmlFor="nameInput">Name:</label>
                        <input
                            type="text"
                            id="nameInput"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="isStudentCheckbox">Is Student:</label>
                        <input
                            type="checkbox"
                            id="isStudentCheckbox"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                    </div>
                </>
            ) : (
                <p>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </p>
            )}
        </div>
    );
}

import React from "react";

const SubmittedForm = () => {
    return (
        <div>
            <p>Form Submitted Successfully</p>
            <button onClick={handleReset}>Submit Another</button>
        </div>
    );
};

export default SubmittedForm;

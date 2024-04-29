import React, { useState } from 'react';
import Button from '@mui/material/Button';

const SaveSubmitButtons = () => {
  const [isSaveDisabled, setSaveDisabled] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleSaveClick = () => {
    // Perform save operation here
    // In this example, we'll just log a message
    console.log("Save clicked");
  };

  const handleSubmitClick = () => {
    // Perform submit operation here
    // In this example, we'll just log a message
    console.log("Submit clicked");
    setSaveDisabled(true);
    setSubmitDisabled(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveClick}
        disabled={isSubmitDisabled}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitClick}
        disabled={isSubmitDisabled}
      >
        Submit
      </Button>
    </div>
  );
};

export default SaveSubmitButtons;

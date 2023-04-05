import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";

const AdditonalInfoStep = (props) => {
  const { _setDescriptionFormData, setIsNextdisabled } = props;
  const [AdditionalInfo, setAdditionalInfo] = useState("");

  const handleChange = (event) => {
    setAdditionalInfo(event.target.value);
    _setDescriptionFormData("AdditionalInfo", event.target.value);
  };

  useEffect(() => {
    if (AdditionalInfo === "") {
      setIsNextdisabled(true);
    } else {
      setIsNextdisabled(false);
    }
  }, [AdditionalInfo]);

  return (
    <div  style={{height: '529px' }}>
      <Typography variant="p" style={{ top: '19px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    paddingLeft: '25px',
    fontSize: '13px',
    color:' #007BFF',
    lineHeight: '16px',
    position: 'relative'}}>
      Heating & Air - Water leak from HVAC unit - Repair and service
      </Typography>
      <Typography variant="h6" gutterBottom>
        Additional information
        <hr style={{width: '29px',
    padding: '1px',
    border: 'none',
    background: '#007BFF',
    marginLeft: '0px'}}></hr>
      </Typography>

      <div className="text-para" style={{ width: "512px", margin: "auto" }}>
        <Typography
          variant="p"
          style={{
            color: "#4D4F59",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Please share any information you'd like about your equipment, project,
          or issues you are facing.
        </Typography>
      </div>
      <div className="text-area" style={{ width: "512px", paddingTop: "32px", margin: "auto" }}>
        <TextField
          name="AdditionalInfo"
          onChange={handleChange}
          style={{ width: "512px", height: "240px!important" }}
          id="outlined-basic"
          label="Issue description"
          multiline
          rows={8}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default AdditonalInfoStep;

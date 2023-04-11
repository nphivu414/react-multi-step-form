import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import appointmentFormStyle from "../styles";
function Thanks(props) {
  const { setActiveStepColor } = props;
  const classes = appointmentFormStyle();
  useEffect(() => {
    setActiveStepColor("#F2F0FA");
  }, []);
  return (
    <React.Fragment>
      <div
        className={
          classes.formDivWithHeight
        } /*</React.Fragment>style={{ backgroundColor: "#F2F0FA", height: "593px" }}*/
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
          }}
          gutterBottom
        >
          Thank you, appointment created
          <hr
            style={{
              width: "29px",
              padding: "1px",
              border: "none",
              background: "#007BFF",
              marginLeft: "16rem",
            }}
          ></hr>
        </Typography>

        <div
          style={{
            display: "flex",
            backgroundColor: "#F2F0FA",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          <Button variant="outlined" startIcon={<ThumbUpIcon />}>
            <span className="Okay">Ok, great</span>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Thanks;

import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function Thanks() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F2F0FA", height: "593px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "black",
          }}
          gutterBottom
        >
          Thank you, appointment created
        </Typography>

        <div
          style={{
            display: "flex",
            backgroundColor: "#F2F0FA",
            justifyContent: "center",
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

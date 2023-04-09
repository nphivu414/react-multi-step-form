import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Checkbox from "@mui/material/Checkbox";
import appointmentFormStyle from "../styles";
export default function Confirm() {
  const classes = appointmentFormStyle();
  return (
    <React.Fragment>
      <div className={classes.formDivWithHeight}>
        <Typography variant="h6" gutterBottom>
          Please review and confirm appointment
          <hr
            style={{
              width: "29px",
              padding: "1px",
              border: "none",
              background: "#007BFF",
              marginLeft: "0px",
            }}
          ></hr>
        </Typography>

        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            color: "#1F2327",
            lineHeight: "32px",
          }}
        >
          <Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingLeft: "25px",
              }}
            >
              <TodayIcon style={{ color: "#007BFF" }} />
              <span>March 30, 2023</span>
            </div>
          </Grid>
          <Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingLeft: "25px",
              }}
            >
              <AccessTimeIcon style={{ color: "#007BFF" }} />
              <span>11:30 AM - 2:30 PM EST</span>
            </div>
          </Grid>
          <Grid>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                paddingLeft: "25px",
                gap: "10px",
              }}
            >
              <PlaceIcon style={{ color: "#007BFF" }} />
              <span>
                March 30, 202365 Westington St. Suit 5C, Brooklyn, New York, NY
                11249
              </span>
            </div>
          </Grid>
          <Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingLeft: "25px",
              }}
            >
              <LocalPhoneOutlinedIcon style={{ color: "#007BFF" }} />
              <span>492-990-2789</span>
            </div>
          </Grid>
        </Grid>

        <Grid>
          <div style={{ padding: "20px" }}>
            <Checkbox defaultChecked size="small" />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "32px",
                color: "#1F2327",
              }}
            >
              I accept the{" "}
              <span style={{ color: "#007BFF" }}>terms and conditions</span>
            </span>
          </div>
        </Grid>
        <Typography
          variant="p"
          style={{
            paddingLeft: "34px",
            paddingTop: "50px",
            width: "97%",
            display: "flex",
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#6C6F7C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          interdum, diam vel fermentum posuere, enim massa.
        </Typography>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
//import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { PhoneIcons, Location } from "../../Icons";
import { SvgIcon } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import appointmentFormStyle from "../styles";
export default function Confirm() {
  const classes = appointmentFormStyle();
  return (
    <React.Fragment>
      <div className={classes.formDivWithHeight}>
        <div>
          <Typography
            style={{ padding: "24px 15px 10px 25px" }}
            variant="h6"
            gutterBottom
          >
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
        </div>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
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
                paddingLeft: "30px",
                gap: "10px",
              }}
            >
              {/* <LocationOnOutlinedIcon style={{ color: "#007BFF" }} /> */}
              <SvgIcon component={Location} />
              <span style={{ marginTop: "-6px" }}>
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
                paddingLeft: "30px",
              }}
            >
              {/* <LocalPhoneOutlinedIcon  style={{ color: "#007BFF" }}  /> */}
              <SvgIcon component={PhoneIcons} />
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
            paddingTop: "4px",
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

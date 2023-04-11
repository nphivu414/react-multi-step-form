import React from "react";
import { Button, Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import AutocompleteWithSearchIcon from "../../../FormFields/AutocompleteWithSearchIcon";
import appointmentFormStyle from "../../styles";
import ErrorDetail from "./ErrorDetail";
import { useState } from "react";

const NewCustomerAddress = () => {
  const classes = appointmentFormStyle();
  const [state, setState] = React.useState("");

  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div className={classes.formDivWithHeight}>
      <Typography variant="h6" className={classes.formTitleTypoGraphy}>
        Address where our team is needed
        <hr className={classes.formTitleHr}></hr>
      </Typography>

      <div className={classes.formTitleDiv}>
        <Typography className={classes.formInstructionTypo} variant="Body">
          Please enter your details below
        </Typography>

        <TextField
          className={classes.textFieldDiv}
          id="street-address"
          label="Street Address"
          variant="outlined"
          size=""
        />
        <TextField
          className={classes.textFieldDiv}
          id="outlined-basic"
          label="Apartment / Unit"
          variant="outlined"
          size=""
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyContent: "space-between",
            gap: "27px",
          }}
        >
          <TextField
            style={{ width: "330px" }}
            id="outlined-basic"
            label="City"
            variant="outlined"
            className={classes.textFieldDiv}
            size=""
          />
          <AutocompleteWithSearchIcon />
          {/* <FormControl style={{ width: "155px" }}>
            <InputLabel id="demo-simple-select-label">state</InputLabel>            
            <Select
              className={classes.textFieldDiv}
              size=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="state"
              onChange={handleChange}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "right"
                },
                getContentAnchorEl: null
              }}
            >
              <MenuItem value="">
                {" "}
                <em>None</em>{" "}
              </MenuItem>
              <MenuItem value={0}>Alabama</MenuItem>
              <MenuItem value={1}>Alaska</MenuItem>
              <MenuItem value={2}>Arizona</MenuItem>
              <MenuItem value={3}>Arkansas</MenuItem>
              <MenuItem value={4}>California</MenuItem>
              <MenuItem value={5}>Colorado</MenuItem>
              <MenuItem value={6}>Connecticut</MenuItem>
              <MenuItem value={7}>Delaware</MenuItem>
              <MenuItem value={8}>District Of Columbia</MenuItem>
              <MenuItem value={9}>Florida</MenuItem>
              <MenuItem value={10}>Georgia</MenuItem>
              <MenuItem value={11}>Hawaii</MenuItem>
              <MenuItem value={12}>Idaho</MenuItem>
              <MenuItem value={13}>Illinois</MenuItem>
              <MenuItem value={14}>Indiana</MenuItem>
              <MenuItem value={15}>Iowa</MenuItem>
              <MenuItem value={16}>Kansas</MenuItem>
              <MenuItem value={17}>Kentucky</MenuItem>
              <MenuItem value={18}>Louisiana</MenuItem>
              <MenuItem value={19}>Maine</MenuItem>
              <MenuItem value={20}>Maryland</MenuItem>
              <MenuItem value={21}>Massachusetts</MenuItem>
              <MenuItem value={22}>Michigan</MenuItem>
              <MenuItem value={23}>Minnesota</MenuItem>
              <MenuItem value={24}>Mississippi</MenuItem>
              <MenuItem value={25}>Missouri</MenuItem>
              <MenuItem value={26}>Montana</MenuItem>
              <MenuItem value={27}>Nebraska</MenuItem>
              <MenuItem value={28}>Nevada</MenuItem>
              <MenuItem value={29}>New Hampshire</MenuItem>
              <MenuItem value={30}>New Jersey</MenuItem>
              <MenuItem value={31}>New Mexico</MenuItem>
              <MenuItem value={32}>New York</MenuItem>
              <MenuItem value={33}>North Carolina</MenuItem>
              <MenuItem value={34}>North Dakota</MenuItem>
              <MenuItem value={35}>Ohio</MenuItem>
              <MenuItem value={36}>Oklahoma</MenuItem>
              <MenuItem value={37}>Oregon</MenuItem>
              <MenuItem value={38}>Pennsylvania</MenuItem>
              <MenuItem value={39}>Rhode Island</MenuItem>
              <MenuItem value={40}>South Carolina</MenuItem>
              <MenuItem value={41}>South Dakota</MenuItem>
              <MenuItem value={42}>Tennessee</MenuItem>
              <MenuItem value={43}>Texas</MenuItem>
              <MenuItem value={44}>Utah</MenuItem>
              <MenuItem value={45}>Vermont</MenuItem>
              <MenuItem value={46}>Virginia</MenuItem>
              <MenuItem value={47}>Washington</MenuItem>
              <MenuItem value={48}>West Virginia</MenuItem>
              <MenuItem value={49}>Wisconsin</MenuItem>
              <MenuItem value={50}>Wyoming</MenuItem>
            </Select> 
          </FormControl> */}
        </div>

        <div
          className="checked"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            className={classes.textFieldDiv}
            style={{ width: "155px" }}
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            size=""
          />

          <div style={{ width: "333px" }}>
            <Checkbox
              classes={{
                root: classes.checkField,
                checked: classes.checked,
              }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "47px",
                color: "#1F2327",
              }}
            >
              {" "}
              I own this residence
            </span>
          </div>
        </div>

        <div>
          <Button
            style={{ color: "black", border: "1px solid black", width: "20px" }}
            onClick={onClick}
          >
            popup
          </Button>
          {showResults ? <ErrorDetail /> : null}
        </div>
      </div>
    </div>
  );
};

export default NewCustomerAddress;

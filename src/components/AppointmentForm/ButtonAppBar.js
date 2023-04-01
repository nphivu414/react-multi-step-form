import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  nextButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& .MuiButton-root.Mui-disabled": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const {
    nextHide,
    _handleBack,
    isSubmitting,
    isNextdisabled,
    isLastStep,
  } = props;

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "35%",
      }}
    >
      <Box
        sx={{
          background: "#F2F5FB",
          color: "#1F2327",
          height: "48px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <Button className={classes.backButton} onClick={_handleBack}>
          Back
        </Button>
        {!nextHide ? (
          <Button
            className={classes.nextButton}
            disabled={isNextdisabled || isSubmitting}
            type="submit"
          >
            {isLastStep ? "Submit" : "Next"}
          </Button>
        ) : (
          ""
        )}

        {isSubmitting && <CircularProgress size={24} />}
      </Box>
    </Box>
  );
}

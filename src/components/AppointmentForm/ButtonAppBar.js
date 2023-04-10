import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCheck,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

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
    color: "#fff !Important",
    "&.MuiButton-root.Mui-disabled": {
      opacity: "0.4 !Important",
      color: "#fff !Important",
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
        position: "relative",
        width: "100%",
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
        <Button
          style={{
            borderRadius: "500px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.09)",
            padding: "2px 12px",
          }}
          startIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
          className={classes.backButton}
          onClick={_handleBack}
        >
          <span
            style={{ fontSize: "14px", fontWeight: "600", padding: "4px 2px" }}
          >
            Back
          </span>
        </Button>
        {!nextHide ? (
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "8px 12px",
              gap: "4px",
              height: "32px",
              background: "#007BFF",
              borderRadius: "500px",
              backgroundColor: "#007BFF",
            }}
            startIcon={
              isLastStep ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faArrowRightLong} size="sm" />
              )
            }
            className={classes.nextButton}
            disabled={isNextdisabled || isSubmitting}
            type="submit"
          >
            {isLastStep ? (
              <span style={{ padding: "4px 2px" }}>Confirm appointment </span>
            ) : (
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  padding: "4px 2px",
                }}
              >
                Next
              </span>
            )}
          </Button>
        ) : (
          ""
        )}

        {isSubmitting && <CircularProgress style={{position: 'absolute',bottom: '300px',left: '200px',zIndex: '1'}} size={100} />}
      </Box>
    </Box>
  );
}

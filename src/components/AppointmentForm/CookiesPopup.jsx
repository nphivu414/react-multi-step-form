import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const CookiesPopup = (props) => {
  const { setIsShowCookies, isShowCookies } = props;
  const handleClose = () => {
    setIsShowCookies(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isShowCookies}
      onClose={handleClose}
      message="This website uses cookies to improve your experience. By using this site, you agree to our use of cookies."
      action={
        <Button color="secondary" size="small" onClick={handleClose}>
          Accept
        </Button>
      }
    />
  );
};

export default CookiesPopup;

import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import styles from "./style";

type ErrorAlertProps = {
  message: string;
};

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <img/>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h6" sx={classes.message}>
              {message ? message : "Something went wrong please try again!!!"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ErrorAlert;

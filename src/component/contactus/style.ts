import { Theme } from "@mui/material/styles";

const styles = (theme: Theme) => ({
  container: {
    padding: "10%",
    [theme.breakpoints.down("md")]: {
      padding: "15% 0 0 0",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: "600",
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  subHeading: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
      padding:'0 10%'

    },
  },
  formContainer: {
    padding: "0 5rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
  },
  inputFields: {
    width: "100%",
    padding: "0.6rem",
  },
  submitButton: {
    cursor: "pointer",
    marginTop: theme.spacing(3),
    width: "30%",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white",
      transition: `all 0.5s ease`,
    },
    [theme.breakpoints.down("md")]:{
      width: "90% !important",
    }
  },
});

export default styles;

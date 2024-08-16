import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontWeight: 750,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.9rem",
    },
  },
  content: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
  },
  button: {
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white",
      transition: `all 0.5s ease`,
    },
  },
});

export default styles;

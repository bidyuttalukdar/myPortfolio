import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6),
    padding: "4% 6%",
  },
  overViewSection: {
    fontWeight: "800",
    padding: "4%",
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
  aboutSectionOne: {
    backgroundImage: 'linear-gradient(to right, #161F2A , #e6e6e6)',
    alignItems: "left",
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'linear-gradient(to right, #161F2A , #161F2A)',
    },
  },
  aboutSectionTwo: {
    backgroundImage: 'linear-gradient(to right,#fff, #161F2A )',
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'linear-gradient(to right, #161F2A , #161F2A)',
      display:'none'
    },
  },
  aboutContainer: {
    padding: "6% 8%",
  },
  aboutTitle: {
    color: theme.palette.tertiary.main,
    fontWeight: 800,
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
  },
  aboutSubtitle: {
    marginTop: theme.spacing(3),
    color: "white",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },
  aboutDescription: {
    color: theme.palette.tertiary.main,
    fontSize: "0.8rem",
    textAlign: "auto",
  },
  myImage: {
    maxWidth: "100%",
  },
  imageDiv: {
    margin: "10% 30% 10% -30%",
    [theme.breakpoints.down("md")]: {
      display:'none'
    },
  },
  summary: {
    backgroundColor: theme.palette.primary.main,
  },
  summaryContainer: {
    padding: "4%",
  },
  w100: {
    width: "100%",
  },
  mainSection: {
    minHeight: "50%",
  },
});
export default styles;

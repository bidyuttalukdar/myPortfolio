import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  root: {
    padding: "4% 10%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    [theme.breakpoints.down("md")]: {
      fontSize: '1.5rem',
    },
  },
  subtitle: {
    color: theme.palette.primary.main,
  },
});

export default styles;

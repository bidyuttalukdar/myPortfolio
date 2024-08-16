import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  root: {
    padding: "4% 10%",
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
  },
  title: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    color: theme.palette.primary.main,
  },
});

export default styles;

import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  appBar: {
    background: theme.palette.primary.main,
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
  offset: {
    // This is to add space below the fixed AppBar
    ...theme.mixins.toolbar,
  },
  toolBar:{
    padding:"0% 6%"
  },
  logo:{
    padding:"0% 4%"
  }
});

export default styles;

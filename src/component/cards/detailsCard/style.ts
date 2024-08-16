import { Theme } from "@mui/material/styles";

const styles = (theme: Theme) => ({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.tertiary.main,
      color: "white",
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  cardAction: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.primary.main,
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
  },
  title: {
    color: theme.palette.secondary.main,
  },
});

export default styles;

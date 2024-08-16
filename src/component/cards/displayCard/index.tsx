import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./style";

type DisplayCardProps = {
  title: string;
  subtitle: string;
  content: string;
  buttonText: string;
  style: React.CSSProperties;
  nextroute: string;
};

const DisplayCard: React.FC<DisplayCardProps> = ({
  title,
  content,
  buttonText,
  nextroute,
  style,
}) => {
  const theme = useTheme();
  const classes = styles(theme);
const navigate = useNavigate();

  const onClickHandler = () =>{
    navigate(nextroute);
  }

  return (
    <>
      <Card sx={style}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {title && (
                <Typography variant="h1" sx={classes.title} align="left">
                  <div dangerouslySetInnerHTML={{ __html: title }} />
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {content && (
                <Typography variant="h6" sx={classes.content} align="left">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {buttonText && (
            <Button
              onClick={onClickHandler}
              variant="outlined"
              sx={classes.button}
            >
              {buttonText} &nbsp;<ArrowRightAltIcon />
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default DisplayCard;

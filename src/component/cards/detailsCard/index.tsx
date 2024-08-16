import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import moment from "moment";
import styles from "./style.ts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type DetailsCardProps = {
  title: string;
  description: string;
  link: string;
  imagePath: string;
  dateString: string;
};

const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  description = "",
  link,
  imagePath,
  dateString,
}) => {
  const theme = useTheme();
  const classes = styles(theme);
  const dateTimeFormatted = moment(dateString, "DD/MM/YYYY").format(
    "Do MMM YYYY"
  );
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={classes.cardContainer}>
      <a href={link} style={{ textDecoration: "none" }}>
        {imagePath && (
          <CardMedia
            component="img"
            image={imagePath}
            alt="logo"
            width="auto"
            height="100px"
            sx={{
              borderRadius: "8px",
              objectFit: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
        <CardContent sx={classes.cardContent}>
          {dateString && (
            <Typography variant="subtitle2" sx={classes.title}>
              {dateTimeFormatted}
            </Typography>
          )}
          <Typography variant="h6" sx={classes.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </a>
      <CardActions sx={classes.cardAction}>
        {link && link}
        {description && false && (
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ color: theme.palette.secondary.main }}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DetailsCard;

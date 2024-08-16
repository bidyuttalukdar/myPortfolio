import { Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useTheme } from "@mui/material";
import DetailsCard from "../../component/cards/detailsCard";
import styles from "./style";
// @ts-expect-error @ts-ignore
import { getProjects } from "../../queries/project/index.js";

const projectJson = [
  {
    title: "Guardian Group",
    url: "https://www.myguardiangroup.com/",
    // imagepath: "/images/lightLogo.webp",
  },
  {
    title: "Poker Planner - Azure Extension",
    url: "https://marketplace.visualstudio.com/items?itemName=EstimationPoker.estimate",
    // imagepath: "/images/lightLogo.webp",
  },
  {
    title: "Tror, GEN AI",
    url: "https://tror.ai/",
    // imagepath: "/images/tror2.jpg",
  },
  {
    title: "IWT E-Ticketing",
    url: "https://www.asiwt.in/",
    // imagepath: "/images/awt.png",
  },
  {
    title: "Assam Inland Water Transport Authority",
    url: "https://aiwtra.in/",
    // imagepath: "/images/awt.png",
  },
  {
    title: "Assam State Transport Corporation",
    url: "https://www.myguardiangroup.com/",
    // imagepath: "/images/lightLogo.webp",
  },
];

const appreciationJson = [
  {
    title: "Above & Beyond",
    url: "https://www.linkedin.com/in/bidyut-talukdar/details/honors/",
    description:"",
    date: "30/12/2023",
  },
  {
    title: "Recognizing Team Excellence",
    url: "https://express.tezo.com/2024/may",
    description:
      "Celebrating the Dedication and Effort of Our Outstanding Team",
    date: "04/05/2024",
  },
  {
    title: "Hack for health - Hackathon, IIT Guwahati",
    url: "https://www.linkedin.com/in/bidyut-talukdar/details/honors/",
    description:"During the event, My team had been worked for program to give the efficient search of any kind of medical institutions such as Medical, Pharmacy, Clinic, etc on Google Map API",
    date: "01/01/2019",
  },
  {
    title:
      "Winner at Code Fest'18, organised by T&P Cell, GUIST in Association with Beyond Pvt. Ltd",
    url: "https://www.linkedin.com/in/bidyut-talukdar/details/honors/",
    description:
      "In Code Fest organized by Training and Placement Cell in Association with Beyond Consultancy Services, we participate as a team 'Uddeshya' and work on reverse logistic problem statement and developed an android app.",
    date: "15/09/2018",
  },
];


// Define the TypeScript types
interface ProjectAttributes {
  title: string;
  description: string;
  url: string;
  imagepath: string;
}

interface ProjectData {
  attributes: ProjectAttributes;
}

interface ProjectsData {
  projects: {
    data: ProjectData[];
  };
}
const WorkPage: React.FC = () => {
  const theme = useTheme();
  const classes = styles(theme);

  const projectsReponse = useQuery<ProjectsData>(getProjects);

  const projects =
    projectsReponse?.data?.projects?.data.map(
      (project) => project.attributes
    ) || projectJson;

  return (
    <>
      <Grid container spacing={2} sx={classes.root}>
        <Grid item xs={12}>
          <Typography sx={classes.title} align="left">
            /Works...
          </Typography>
          <Typography variant="subtitle1" sx={classes.subtitle} align="left">
            Selected work I've taken on in the past.
          </Typography>
        </Grid>
        {projects &&
          projects.length > 0 &&
          projects.map((item, index) => {
            return (
              <Grid item xs={12} lg={6} key={index}>
                <DetailsCard
                  title={item.title}
                  link={item.url}
                  description=""
                  imagePath=""
                  dateString=""
                />
              </Grid>
            );
          })}

        <Grid item xs={12}>
          <Typography sx={classes.title} mt={2} align="left">
            /Appreciation ...
          </Typography>
          <Typography variant="subtitle1" sx={classes.subtitle} align="left">
            Heartfelt Thanks
          </Typography>
        </Grid>
        {appreciationJson &&
          appreciationJson.length > 0 &&
          appreciationJson.map((item, index) => {
            return (
              <Grid item xs={12} lg={6} key={index}>
                <DetailsCard
                  title={item.title}
                  link={item.url}
                  description={item.description}
                  imagePath=""
                  dateString={item.date}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
export default WorkPage;

import { Grid, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material";
import ContactUsComponent from "../../component/contactus";
import DisplayCard from "../../component/cards/displayCard";
import styles from "./style";

const aboutMe = [
  {
    title: "I build & <br/>design stuff",
    content: "Open source projects, web apps <br/>and experimentals.",
    style: {
      padding: "20px",
      paddingLeft: "10px",
      width: "100%",
    },
    buttonText: "See My Work",
    nextroute: "/projects",
  },
  {
    title: "I write,<br/> sometimes",
    content: "About design, frontend dev,<br/> learning and life.",
    style: {
      padding: "20px",
      paddingLeft: "10px",
      width: "100%",
    },
    buttonText: "Read My Blog",
    nextroute: "/blogs",
  },
];

const Home = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container sx={{ minHeight: "40%" }}>
            <Grid item xs={12} md={7} lg={8} sx={classes.aboutSectionOne}>
              <Grid container sx={classes.aboutContainer} spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ color: "white" }}>
                    Bidyut Talukdar
                  </Typography>
                  <Typography variant="h1" sx={classes.aboutTitle}>
                    Software Developer<span style={{ color: "white" }}>.</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <Typography sx={classes.aboutSubtitle}>
                    I like to craft solid and scalable products with great user
                    experiences.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <Typography sx={classes.aboutDescription}>
                    Skilled in building dynamic user interfaces with React,
                    efficient server-side logic with Node.js, and flexible data
                    management with MySql, Oracle SQL or MongoDB.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5} lg={4} sx={classes.aboutSectionTwo}>
              <div style={classes.imageDiv}>
                <img src="./images/bidyutnew.jpg" alt="me" width="65%" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={classes.summary}>
          <Grid container sx={classes.summaryContainer}>
            <Grid item xs={12} md={6}>
              <Typography
                color={theme.palette.tertiary.main}
                sx={classes.overViewSection}
              >
                Over the years,
              </Typography>
              <p
                style={{
                  textAlign: "justify",
                  padding: "0 4%",
                  color: "white",
                }}
              >
                I've successfully developed and deployed robust web
                applications for a global clientele, encompassing industries
                from finance to enterprise solutions. My expertise lies in
                crafting intuitive, high-performance user experiences while
                adhering to industry best practices.
                <br />
                <br />
                Proficient in building scalable e-ticketing, payment, and
                insurance systems. Demonstrated expertise in integrating AI APIs
                to enhance application functionality.
                <br />
                <br />
                Passionate about leveraging technology to drive innovation and
                deliver exceptional user experiences.
              </p>
            </Grid>
            <Grid item xs={12} md={6} p={6} align="center">
              <img
                src="./images/productivity4.png"
                alt="me"
                style={{ width: "60%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={classes.container}>
            {aboutMe && (
              <>
                {aboutMe.map((item, index) => {
                  return (
                    <Grid item md={6} lg={6} xs={12} key={index}>
                      <Link href={item.nextroute} underline="none">
                        <DisplayCard
                          title={item.title}
                          content={item.content}
                          style={item.style}
                          buttonText={item.buttonText}
                          nextroute={item.nextroute}
                          subtitle=""
                        />
                      </Link>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} mb={1}>
          <ContactUsComponent />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;

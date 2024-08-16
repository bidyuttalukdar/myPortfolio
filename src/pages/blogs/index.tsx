import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import DetailsCard from "../../component/cards/detailsCard/index.tsx";
// @ts-expect-error @ts-ignore
import { getposts } from "../../queries/blogs/index.js";
import styles from "./style.ts";
import { useQuery } from "@apollo/client";

const blogsJson = [
  {
    title:
      "Unlocking the Power of Concurrent Rendering and More with hashtag#React",
    url: "https://www.linkedin.com/posts/activity-7133499540111839232-9VWg?utm_source=share&utm_medium=member_desktop",
    date: "04/01/2024",
  },
];


interface BlogsAttributes {
  title: string;
  description: string;
  url: string;
  imagepath: string;
  date: string;
}

interface BlogData {
  attributes: BlogsAttributes;
}

interface BlogsData {
  projects: {
    data: BlogData[];
  };
}

const BlogPage = () => {
  const theme = useTheme();
  const classes = styles(theme);

  const blogsResponse = useQuery<BlogsData>(getposts);

  const blogs =
    blogsResponse?.data?.projects?.data.map((posts) => posts.attributes) ||
    blogsJson;

  return (
    <>
      <Grid container spacing={2} sx={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={classes.title} align="center">
            /Posts...
          </Typography>
          <Typography variant="subtitle1" sx={classes.subtitle} align="center">
            Some of my selected post, I've wrote in the past.
          </Typography>
        </Grid>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((item, index) => {
            return (
              <Grid item xs={12} lg={6} key={index}>
                <DetailsCard
                  title={item.title}
                  link={item.url}
                  description=""
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
export default BlogPage;

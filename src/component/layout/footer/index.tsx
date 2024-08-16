import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        width: "100%",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">bidyut3004@gmail.com</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;

import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styles from "./style";

const ContactUsComponent = () => {
  const theme = useTheme();
  const classes = styles(theme);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const submitHandler = () => {
    console.log("TO DO");
  };

  return (
    <>
      <Grid container spacing={1} sx={classes.container}>
        <Grid item xs={12} alignItems="center">
          <Typography
            sx={classes.heading}
            gutterBottom
            align="center"
          >
            Send me a message!
          </Typography>
          <Typography sx={classes.subHeading} align="center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Grid container spacing={1} sx={classes.formContainer}>
              <Grid item xs={12} md={6}>
                <TextField
                  {...register("name", { required: "Please fill your name!" })}
                  error={!!errors?.name}
                  placeholder="Your Name"
                  sx={classes.inputFields}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  {...register("email", {
                    required: "Please fill your email!",
                  })}
                  placeholder="Your Email"
                  sx={classes.inputFields}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Message..."
                  {...register("message", {
                    required: "Please put a message!",
                  })}
                  sx={classes.inputFields}
                  multiline
                  rows={4}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} align="center">
                <Button variant="outlined" sx={classes.submitButton}>
                  Send &nbsp;
                  <KeyboardDoubleArrowRightIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUsComponent;

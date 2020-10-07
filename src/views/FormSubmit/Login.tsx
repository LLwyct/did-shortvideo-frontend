import * as React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Copyright from "../../components/CopyRight";
import { useHistory } from 'react-router-dom';

/**
 * Login api
 */
import AuthenticationService from "../../services/AuthenticationService";




export default function Login(props: any) {
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const classes = useStyles();

  const formSubmitHandler: React.FormEventHandler = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    try {
      const {data} = await AuthenticationService.login({
        phoneNumber,
        password,
      });
      if (data.msg === "success") {
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      window.alert("网络连接失败，请稍后再试...");
      history.push("/profile");
      window.location.reload();
    }
  };

  return (
    <>
      <props.component colorMode={props.colorMode} />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form
            id="loginForm"
            className={classes.form}
            noValidate
            onSubmit={formSubmitHandler}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    fontWeight: 600,
    margin: theme.spacing(3, 0, 2),
  },
}));
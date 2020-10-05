import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountBox from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/CopyRight";
import { useParams } from "react-router-dom";


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
    margin: theme.spacing(3, 0, 2),
  },
}));

interface ParamTypes {
  op: string | undefined
}

export default function SignUp(props: any) {
  
  let { op } = useParams<ParamTypes>();
  function checkState (op: any) {
    if (op && op === "collect") return true;
    else return false;
  }
  const [isFinishRegister, setIsFinishRegister] = React.useState(checkState(op) ? true : false);

  return (
      <>
      <props.component colorMode={props.colorMode} />
      <Container component="main" maxWidth="xs">
        {
          isFinishRegister 
          ? <InformCollect />
          : <Register changeRegisterState={setIsFinishRegister}/> 
        }
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

function Register(props: any) {
  const classes = useStyles();
  
  const formSubmitHandler: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // pass
    props.changeRegisterState(true);
  };
  

  const [second, setSecond] = React.useState(60);
  const [isSendVCode, setIsSendVCode] = React.useState(false);

  async function getVerificationCode() {
    // pass
    if (isSendVCode === false) {
      setSecond(5);
      setIsSendVCode(true);
    }
  }

  React.useEffect(() => {
    if (isSendVCode) {
      console.log("start a timer");
      const timer = setInterval(() => {
        setSecond(v => {
          if (v === 1) {
            setIsSendVCode(false);
            setSecond(5);
            clearInterval(timer);
          }
          return v - 1;
        });
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isSendVCode]);

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phoneNumber"
              label="phone number"
              name="phoneNumber"
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
            />
          </Grid>
          <Grid item xs={12} spacing={1} container alignItems="center">
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="verificationCode"
                label="verification code"
                id="verificationCode"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={2} style={{ height: "100%" }}>
              {isSendVCode ? (
                <Button
                  style={{ height: "100%" }}
                  variant="contained"
                  disableElevation
                  onClick={getVerificationCode}
                  disabled
                >
                  {second}
                </Button>
              ) : (
                <Button
                  style={{ height: "100%" }}
                  variant="contained"
                  disableElevation
                  onClick={getVerificationCode}
                >
                  GET
                </Button>
              )}
            </Grid>
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
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

function InformCollect() {
  const formSubmitHandler: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar} style={{ backgroundColor: "green" }}>
        <AccountBox/>
      </Avatar>
      <Typography component="h1" variant="h5" align="center">
        Register Finished!
      </Typography>
      <Typography component="h2" align="center">
        And We Need Collect Your DID Information
      </Typography>
      <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="identity number"
              label="identity number"
              id="id"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="phoneNumber"
              label="phone number"
              id="phoneNumber"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="age"
              label="age"
              type="number"
              id="age"
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
          SUBMIT
        </Button>
      </form>
    </div>
  )
}
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
import { useParams, useHistory } from 'react-router-dom';

/**
 * Signup api
 */
import AuthenticationService from "../../services/AuthenticationService";


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

  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  
  const formSubmitHandler: React.FormEventHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let {data} = await AuthenticationService.register({
        phoneNumber,
        password
      });
      if (data.status === true) {
        props.changeRegisterState(true);
      }
    } catch (error) {
      console.log(error);       
    } finally {
    }
  };
  

  const [second, setSecond] = React.useState(60);
  const [isSendVCode, setIsSendVCode] = React.useState(false);

  async function getVerificationCode() {
    // pass
    if (isSendVCode === false) {
      setSecond(60);
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
            setSecond(60);
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={formSubmitHandler}
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
  const [name, setName] = React.useState("");
  const [identityNumber, setIdentityNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState(18);

  const history = useHistory();

  const formSubmitHandler: React.FormEventHandler = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    try {
      let { data } = await AuthenticationService.finishUserInformation({
        name,
        identityNumber,
        email,
        age,
      });
      console.log(data);
      if (true) {
        history.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar} style={{ backgroundColor: "green" }}>
        <AccountBox />
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="identityNumber"
              label="identity number"
              id="identityNumber"
              value={identityNumber}
              onChange={(e) => setIdentityNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="email"
              label="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
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
  );
}
import * as React from 'react';
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import DidCard from '../../../components/DidCard';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import QRCode from '../../../assets/QRCode.jpg';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  card: {
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
  },
  qrcode_img: {
    minWidth: "200px",
    width: "100%"
  }
}));

function Didinfo() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper);

    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9} className={fixedHeightPaper}>
            <Typography variant="h5" style={{ marginBottom: "15px" }}>
              Your DID Card
            </Typography>
            <DidCard></DidCard>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper} elevation={3}>
              <img src={QRCode} alt="QRCode" className={classes.qrcode_img} />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="flex-start"
          style={{ marginTop: "50px" }}
        >
          <Grid item xs={12}>
            <Typography variant="h5" style={{ marginBottom: "30px" }}>
              Recent Login History
            </Typography>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ padding: 0 }}
            >
              <List>
                <ListItem>
                  <Grid container alignItems="center" justify="space-between">
                    <Typography variant="h6">抖音</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2020 10-24 14:32
                    </Typography>
                  </Grid>
                </ListItem>
                <Divider />
                <ListItem>
                  <Grid container alignItems="center" justify="space-between">
                    <Typography variant="h6">抖音</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2020 10-24 14:32
                    </Typography>
                  </Grid>
                </ListItem>
                <Divider />
                <ListItem>
                  <Grid container alignItems="center" justify="space-between">
                    <Typography variant="h6">火山小视频</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2020 10-24 14:32
                    </Typography>
                  </Grid>
                </ListItem>
                <Divider />
                <ListItem>
                  <Grid container alignItems="center" justify="space-between">
                    <Typography variant="h6">快手</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      2020 10-24 14:32
                    </Typography>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
}

export default Didinfo;
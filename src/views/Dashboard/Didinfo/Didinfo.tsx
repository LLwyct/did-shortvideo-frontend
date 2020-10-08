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
import { IHistory } from '../LoginHistory/LoginHistory';

const fakeHisioryList: Array<IHistory> = [
  {
    name: "微视短视频",
    date: "2020 10-24 14:32",
    ipAddress: "103.65.102.18",
    loginAddress: "北京"
  },
  {
    name: "抖音短视频",
    date: "2020 10-24 09:32",
    ipAddress: "103.65.102.18",
    loginAddress: "北京"
  },
  {
    name: "微视短视频",
    date: "2020 10-23 23:32",
    ipAddress: "103.65.102.18",
    loginAddress: "北京"
  },
  {
    name: "快手",
    date: "2020 10-23 14:03",
    ipAddress: "10.100.12.93",
    loginAddress: "陕西西安"
  },
  {
    name: "抖音短视频",
    date: "2020 10-23 14:01",
    ipAddress: "10.100.12.93",
    loginAddress: "陕西西安"
  },
]

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
  function generateList(fakeHisioryList: Array<IHistory>) {
    return fakeHisioryList.map((item: IHistory, index: number) => {
      return (
        <ListItem key={index}>
            <Grid container alignItems="center" justify="space-between">
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.date}
              </Typography>
            </Grid>
          <Divider />
        </ListItem>
      );
    })
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9} className={fixedHeightPaper}>
          <Typography variant="h5" style={{ marginBottom: "15px" }}>
            Your DID Card
          </Typography>
          <DidCard />
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
              {
                generateList(fakeHisioryList)
              }
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Didinfo;
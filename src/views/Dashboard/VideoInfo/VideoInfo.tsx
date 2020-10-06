import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import onepunch from '../../../assets/one punch.jpg';
// import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function VideoInfo () {
    return (
      <>
        <Typography
          variant="h4"
          component="h1"
          style={{ marginBottom: "30px" }}
        >
          Uploaded Videos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={3} style={{ height: "100%" }}>
              <Grid container justify="space-between">
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={onepunch}
                  title="Contemplative Reptile"
                  height="240px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h1">
                    《一拳超人》第三季
                    24.能击败埼玉的神明终于现身！？英雄协会遭遇史上最大危机！（最新章）
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: "20px" }}
                  >
                    发布日期：2020-09-30 14:11
                    <br />
                    上链信息：key=a15b6c684d8e456a6c6b87f8eee8565c16a2c
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={3} style={{ height: "100%" }}>
              <Grid container justify="space-between">
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={onepunch}
                  title="Contemplative Reptile"
                  height="240px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h1">
                    《一拳超人》第三季
                    24.能击败埼玉的神明终于现身！？英雄协会遭遇史上最大危机！（最新章）
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: "20px" }}
                  >
                    发布日期：2020-09-30 14:11
                    <br />
                    上链信息：key=a15b6c684d8e456a6c6b87f8eee8565c16a2c
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={3} style={{ height: "100%" }}>
              <Grid container justify="space-between">
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={onepunch}
                  title="Contemplative Reptile"
                  height="240px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h1">
                    《一拳超人》第三季
                    24.能击败埼玉的神明终于现身！？英雄协会遭遇史上最大危机！（最新章）
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: "20px" }}
                  >
                    发布日期：2020-09-30 14:11
                    <br />
                    上链信息：key=a15b6c684d8e456a6c6b87f8eee8565c16a2c
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </>
    );
}
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/**
 *  图片导入
 */
import onepunch1 from '../../../assets/one punch.jpg';

const fakeVideoList = [
  {
    title: "《一拳超人》第三季 42.埼玉最新绝招遭吐槽！！龙卷独特“马杀鸡”手法捏爆怪人赛大蛇！",
    plantform: "BiliBili",
    imgsrc: onepunch1,
    publicDate: "2020年09月18日 10:23",
    blockchainInfo: "78EDA3B7F87B1B46",
  },
  {
    title: "《一拳超人》第三季 41.神级怪人竟传授埼玉新技能！赛克斯身体被龙卷无情入侵！",
    plantform: "BiliBili",
    imgsrc: onepunch1,
    publicDate: "2020年08月05日 18:59",
    blockchainInfo: "BC4B2A76B9719D91",
  },
  {
    title: "《一拳超人》第三季 40.神明终于显露真身！！觉醒的赛大蛇力量赶超波罗斯，龙卷恐遇史诗级危机！",
    plantform: "BiliBili",
    imgsrc: onepunch1,
    publicDate: "2020年07月10日 11:14",
    blockchainInfo: "A0760186574B0282",
  },
]

const generateVideoList = (fakeVideoList: any) => {
  return fakeVideoList.map((item: any, index: number) => {
      return (
        <Grid container item xs={12} md={6} lg={4} key={index}>
          <Card elevation={3} >
            <Grid container justify="space-between">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={item.imgsrc}
                title="Contemplative Reptile"
                height="240px"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h1">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: "20px" }}
                >
                  {`发布平台: ${item.plantform}`}
                  <br />
                  {`发布日期: ${item.publicDate}`}
                  <br />
                  {`上链信息: ${item.blockchainInfo}`}
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      )
    })
}

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
        {
          generateVideoList(fakeVideoList)
        }
        </Grid>
      </>
    );
}
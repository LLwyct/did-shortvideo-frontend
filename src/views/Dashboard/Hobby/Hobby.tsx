import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import Switch from '@material-ui/core/Switch';
import { FormGroup, FormControlLabel} from '@material-ui/core';


const fakeHobbyData = [
  {
    plantform: "微视短视频",
    hobbies: [
        "财经",
        "汽车",
        "户外",
        "登山",
        "蹦极",
    ]
  },
  {
    plantform: "BiliBili",
    hobbies: [
        "动漫",
        "搞笑",
        "吃播",
    ]
  },
  {
    plantform: "抖音",
    hobbies: [
        "颜值",
        "跳舞",
        "电影解说",
    ]
  },
];

function Hobby () {

    function generateList() {
        return fakeHobbyData.map((item, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.plantform}
                    </Typography>
                    <Grid container spacing={1}>
                    {
                        item.hobbies.map((subItem, subidx) => {
                            return (
                              <Grid item key={subidx}>
                                <Chip label={subItem} color="primary" variant="outlined" size="small"/>
                              </Grid>
                            );
                        })
                    }
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <FormGroup row>
                      <FormControlLabel
                        control={<Switch name="checkedA" />}
                        label="是否共享兴趣"
                      />
                    </FormGroup>
                  </CardActions>
                </Card>
              </Grid>
            );
        })
    }


    return (
      <Grid container spacing={2}>
        {
            generateList()
        }
      </Grid>
    );
}

export default Hobby;
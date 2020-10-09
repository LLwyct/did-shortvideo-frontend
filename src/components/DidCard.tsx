import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: "0 8px 24px -5px rgba(0,0,0,0.24)",
    padding: "15px"
  },
}));

function DidCard () {
    const style = useStyles();
    return (
      <Card elevation={0} variant="outlined" className={style.card}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Name: {"Liwenchi"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            age: {17}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            identity card: {"512**********5110"}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: "15px", wordBreak: "break-all"}} component="p">
            public key: {"936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af"}
          </Typography>
          <Divider></Divider>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: "15px" }}>
            防沉迷状态: {"启动"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            青少年模式: {"启动"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            信用评级: {"A"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            信用分数: {"97"}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default DidCard;
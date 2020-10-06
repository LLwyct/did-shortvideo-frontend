import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default function LoginHistory () {
    function generate(element: any) {
        return [1,2,3,4,5,6].map(v => {
            return React.cloneElement(element,{
                key: v
            });
        })
    }

    return (
        <Grid container>
            <Typography variant="h4">Login History</Typography>
            <Grid xs={12}>
                <List>
                    {
                        generate(
                            <Grid xs={12} style={{padding: "5px 0", margin: "5px 0"}}>
                                <ListItemText primary="抖音" secondary="登录日期:2020 10-24 14:32"></ListItemText>
                                <ListItemText secondary="登录地点:陕西西安"></ListItemText>
                                <ListItemText secondary="登录IP地址:103.65.103.66"></ListItemText>
                                <Divider />
                            </Grid>
                        )
                    }
                </List>
            </Grid>
        </Grid>
    )
}
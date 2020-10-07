import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export interface IHistory {
    name: string;
    date: string;
    ipAddress: string;
    loginAddress: string;
}

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
    {
        name: "火山小视频",
        date: "2020 10-22 00:32",
        ipAddress: "103.65.102.18",
        loginAddress: "北京"
    },
    {
        name: "抖音短视频",
        date: "2020 10-20 09:38",
        ipAddress: "103.65.102.18",
        loginAddress: "北京"
    },
    {
        name: "微视短视频",
        date: "2020 10-20 14:22",
        ipAddress: "103.65.102.18",
        loginAddress: "北京"
    },
]

export default function LoginHistory () {
    const [historyList, setHistoryList] = React.useState<Array<IHistory>>([]);

    function generateList() {
        return fakeHisioryList.map((item: IHistory, index: number) => {
                return (
                    <Grid xs={12} style={{ padding: "5px 0", margin: "5px 0" }} key={index}>
                        <ListItemText primary={item.name} secondary={`登陆日期: ${item.date}`}></ListItemText>
                        <ListItemText secondary={`登录地点: ${item.loginAddress}`}></ListItemText>
                        <ListItemText secondary={`登录IP地址: ${item.ipAddress}`}></ListItemText>
                        <Divider />
                    </Grid>
                )
            })
    }
    return (
        <Grid container>
            <Typography variant="h4">Login History</Typography>
            <Grid xs={12}>
                <List>
                    {
                        generateList()
                    }
                </List>
            </Grid>
        </Grid>
    )
}
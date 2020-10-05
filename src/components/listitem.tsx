import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HistoryIcon from "@material-ui/icons/History";
import UserIcon from "@material-ui/icons/AccountBox";
import FavourateIcon from "@material-ui/icons/Favorite";
import BarChartIcon from "@material-ui/icons/BarChart";
import VideoIcon from "@material-ui/icons/VideoLibrary";
import { Link, LinkProps } from "react-router-dom";

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);

export const mainListItems = (
  <div>
    <ListItem component={AdapterLink} to="/profile">
      <ListItemIcon>
        <UserIcon />
      </ListItemIcon>
      <ListItemText primary="个人中心" />
    </ListItem>
    <ListItem button component={AdapterLink} to="/profile/history">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="日志历史" />
    </ListItem>
    <ListItem button component={AdapterLink} to="/profile/createcenter">
      <ListItemIcon>
        <VideoIcon />
      </ListItemIcon>
      <ListItemText primary="创作中心" />
    </ListItem>
    <ListItem button component={AdapterLink} to="/profile/dataanylize">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="数据分析" />
    </ListItem>
    <ListItem button component={AdapterLink} to="/profile/hobby">
      <ListItemIcon>
        <FavourateIcon />
      </ListItemIcon>
      <ListItemText primary="我的兴趣" />
    </ListItem>
  </div>
);

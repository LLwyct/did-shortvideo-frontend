import * as React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { FormGroup, FormControlLabel} from '@material-ui/core';

function Hobby () {
    return (
        <List>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                微视短视频
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Switch name="checkedA"/>} label="是否共享兴趣"
                                />
                            </FormGroup>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </List>
    )
}
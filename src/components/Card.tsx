import * as React from 'react';
import './Card.style.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface Card {
    img?: string;
    title: string;
    intro: string;
}

const App = (props: Card) => {
    return (
      <Card className="simple-card">
        <CardMedia
            component="img"
            image={props.img}
            title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.intro}
          </Typography>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "center"}}>
          <Button color="primary" style={{fontWeight: 600}}>Learn More</Button>
        </CardActions>
      </Card>
    );
}

export default App;
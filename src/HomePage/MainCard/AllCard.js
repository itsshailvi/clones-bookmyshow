import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AllCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin: '20px'}}>
      <CardMedia
        sx={{ height: 140 , padding: 10}}
        image="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRGOKZ1-AmwYYpG9OFmQYPCn-U22ORyXcAqnvvy1yaELrs5XAaWR0SYkNn9Q8SgtulK1nIoI-tyHN5YOYI"
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AllCard({image, title, rating, language}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin: '20px'}}>
      <CardMedia
        sx={{ height: 140 , padding: 10}}
        image={`https://image.tmdb.org/t/p/original${image}`}
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'space-between', padding: '5px 15px 15px 15px'}}>

        <div>{language} </div>
        <div>{rating}</div>
      </CardActions>
    </Card>
  );
}
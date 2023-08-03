import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { DescriptiveCard } from './DescriptiveCard';
const [showCard, setShowCard] = useState(false);

export default function AllCard({image, title, rating, language}) {
    const movieDetail = () => 
    <div>hello world </div>
    
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin: '20px'}} onClick={ <DescriptiveCard/>}>
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
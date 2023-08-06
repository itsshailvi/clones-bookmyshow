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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AllCard({image, title, rating, language,desc,popularity}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
      console.log('helloworld')
    };
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <>
    <Card sx={{ maxWidth: 345 }} style={{margin: '20px'}} onClick={handleOpen} >
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <DescriptiveCard img={`https://image.tmdb.org/t/p/original${image}`} title={title} rating={rating} desc={desc} popularity={popularity}/>
        </Box>
      </Modal>
    </>
    
  );
}
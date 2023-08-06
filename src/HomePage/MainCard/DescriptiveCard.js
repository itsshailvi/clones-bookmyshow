import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export function DescriptiveCard({rating, title, img,desc,popularity}) {

    const random = Math.random();
    const scaledRandom = (popularity/10).toFixed()
    const runtimeRandom = scaledRandom/2

    return (
        <div style={{display: 'flex', height: '400px', width: '700px'}}>
            <div >
                <img src={img} height={'300px'} width={'300px'}></img>
            </div>
            <div style={{marginLeft: '20px'}}>
                <h1>{title}</h1>
                <h5>Rating {rating}/10</h5>
                <h5>Time {runtimeRandom.toFixed()} minutes</h5>
                <div style={{margin: '10px 0px'}}>{desc}</div>
                <div>Price Rs {Math.round(scaledRandom)}</div>
                <div style={{marginTop: '10px'}}>

                    <Button variant="outlined"> Book Tickets</Button>
                    <Button variant="outlined" sx={{marginLeft: '10px'}}>Wishlist</Button>
                </div>
            </div>
        </div>
      );

}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function BasicCard(props) {

    const noteStyle = {
        maxWidth: '30vw',
        minWidth: '15vw',
        backdropFilter: "blur(10px) saturate(180%)",
        webkitBackdropFilter: "blur(10px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        margin: "5% 0%",
        position: "absolute",
        left: props.lpos,
        right: props.rpos,
        color: 'white',
    }

  return (
    <Card  sx={noteStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import anime from 'animejs';

export default function BasicButtons(props) {

    function animateButton(){
        anime({
            targets: ".stack",
            opacity: 1,
            delay: 500,
            duration: 1000,
            easing: "linear"
        });
    }

    if(props.animation){
        React.useEffect(() => {
            animateButton();
        }, []);
    }

    return (
        <Stack className = "stack" alignItems="center" sx={{...props.style, opacity: '0'}}>
        <Button onClick={props.ClickOn} variant="contained">{props.text}</Button>
        </Stack>
    );
}

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import anime from 'animejs';

export default function BasicButtons() {

    anime({
        targets: ".stack",
        opacity: 1,
        delay: 500,
        duration: 1000,
        easing: "linear"
    });

    return (
        <Stack className = "stack" alignItems="center" sx={{opacity: 0}}>
        <Button variant="contained">Get Started</Button>
        </Stack>
    );
}

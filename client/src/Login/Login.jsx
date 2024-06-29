import { Box, TextField } from '@mui/material'
import React from 'react'
import styles from './login.module.css';
import ResponsiveAppBar from '../components/Header'


function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
        height: undefined
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

function Login() {

    React.useEffect(() => {
        return () => {
            document.body.style.backgroundColor = 'black';
            // document.body.style.background = '#-webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29)';
            // document.body.style.background = '#linear-gradient(to left, #24243e, #302b63, #0f0c29)';
            document.body.style.display = 'flex',
                document.body.style.flexDirection = 'column';
            document.body.style.height = '100vh';
            document.body.style.position = 'relative';
        }
    }, []);

    const { width, height } = useWindowSize();

    // <ResponsiveAppBar />
    //         <div className={styles.divStyle} >
    //             <Box className={styles.boxStyle} component="form" noValidate='false' autoComplete='on'>
    //                 <TextField required variant='filled' label='Username' helperText='Enter your username' />
    //                 <TextField required type="password" variant='filled' label='password' helperText='Enter your username' />
    //             </Box>
    //         </div>

    return width >= 951 && (
        <div className={styles.divBigScreen}>
            <Box className={styles.boxBigScreen} >
                <h2>BAT-BLOG</h2>
                
                <h1>WELCOME BACK</h1>
                
                <h3>A place for your thoughts</h3>
            </Box>
            <Box className={styles.boxBigScreen}>
                <h1>World</h1>
            </Box>
        </div>
    )

}

export default Login
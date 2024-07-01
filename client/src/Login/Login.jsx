import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import styles from './login.module.css';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';


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

const useStyles = makeStyles({
    customTextField: {
        width: '80%',
        '& .MuiFilledInput-root': {
            color: 'white',
            backgroundColor: 'rgba(233, 255, 255, 0.2)',
            backdropFilter: "blur(10px) saturate(180%)",
            webkitBackdropFilter: "blur(10px) saturate(180%)",
            '&:hover': {
                backgroundColor: 'rgba(233, 255, 255, 0.3)'
            },
            '&:hover fieldset': {
                borderColor: 'rgba(233, 255, 255, 0.3)',
            },
            '&.Mui-focused': {
                backgroundColor: 'transparent',
                borderColor: 'red',
                boxShadow: '0px 0px 20px rgba(17, 25, 40, 1)',
            },
            '&.Mui-focused fieldset': {
                borderBottomColor: 'red'
            }

        },

        '& label.Mui-focused': {
            color: 'violet',
        },
        '& label': {
            color: 'skyblue',
            fontFamily: 'Arial, Helvetica, sans-serif'
        }
    }
});

function Login() {

    const style = useStyles();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

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
                <h2 className={styles.h2Style}>BAT-BLOG</h2>

                <h1 className={styles.boldTitleStyle}>WELCOME BACK</h1>

                <h3 className={styles.h3Style}>A place for your thoughts</h3>
            </Box>
            <Box className={styles.boxBigScreen}>
                <div className={styles.credentialsBox} >
                    <h1 className={styles.h1Style}>Login</h1>
                    <hr />
                    <p>Please provide your credentials so that you can continue your Batman journey.</p>
                </div>
                <Box className={styles.loginBox} component='form' method='POST' noValidate='false' autoComplete='on'>
                    <TextField required InputProps={{ disableUnderline: true }} variant='filled' label='Username' margin='none' className={style.customTextField} />
                    <TextField required className={style.customTextField} variant='filled' type={showPassword ? 'text' : 'password'} label='Password' margin='dense' InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
                    <Button type='submit' variant='contained'>Login</Button>
                </Box>
            </Box>
        </div>
    )

}

export default Login
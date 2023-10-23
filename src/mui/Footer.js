import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import {createTheme} from '@mui/material'
import { ThemeProvider } from 'styled-components';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
const theme = createTheme({
    palette: {
      primary: {main:"#fefefe"}, 
    }
  });
  function Copyright(props) {
    return (
      <Typography pt={2} variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
         Efrem-Yohanis new chage
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const Footer = () => {
    return ( 
       <ThemeProvider theme={theme}>
      <Box
        sx={{
        height: 50,
        backgroundColor: 'orange',
      }}
     >
        <Copyright />
    </Box>
       </ThemeProvider>
      
   
    );
}
 
export default Footer;
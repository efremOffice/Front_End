import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { amber,blue,orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {main:'#01579b'},
    secondary: amber,
    success:orange
    
  },
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
             <OtherHousesIcon color='primary'>
            </OtherHousesIcon>
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
          Forgot password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          
            
            <Button
              color="success"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                <Typography color="primary" variant='h6' component="h6"> 
                     Reset Password
                </Typography>
              
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                Sign in
                </Link>
              </Grid>
             
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}
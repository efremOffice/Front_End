import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ImageListItem,ImageList} from '@mui/material';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {orange,amber } from '@mui/material/colors'


const theme = createTheme({
    palette: {
      primary: {main:'#01579b'}, 
      secondary: amber,
      success:orange
    },
  });
  
const itemData = [
    
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
      },
      {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
      },
      {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
      },
      {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
      },
  ];

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

const HouseDetails = () => {
    return ( 
        <ThemeProvider theme={theme}>
 <Container maxWidth="md" sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 10,
            padding: 5
          }}>
          
            <Grid container spacing={4}>
                <Grid item xs={8} spacing={4}>
                <ImageList sx={{ width: 500, height: 500  }} spacing={4} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Typography variant='span' color='primary'>Location:-</Typography> <Typography variant='span' color='success.main'>Bole</Typography>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
          <Typography variant='span' color='primary'>Price:-</Typography> <Typography variant='span' color='success.main'>10,000 ETB</Typography>
       
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           
          <Typography variant='span' color='primary'>Contact Person Name:-</Typography> <Typography variant='span' color='success.main'>Efrem</Typography>
       
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
          
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Typography variant='span' color='primary'>Total Request:- </Typography> <Typography variant='span' color='success.main'>5</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Book</Button>
      </CardActions>
    </Card>
                </Grid>
            </Grid>
            
              
        </Container>
        </ThemeProvider>
       
     );
}
 
export default HouseDetails;
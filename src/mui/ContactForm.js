import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import { amber,blue,orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {main:'#01579b'},
    secondary: amber,
    success:orange
    
  },
});
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <ThemeProvider theme={theme} >

<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
        marginBottom: 9
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2} color='primary' component='h4'>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }} color="success">
            <Typography color='primary'>Submit</Typography>
          </Button>
        </form>
      </Box>
    </Box>
    </ThemeProvider>
   
  )}
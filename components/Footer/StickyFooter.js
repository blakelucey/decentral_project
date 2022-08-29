import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from './StickyFooter.module.css';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" className={styles.center}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://www.blakelucey.dev">
        www.blakelucey.dev
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     minHeight: '100vh',
    //   }}
    // >
    //   <CssBaseline />
    //   {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm"> */}
    //     {/* <Typography variant="h2" component="h1" gutterBottom>
    //       Sticky footer
    //     </Typography>
    //     <Typography variant="h5" component="h2" gutterBottom>
    //       {'Pin a footer to the bottom of the viewport.'}
    //       {'The footer will move as the main element of the page grows.'}
    //     </Typography>
    //     <Typography variant="body1">Sticky footer placeholder.</Typography>
    //   </Container> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? "#24344d"
              : "#24344d",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="#fff" className={styles.center}>
            Product Page
          </Typography>
          <Copyright />
        </Container>
      </Box>
    // </Box>
  );
}
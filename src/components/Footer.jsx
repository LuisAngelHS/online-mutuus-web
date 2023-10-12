import { Container, Typography, Grid, Link } from '@mui/material';

export const Footer = () => {
    return (
        <footer className='footer'>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12}>
                <Typography variant="body2" color="textSecondary" align="center">
                  © {new Date().getFullYear()} Your Website Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary" align="center">
                  <Link color="inherit" href="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary" align="center">
                  <Link color="inherit" href="#">
                    Terms of Service
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      );
}
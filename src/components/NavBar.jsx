import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import { Link as RouLink} from "react-router-dom"

export const NavBar = () => {
  return (
    <AppBar 
        position='fixed'
    >
        <Toolbar>
            <Grid component={RouLink} to='/login' container direction='row' justifyContent='space-between' alignItems='center'>
            <Stack direction="row" spacing={2}>
            <img   src="src/assets/img/navbar/mutuus-logo.png" width="230" height="85"/>
    </Stack>

                {/* <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton> */}
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import images from '../assets/img/mutuus-1/Mujer.png';
import Doctor from '../assets/img/mutuus-1/Doctor.png';
import Empresario from '../assets/img/mutuus-1/Empresaio.png';
import Characters from '../assets/img/mutuus-1/Characters.png';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
export const SideBar = ({ drawerWidth = 200 }) => {
  return (
    <Box
        // component='nav'
        sx={{ color:'#183B91', width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
               
               
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor:'#fff'}
            }}
        >
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                textAlign:'center',
                marginTop:40
            }}>
            <img src={Logo1}/>
            </Grid>
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                marginLeft:2,
                marginTop:25
            }}>
                <img src={images} width="140" height="230"/>
                <img src={Doctor} width="140" height="230"/>
                <img src={Empresario} width="140" height="230"/>
                <img src={Characters} width="159" height="300"/>
            </Grid>
        </Drawer>

    </Box>
  )
}
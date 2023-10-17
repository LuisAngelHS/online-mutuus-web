import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import images from '../assets/img/mutuus-1/Character_1.png';
import Logo1 from '../assets/img/mutuus-1/Logo1.png';
export const SideBarRegister = ({ drawerWidth2 = 200 }) => {
  return (
    <Box
        // component='nav'
        sx={{ color:'#183B91', width: { sm: drawerWidth2 }, flexShrink: { sm: 0 }}}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
               
               
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth2,  backgroundColor:'#fff'}
            }}
        >
               <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                textAlign:'center',
                
            }}>
            <img src={Logo1}/>
            </Grid>
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                textAlign:'center',
                marginTop:20
                
            }}>
           
            <p style={{fontSize:35} }>El seguro que buscas, <strong style={{color:'#AED43A'} }>NO</strong>  es un seguro.</p>
            </Grid>
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                marginLeft:2,
                marginTop:10
            }}>
                <img src={images} width="550" height="420"/>
            </Grid>
        </Drawer>

    </Box>
  )
}
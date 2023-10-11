import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import images from '../assets/img/mutuus-cr.jpg';
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
               
               
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor:'#183B91'}
            }}
        >
            <Grid sx={{ 
                justifyContent:'center',
                alignItems: 'center',
                marginLeft:2,
                marginTop:50
            }}>
<img src={images} width="150" height="130"/>
            </Grid>

          
            {/* <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Mutuus
                </Typography>
            </Toolbar>
            <Divider /> */}

            {/* <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List> */}

        </Drawer>

    </Box>
  )
}
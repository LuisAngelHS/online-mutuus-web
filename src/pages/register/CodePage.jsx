import { Button, Grid, TextField } from "@mui/material"
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"
export const CodePage = () => {
  return (
    <MenuLayout title="Contratación en línea">
        <Grid item xs={ 12 } md={6} lg={6}>
            <p className="text-font-book">Se he enviado un código por SMS a su celular.</p>
            <p className="text-font-book">Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 10 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code"/>
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}  textAlign='center'>
            <TextField className="input-code"/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            <p className="text-font-book">Código incorrector favor de Verificar.</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 5 } sx={{ mb: 2, mt: 5 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{ backgroundColor: 'secondary.main', fontFamily:'Gilam Regular' }} variant='contained' >
                  Reenviar código
                </Button>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button sx={{fontFamily:'Gilam Regular' }} variant='contained' component={Link} to='/information'>
                 Continuar
                </Button>
            </Grid>
        </Grid>
    </MenuLayout>
  )
}

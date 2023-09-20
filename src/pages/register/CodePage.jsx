import { Button, Grid, TextField } from "@mui/material"
import { MenuLayout } from "../../layout/MenuLayout"
import { Link } from "react-router-dom"
export const CodePage = () => {
  return (
    <MenuLayout title="Contratación en línea">
        <Grid item xs={ 12 } md={6} lg={6}>
            <p>Se he enviado un código por SMS a su celular.</p>
            <p>Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 10 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code" type="number" />
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code" type="number" />
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <TextField className="input-code" type="number" />
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}  textAlign='center'>
            <TextField className="input-code" type="number" maxRows={1}/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12}  textAlign='center' sx={{ mt: 3, color: 'error.main' }} >
            <p>Código incorrector favor de Verificar.</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 5 } sx={{ mb: 2, mt: 5 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button variant='contained' >
                  Reenviar código
                </Button>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <Button variant='contained' LinkComponent={Link} to='/information'>
                 Continuar
                </Button>
            </Grid>
        </Grid>
{/* 
        <div className="container-code_access">
    
    <div className="input-code_access">
      <input
        type="number"
        className="input-code"
        data-index="1"
      />
      <input
     
        type="number"
        className="input-code"
        data-index="2"
      />
      <input
       
        type="number"
        className="input-code"
        data-index="3"
      />
      <input
       
        type="number"
        className="input-code"
        data-index="4"
      />
    
    </div>
  </div> */}
        
    </MenuLayout>
  )
}

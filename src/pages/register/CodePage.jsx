import { Grid } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import { Link } from "react-router-dom"
import {PrimaryButton, SecundaryButton} from "../../components/ButtonContent"
import {CssTextField} from "../../components/TextFieldContent"

export const CodePage = () => {
  return (
    <PolizasLayout title="Contratación en línea">
        <Grid item xs={ 12 } md={6} lg={12} textAlign='center'>
            <p className="text-font-book">Se he enviado un código por SMS a su celular.</p>
            <p className="text-font-book">Por favor capture el código recibido:</p>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField  sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60  } }}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}   textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60 } }}/>
            </Grid>
            <Grid  item xs={ 6 } md={3} lg={3}  textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50,width:60  } }}/>
            </Grid>
            <Grid  item xs={ 6} md={3} lg={3}   textAlign='center'>
            <CssTextField sx={{ input: { color: '#183B91', fontFamily:'Gilam Book', height:50, width:60 } }}/>
            </Grid>
            <Grid item xs={ 12} md={12} lg={12} sx={{ mt: 3, color: 'error.main' }} textAlign='center' >
            <p className="text-font-book">Código incorrector favor de Verificar.</p>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <SecundaryButton variant='contained' >
                  Reenviar código
                </SecundaryButton>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 } textAlign='center'>
                <PrimaryButton variant='contained' component={Link} to='/information'>
                 Continuar
                </PrimaryButton>
            </Grid>
        </Grid>
    </PolizasLayout>
  )
}

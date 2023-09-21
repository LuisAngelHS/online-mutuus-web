import { Button, Grid, TextField } from "@mui/material"
import { PolizasLayout } from "../../layout/PolizasLayout"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#183B91',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(parentes, name, estatura, peso, curp) {
  return { parentes, name, estatura, peso, curp };
}

const rows = [
  createData('', 'Jorge Garcia Perez', 1.15, 20, 'JJJS98524178745'),
  createData('', 'Pancracio Lopez Perez', 1.15, 20, 'JJJS98524178745')

];
export const MembershiPage = () => {
  return (
    <PolizasLayout title="Elección de membresía.">
      <Grid container  spacing={1}>
        <Grid item xs={ 12 } md={4} lg={3}>
          <p>Clave del agente: </p>
        </Grid>
        <Grid item xs={ 12 } md={2} lg={2}>
          <TextField type="text" fullWidth size="small"/>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={7}>
        <Autocomplete
          disablePortal
          size="small"
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField {...params} label="Nombre" />}
        />
        </Grid>

        <Grid item xs={ 12 } md={6} lg={3}>
          <p>Producto: *</p>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={9}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="UNO" />
              <FormControlLabel value="male" control={<Radio />} label="DOS" />
              <FormControlLabel value="other" control={<Radio />} label="CINCO" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={3}>
          <p>Tipo de Pago: *</p>
        </Grid>
        <Grid item xs={ 12 } md={6} lg={9}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="ANUAL" />
              <FormControlLabel value="male" control={<Radio />} label="12 MSI" />
              <FormControlLabel value="other" control={<Radio />} label="MENSUAL" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 2 }}>
      <Grid item xs={ 12 } md={12} lg={12}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Parentesco</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Estatura</StyledTableCell>
            <StyledTableCell>Peso</StyledTableCell>
            <StyledTableCell>CURP</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio size="small" />} label="Hijo" />
              <FormControlLabel value="male" control={<Radio size="small" />} label="Otro" />
            </RadioGroup>
          </FormControl>
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.estatura}</StyledTableCell>
              <StyledTableCell>{row.peso}</StyledTableCell>
              <StyledTableCell>{row.curp}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      </Grid>
     


      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={ 12 } md={8} lg={8} textAlign='end'>
            <p>Total a pagar: $14,500.00</p>
            <p>Póliza 1M         $12,000</p>
            <p>Menor adicional:  $2,000</p>
        </Grid>
        
      </Grid>
      <Grid container sx={{ mt: 1 }}>
      <Grid item xs={ 12 } md={12} lg={12} textAlign='end'>
          <Button variant='contained' >
            Continuar
          </Button>
        </Grid>
      </Grid> 
            
    </PolizasLayout>
  )
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];
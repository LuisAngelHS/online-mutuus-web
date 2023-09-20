import {Routes, Route} from "react-router-dom"
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {RegisterPage, CodePage} from '../pages/register';
import {InformationPage, TerminosPage} from '../pages/polizas';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/code" element={<CodePage/>}/>
      <Route path="/information" element={<InformationPage/>}/>
      <Route path="/terms" element={<TerminosPage/>}/>
        {/* Login y Registro*/}
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes> 
  )
}

import {Routes, Route} from "react-router-dom"
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {RegisterPage, CodePage, LoginPage, PasswordPage} from '../pages/register';
import {InformationPage, TerminosPage, MembershiPage} from '../pages/polizas';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/password" element={<PasswordPage/>}/>
      <Route path="/code" element={<CodePage/>}/>
      <Route path="/information" element={<InformationPage/>}/>
      <Route path="/terms" element={<TerminosPage/>}/>
      <Route path="/membershi" element={<MembershiPage/>}/>
        {/* Login y Registro*/}
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes> 
  )
}

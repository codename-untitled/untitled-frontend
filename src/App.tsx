import ScrollToTop from 'helpers/scroll-to-top';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Company from 'pages/company';
import Analytics from 'pages/company/analytics';
import CompanyEmployees from 'pages/company/employees';
import Repository from 'pages/company/repository';
import Workflow from 'pages/company/workflow';
import CreateWorkflow from 'pages/company/workflow/create';
import Profile from 'pages/company/profile';
import SignUp from 'pages/signup';
import SignIn from 'pages/signin';
import CompanyAuth from 'modules/general/components/companyAuth';
import NoAuthCompany from 'modules/general/components/noAuth/noAuthCompany';
import EmployeeSignIn from 'pages/employee-signin';
import ResetPassword from 'pages/reset-password';
import EmployeeAuth from 'modules/general/components/employeeAuth';
import Employee from 'pages/employee';
import NoAuthEmployee from 'modules/general/components/noAuth/noAuthEmployee';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NoAuthCompany />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<NoAuthEmployee />}>
          <Route path="/employee/signin" element={<EmployeeSignIn />} />
        </Route>
        <Route element={<CompanyAuth />}>
          <Route path="/company" element={<Company />}>
            <Route index element={<Analytics />} />
            <Route path="repository" element={<Repository />} />
            <Route path="employee" element={<CompanyEmployees />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="workflow/create" element={<CreateWorkflow />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route element={<EmployeeAuth />}>
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/reset-password" element={<ResetPassword />} />
        </Route>
        <Route
          path={'/*'}
          element={<h1 className="text-center mt-4">404: Not Found</h1>}
        />
      </Routes>
    </ScrollToTop>
  );
}

export default App;

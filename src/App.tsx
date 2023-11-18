import ScrollToTop from 'helpers/scroll-to-top';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Company from 'pages/company';
import Analytics from 'pages/company/analytics';
import CompanyEmployees from 'pages/company/employees';
import Repository from 'pages/company/repository';
import Workflow from 'pages/company/workflow';
import CreateWorkflow from 'pages/company/workflow/create';
import SignUp from 'pages/signup';
import SignIn from 'pages/signin';
import CompanyAuth from 'modules/general/components/companyAuth';
import NoAuth from 'modules/general/components/noAuth';
import EditWorkflow from 'pages/company/workflow/edit';
import PersonalizeWorkflow from 'pages/company/workflow/personalize';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NoAuth />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<CompanyAuth />}>
          <Route path="/company" element={<Company />}>
            <Route index element={<Analytics />} />
            <Route path="repository" element={<Repository />} />
            <Route path="employee" element={<CompanyEmployees />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="workflow/create" element={<CreateWorkflow />} />
            <Route path="workflow/edit/:id" element={<EditWorkflow />} />
            <Route
              path="workflow/personalize/:id"
              element={<PersonalizeWorkflow />}
            />
          </Route>
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

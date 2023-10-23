import ScrollToTop from 'helpers/scroll-to-top';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Company from 'pages/company';
import Analytics from 'pages/company/analytics';
import CompanyEmployee from 'pages/company/employee';
import Repository from 'pages/company/repository';
import Workflow from 'pages/company/workflow';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />}>
          <Route index element={<Analytics />} />
          <Route path='repository' element={<Repository />} />
          <Route path='employee' element={<CompanyEmployee />} />
          <Route path='workflow' element={<Workflow />} />
        </Route>
        <Route
          path={'/*'}
          element={<h1 className='text-center mt-4'>404: Not Found</h1>}
        />
      </Routes>
    </ScrollToTop>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';
import AllTaskPage from './pages/AllTaskPage';
import GroupTaskPage from './pages/GroupTaskPage';
import StatusTaskPage from './pages/StatusTaskPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route element={<MainLayout />}>
        <Route  element={<MainPage />} >
          <Route path='/' element={<DashboardPage/>}/>
          <Route path='/all' element={<AllTaskPage/>}/>
          <Route path='/group/:groupid' element={<GroupTaskPage/>}/>
          <Route path='/status/:status' element={<StatusTaskPage/>}/>

        </Route>
      </Route>
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;

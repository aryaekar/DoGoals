import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path='/' element={<MainLayout />}>
        <Route path='/home' element={<MainPage />} />
      </Route>
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;

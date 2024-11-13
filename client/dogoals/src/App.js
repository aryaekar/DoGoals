import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true,v7_relativeSplatPath:true}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

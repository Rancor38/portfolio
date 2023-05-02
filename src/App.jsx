import './App.css';
import { Route, Routes } from 'react-router-dom';


import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' exact element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;

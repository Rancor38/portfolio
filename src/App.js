import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' exact element={<Bio />} />
      </Routes>
    </>
  );
}

export default App;

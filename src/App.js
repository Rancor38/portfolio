import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/projects/Projects';
import Resume from './components/Resume';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' exact element={<Bio />} />
        <Route path='/bio' exact element={<Bio />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/Resume' exact element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

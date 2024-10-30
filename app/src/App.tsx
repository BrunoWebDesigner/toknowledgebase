import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;

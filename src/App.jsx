import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route pour la page Create */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;

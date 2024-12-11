import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import RequestPage from './pages/RequestPage';
import TeamPage from './pages/TeamPage';
import VerificationForm from './pages/VerificationForm';
import WaitingPage from './pages/WaitingPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route pour la page Create */}
        <Route path="/create" element={<CreatePage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/verification" element={<VerificationForm />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

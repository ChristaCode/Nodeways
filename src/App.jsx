import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import BrainMapPage from './pages/BrainMapPage';
import LessonPage from './pages/LessonPage';
import './App.css';

function App() {
  // When app is served from a subpath (e.g. /brainmap/), basename ensures routes and navigate('/') work
  const basename = typeof import.meta.env?.BASE_URL === 'string' ? import.meta.env.BASE_URL.replace(/\/$/, '') || '/' : '/';

  return (
    <ErrorBoundary>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<BrainMapPage />} />
          <Route path="/lesson/:nodeId" element={<LessonPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import QuestionnaireListPage from './pages/QuestionnaireListPage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Behaviour DISC Test</h1>
        <div id="page-body">
          The Disc Test
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/questionnaires" element={<QuestionnaireListPage />} />
            <Route path="/questionnaires/:questionnaireId" element={<QuestionPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

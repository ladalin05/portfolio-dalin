import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import ExperiencePage from './pages/Experience';
import ContactPage from './pages/Contact';
import ProjectDetailPage from './pages/ProjectDetail';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n.dir]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} /> 
          <Route path='/skills' element={<SkillsPage />} /> 
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectDetailPage />} />
          <Route path='/experience' element={<ExperiencePage />} /> 
          <Route path='/contact' element={<ContactPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

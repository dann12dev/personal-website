import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ExamplePage from '@/pages/ExamplePage';

function App() {
  return (
    <>
      <BrowserRouter basename="/personal-website">
        <Routes>         
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />            
            <Route path="home" element={<HomePage />} />     
            <Route path="Example" element={<ExamplePage />} />    
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
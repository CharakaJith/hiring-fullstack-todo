import HomePage from '@/pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;

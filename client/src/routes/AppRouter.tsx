import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* default */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;

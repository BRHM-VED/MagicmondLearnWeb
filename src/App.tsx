import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import { ROUTES } from './utils/constants';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.privacy} element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

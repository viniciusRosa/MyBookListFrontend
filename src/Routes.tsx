import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Favorites from './pages/Favorites';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Books />} /> 
            <Route path="/favorites"  element={<Favorites />} />
        </Routes>
    </BrowserRouter>
)

export default AppRoutes;
import { Route, Routes } from 'react-router-dom';
import AboutScreen from '@/components/about/AboutScreen';
import DcScreen from '@/components/dc/DcScreen';
import LoginScreen from '@/components/login/LoginScreen';
import MarvelScreen from '@/components/marvel/MarvelScreen';
import Navbar from '@/components/navbar/Navbar';
import SearchScreen from '@/components/search/SearchScreen';

const AppRouter = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<MarvelScreen />}>
        <Route path="/marvel" element={<MarvelScreen />} />
      </Route>
      <Route path="/dc" element={<DcScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="*" element={<MarvelScreen />} />
    </Routes>
  </div>
);

export default AppRouter;

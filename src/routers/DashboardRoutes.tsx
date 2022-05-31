import { Route, Routes } from 'react-router-dom';
import AboutScreen from '@/components/about/AboutScreen';
import DcScreen from '@/components/dc/DcScreen';
import HeroScreen from '@/components/hero/HeroScreen';
import MarvelScreen from '@/components/marvel/MarvelScreen';
import Navbar from '@/components/navbar/Navbar';
import SearchScreen from '@/components/search/SearchScreen';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="*" element={<MarvelScreen />} />
      </Routes>
    </div>
  </>
);

export default DashboardRoutes;

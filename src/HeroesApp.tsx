import AuthContextProvider from './auth/authContext';
import AppRouter from './routers/AppRouter';

const HeroesApp = () => (
  <AuthContextProvider>
    <AppRouter />
  </AuthContextProvider>
);

export default HeroesApp;

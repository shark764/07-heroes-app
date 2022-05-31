import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h4>Login</h4>

      <hr />

      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;

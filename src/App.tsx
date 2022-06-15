
import { Layout } from './styles/styles';
import { ThumbnailGenerator } from './components/ThumbnailGenerator/ThumbnailGenerator';
import LoginButton from './components/LoginBtn/LoginBtn';
import LogoutButton from './components/LogoutBtn/LogoutBtn';
import Welcome from './components/WelcomeUser/WelcomeUser';
import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <Layout>
      <Welcome />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <ThumbnailGenerator />
    </Layout>

  );
};

export default App;



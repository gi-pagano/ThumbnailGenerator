import { useAuth0} from "@auth0/auth0-react";
import { LoginBtn } from '../LoginBtn/LoginBtn.styles';

const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <LoginBtn onClick={() => logout()}>Logout</LoginBtn>
    );
}

export default LogoutButton;
import { useAuth0 } from "@auth0/auth0-react";
import { Message } from "./WelcomeUser.styles";

const Welcome = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? <Message>Bienvenido {user?.name}</Message> : <Message>Bienvenido, logueate</Message>}
        </div>
    );
}

export default Welcome;
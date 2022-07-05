
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const auth0_react_1 = require("@auth0/auth0-react");
const LoginBtn_styles_1 = require("./LoginBtn.styles");
const LoginButton = () => {
    const { loginWithRedirect } = (0, auth0_react_1.useAuth0)();
    return ((0, jsx_runtime_1.jsx)(LoginBtn_styles_1.LoginBtn, Object.assign({ onClick: () => loginWithRedirect() }, { children: "Login" })));
};
exports.default = LoginButton;

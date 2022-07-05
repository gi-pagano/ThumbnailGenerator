
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const auth0_react_1 = require("@auth0/auth0-react");
const WelcomeUser_styles_1 = require("./WelcomeUser.styles");
const Welcome = () => {
    const { user, isAuthenticated } = (0, auth0_react_1.useAuth0)();
    return ((0, jsx_runtime_1.jsx)("div", { children: isAuthenticated ? (0, jsx_runtime_1.jsxs)(WelcomeUser_styles_1.Message, { children: ["Bienvenido ", user === null || user === void 0 ? void 0 : user.name] }) : (0, jsx_runtime_1.jsx)(WelcomeUser_styles_1.Message, { children: "Bienvenido, logueate" }) }));
};
exports.default = Welcome;

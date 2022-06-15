"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles/styles");
const ThumbnailGenerator_1 = require("./components/ThumbnailGenerator/ThumbnailGenerator");
const LoginBtn_1 = __importDefault(require("./components/LoginBtn/LoginBtn"));
const LogoutBtn_1 = __importDefault(require("./components/LogoutBtn/LogoutBtn"));
const WelcomeUser_1 = __importDefault(require("./components/WelcomeUser/WelcomeUser"));
const auth0_react_1 = require("@auth0/auth0-react");
function App() {
    const { isAuthenticated } = (0, auth0_react_1.useAuth0)();
    return ((0, jsx_runtime_1.jsxs)(styles_1.Layout, { children: [(0, jsx_runtime_1.jsx)(WelcomeUser_1.default, {}), isAuthenticated ? (0, jsx_runtime_1.jsx)(LogoutBtn_1.default, {}) : (0, jsx_runtime_1.jsx)(LoginBtn_1.default, {}), (0, jsx_runtime_1.jsx)(ThumbnailGenerator_1.ThumbnailGenerator, {})] }));
}
;
exports.default = App;

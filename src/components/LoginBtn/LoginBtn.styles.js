"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginBtn = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.LoginBtn = styled_components_1.default.button `
        background: var(--colorPrimary);
        color: var(--background);
        border: none;
        border-radius: 10px;
        padding: 10px;
        justify-self: flex-end;
        margin-right: 40px;
        font-size: 1.5rem;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
        @media (max-width: 451px) {
            justify-self: center;
            margin-right: 0;
        }
    `;

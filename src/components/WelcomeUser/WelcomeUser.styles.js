"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Message = styled_components_1.default.h1 `
    color: var(--colorPrimary);
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: -20px;
    @media (max-width: 451px) {
        margin-bottom: 10px;
`;

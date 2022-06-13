"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles/styles");
const ThumbnailGenerator_1 = require("./components/ThumbnailGenerator/ThumbnailGenerator");
function App() {
    return ((0, jsx_runtime_1.jsx)(styles_1.Layout, { children: (0, jsx_runtime_1.jsx)(ThumbnailGenerator_1.ThumbnailGenerator, {}) }));
}
;
exports.default = App;

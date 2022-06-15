"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbnailGenerator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThumbnailGenerator_styles_1 = require("./ThumbnailGenerator.styles");
const react_1 = require("react");
const Spinner_1 = require("../spinner/Spinner");
const ThumbnailGenerator = () => {
    const [images, setImages] = (0, react_1.useState)([]);
    const [isUploaded, setIsUploaded] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(false);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    function handleImageChange(e) {
        setIsLoading(true);
        setTimeout(() => {
            if (e.target.files && e.target.files[0] && e.target.files[0].size < 5000000) {
                setError(false);
                setIsLoading(false);
                let reader = new FileReader();
                reader.onload = (e) => {
                    setIsUploaded(true);
                    let imagesArray = [{ img: e.target.result, key: 1 }, { img: e.target.result, key: 2 }, { img: e.target.result, key: 3 }];
                    setImages(imagesArray);
                };
                reader.readAsDataURL(e.target.files[0]);
            }
            else {
                setError(true);
                setIsLoading(false);
            }
        }, 1000);
    }
    const renderImages = (source) => {
        return source.map((img) => {
            return (0, jsx_runtime_1.jsx)(ThumbnailGenerator_styles_1.ImageThumbnail, { children: (0, jsx_runtime_1.jsx)("img", { className: `userImage${img.key}`, draggable: "false", src: img.img, alt: `Imagen de usuario ${img.key}` }) }, img.key);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(ThumbnailGenerator_styles_1.Container, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Sub\u00ED una imagen" }), (0, jsx_runtime_1.jsx)("p", { children: "Y gener\u00E1 miniaturas" }), (0, jsx_runtime_1.jsxs)(ThumbnailGenerator_styles_1.UploadContainer, { children: [(error && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'warning' }, { children: "Solo im\u00E1genes menores a 5mb" }))), (0, jsx_runtime_1.jsxs)(ThumbnailGenerator_styles_1.UploadDiv, { children: [" ", isLoading ? (0, jsx_runtime_1.jsx)(Spinner_1.CircularProgressSpinner, {})
                                :
                                    !isUploaded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: 'open' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Icons8_flat_folder.svg/1200px-Icons8_flat_folder.svg.png", draggable: "false", alt: "carpeta", width: 100 }), (0, jsx_runtime_1.jsx)("p", { children: "Clicke\u00E1 para subir una imagen (.jpeg o .png)" })] })), (0, jsx_runtime_1.jsx)("input", { id: "open", type: "file", accept: '.jpeg, .png', onChange: handleImageChange })] })) : ((0, jsx_runtime_1.jsx)(ThumbnailGenerator_styles_1.DivImg, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [renderImages(images), (0, jsx_runtime_1.jsx)(ThumbnailGenerator_styles_1.Btn, Object.assign({ className: "btn", onClick: () => {
                                                        setIsUploaded(false);
                                                    } }, { children: "Eliminar im\u00E1genes" }))] }) }))] })] })] }));
};
exports.ThumbnailGenerator = ThumbnailGenerator;
exports.default = exports.ThumbnailGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = void 0;
const multer_1 = require("multer");
const multerStorage = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        callback(null, __dirname);
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    },
});
exports.multerUpload = (0, multer_1.default)({ storage: multerStorage });
//# sourceMappingURL=Multer.js.map
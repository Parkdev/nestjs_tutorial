"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.get('/', function (req, res) {
    console.log(req);
    res.send({ cat: app_model_1.Cat });
});
app.listen(8000, function () {
    console.log('Server is running on ...');
});
//# sourceMappingURL=app.js.map
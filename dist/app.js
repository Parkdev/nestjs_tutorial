"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_route_1 = require("./cats/cat.route");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});
app.use(express.json());
app.use(cat_route_1.default);
app.use(function (req, res, next) {
    console.log('this is error middleware');
    res.send({ error: '404 not found error' });
});
app.listen(8000, function () {
    console.log('Server is running on ...');
});
//# sourceMappingURL=app.js.map
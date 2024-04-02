"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_route_1 = require("./cats/cat.route");
var Server = (function () {
    function Server() {
    }
    Server.prototype.constructore = function () {
        var app = express();
        this.app = app;
    };
    Server.prototype.setRoute = function () {
        this.app.use(cat_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log('this is logging middleware');
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            console.log('this is error middleware');
            res.send({ error: '404 not found error' });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        this.app.listen(8000, function () {
            console.log('Server is running on ...');
        });
    };
    return Server;
}());
function init() { }
//# sourceMappingURL=app.js.map
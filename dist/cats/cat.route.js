"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_model_1 = require("./cat.model");
var express_1 = require("express");
var router = express_1.Router();
router.get('/cats', function (req, res) {
    try {
        var cats = cat_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get('/cats/:id', function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cat = cat_model_1.Cat.find(function (cat) {
            return cat.name === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post('/cats', function (req, res) {
    try {
        var data = req.body;
        cat_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: data,
        });
        console.log(cat_model_1.Cat);
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cat.route.js.map
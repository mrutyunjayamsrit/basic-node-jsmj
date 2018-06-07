'use strict';

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

var port = Number(process.env.PORT || 8000);

restService.use(
    bodyParser.urlencoded({
        extended: true
    })
);


restService.use(bodyParser.json());

restService.post("/echo", function (req, res) {
    var speech = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.echoText ? req.body.queryResult.parameters.echoText : "Something went wrong boss.";

    return res.json({
        text: speech,
        speech: speech,
        displayText: speech,
        source: "basic-nodejs"
    });

});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/ping', function(req, res){
    res.sendStatus(200);
});

app.get('/', function(req, res){
    res.send('Server is ready');
});

app.post('/echo', function(req, res){
    console.log(req.body.result);
    var speech = (req.body.result && req.body.result.parameters && req.body.result.parameters.echoInput) || 'Something went wrong. Please try again';
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    })
});

app.listen((process.env.PORT || 8081), function(){
    console.log('Echo server up & listening at 8081...');
});
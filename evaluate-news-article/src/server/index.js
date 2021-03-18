const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const MEAN_CLOUD_API_KEY = process.env.MEAN_CLOUD_API_KEY
const mockAPIResponse = require('./mockAPI.js');
const PORT = 3030;

//setting path
const path = require('path')

//Dotenv configuration
const dotenv= require('dotenv').config();

//setting up express and using a static path
const express = require('express');
const app = express();
app.use(express.static('dist'))

//Setting up bodyParse
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

//seetting up axios
const axios = require('axios');

//setting up cors
const cors = require('cors');
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'));
})

app.post('/add-url', async (req, res) => {
    try {
        //console.log(req.body.url);
        const url= req.body.url;
        const meaningCloudUrl = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`
        const data = await axios(meaningCloudUrl);
        //console.log(data);
        console.log(data.data.sentence_list[50].text);
        res.send({
            agreement : data.data.agreement,
            subjectivity: data.data.subjectivity,
            irony: data.data.irony,
            confidence: data.data.confidence,
            score_tag: data.data.score_tag,
            text: data.data.sentence_list[50].text,
        });
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing

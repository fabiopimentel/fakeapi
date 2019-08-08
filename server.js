const express = require('express')
var bodyParser = require("body-parser");

const brandsJson = require("./brands.json");

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

const app = express()
app.use(bodyParser.json());
const port = 3031
const brandsBySecret = new Map()

app.get('/brand', (req, res) => {

    const secret = req.query.secret
    if (!secret) {
        res.json(brandsJson)
    } else {
        const brands = brandsBySecret.get(secret)
        if (brands) {
            res.send(brandsBySecret.get(secret))
        } else {
            res.send([])
        }
    }
})

app.get('/health', (req, res) => {
    res.send({status: 'OK', code: '200'})        
})

app.post('/brand', function (req, res) {
    let secret = req.body.secret;
    let brands = brandsBySecret.get(secret)
    if (brands) {
        brands.push({name: req.body.name, id: brands.length + 1})
    } else {
        brands = [{name: req.body.name, id: 1}]
        brandsBySecret.set(secret, brands)
    }
    res.send(brands)
});


app.listen(port, () => console.log(`Fake Fipe Api listening on port ${port}!`))

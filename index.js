const express = require('express')
var axios = require("axios")
var qs = require("qs");
const app = express()
const port = process.env.port ||8383

app.use(express.static('Frontend'))
app.use(express.json())
app.locals.data = {}



app.get('/getOutput', (req, res) => {
    console.log("lsdjabdjdbf",_lang)
    var data = qs.stringify({
        code: _code,
        language: _lang,
        input: _input
    })
    var config = {
        method: "post",
        url: "https://codex-api.herokuapp.com/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
    }

    axios(config)
        .then(function (res) {
            console.log(res.data)
           return _output = JSON.stringify(res.data)
        })
        .then(()=>{

            console.log(_output)
            if((JSON.parse(_output)).success==true)
                res.status(200).send({ getOutput: (JSON.parse(_output)).output})
            else
                res.status(200).send({ getOutput: (JSON.parse(_output)).error})
        })
        .catch((error)=> {
            console.log(error);
        });
})

var _code,_lang,_input,_output
app.post('/', (req, res) => {
    const { code } = req.body
    const { language } = req.body
    const { input } = req.body

    _code=code
    _lang=language
    _input=input
    
})

app.listen(port, () => console.log(`Server has started on port ${port}`))
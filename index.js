const express = require('express')
var axios = require("axios")
var qs = require("qs");
const app = express()
const port = 8383

app.use(express.static('Frontend'))
app.use(express.json())
app.locals.data = {}



app.get('/getOutput', (req, res) => {
    var data = qs.stringify({
        code: _code,
        language: _lang,
        input: _input
    })
    // console.log(_code)
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
            // console.log(JSON.stringify(res.data));
            console.log(res.data)
           return _output = JSON.stringify(res.data)
        })
        .then(()=>{

            // console.log(_output)
            res.status(200).send({ getOutput: (JSON.parse(_output)).output})
        })
        .catch((error)=> {
            console.log(error);
            res.status(200).send({ getOutput: (JSON.parse(_output)).error})
        });
})

var _code,_lang,_input,_output,_error
// consol.log(_code)
app.post('/', (req, res) => {
    const { code } = req.body
    const { lang } = req.body
    const { input } = req.body

    req.app.locals.data = req.body
    _code=code
    _lang=lang
    _input=input
    
})

app.listen(port, () => console.log(`Server has started on port ${port}`))
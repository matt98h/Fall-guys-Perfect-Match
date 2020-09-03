// chuck is still a bitch

const   express         = require("express"),
        bodyParser      = require('body-parser'),
        app             = express()

const PORT = process.env.PORT || 8080;

app
    .set('view engine', 'ejs')    
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});






















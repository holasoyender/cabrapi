/*Leer el README.MD antes de usar ^^*/ 

const VPSurl = "https://cabrapi.herokuapp.com"; //Cambiar a la URL de tu API

/*La razón de que se tenga que especificar el URL es un problema de express.js con el uso de 
NGINX o Apache, y es mas facil ponerlo como una constante en el archivo.*/ 

let express = require("express"),
    bodyParser = require('body-parser'),
    fs = require("fs"),
    server = express(),
    util = require("util"),
    colors = require("colors"),
    port = process.env.PORT || 80

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

/*Encontrar una cabra*/ 
    function cabra() {  
        let imgs = fs.readdirSync("./img/").filter((f) => f.endsWith(".jpg"));
        let cabra = VPSurl+"/img/"+imgs[Math.floor(Math.random() * imgs.length)].replace(".jpg", "");
        return cabra;
    }
  
/*Cabras*/
server.get('/', (req, res) => {
    res.status(200).send({ status: 200, url:  cabra() })
    }    
);

/*Imagenes*/
server.get('/img/:NUM', (req, res) => {

    let num = req.params.NUM;
    let size = fs.readdirSync("./img/").filter((f) => f.endsWith(".jpg")).length;
    if(num > size || num <= 0) return res.status(404).send( { status: 404, message: "No tenemos tantas cabras!" })

    fs.readFile(`./img/${num}.jpg`, function(err, data) {
        if (err) return res.status(500).send( { status: 500, message: "Ha ocurrido un error!" })
            res.writeHead(200, {'Content-Type': 'image/jpg'})
            res.end(data);
  })
});

/*404*/
server.use((req, res, next) => res.status(404).send( { status: 404, message: 'te has perdido?' }));
/*Open server*/
server.listen(port, () => util.log(colors.white("[")+colors.green("+")+colors.white("] - Server online en el puerto ")+colors.bgWhite(colors.black("%s")),port));

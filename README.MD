# 🐐 Mira pol he hecho una API para cabras

Simple API que muestra una foto aleatoria de una cabra hecha para el bot [LA CABRA](https://lacabra.app)

## Importante !

Si se va a usar una VPS para alojar la API, debes de cambiar la url del archivo [server.ts](https://github.com/holasoyender/cabrapi/blob/master/server.ts) así:

```js

const VPSurl = "https://cabrapi.herokuapp.com"; //Cambiar a la URL de tu API

/*La razón de que se tenga que especificar el URL es...
```

Para instalar las dependencias se debe de usar el comando `npm install`, y para iniciar la API el comando `npm run start` o `node .`

## Como usarla

```js
const superagent = require("superagent") //Librería de ejemplo

let { body } = await superagent.get("https://cabrapi.herokuapp.com/");
        if(!{ body }) return;
        return body.url;
```

## Añade mas cabras!

Puedes añadir mas cabras a esta API haciendo un Pull request con más fotos en la carpeta [img](https://github.com/holasoyender/cabrapi/tree/master/img) (Siguiendo el orden claro)

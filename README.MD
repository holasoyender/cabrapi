# 🐐 Mira pol he hecho una API para cabras

Simple API que muestra una foto aleatoria de una cabra hecha para el bot [LA CABRA](https://lacabra.app)

## Como usarla

```js
const superagent = require("superagent") //Librería de ejemplo

let { body } = await superagent.get("https://cabrapi.herokuapp.com/");
        if(!{ body }) return;
        return body.url;
```

## Añade mas cabras!

Puedes añadir mas cabras a esta API haciendo un Pull request con más fotos en la carpeta [img](https://github.com/holasoyender/cabrapi/tree/master/img) (Siguiendo el orden claro)

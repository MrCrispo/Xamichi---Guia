Ahora tienes tu bot en tu servidor, pero esta offline y sin comandos. Ahora ve a google y busca glitch.com le das y crea tu
cuenta, pero ojo! Solo admite de facebook o github. Te registras y dale a Nuevo proyecto, pero debe que ser `node-app`

Le das y tienes tu proyecto, recuerda ponerle el candado. Ahora debe que ir a `server.js` y borrarlo todo y reemplazar por este.


[=======]

const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setGame(`Estoy en la guia de xamichi`);
});

client.on('message', message => {
  if (message.content.startsWith("ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.`'); 
  }
  
});

client.login("ElTokenDeTuBot")


{======}

Ahora debe que ir a package.json, y clickear add package y buscar discord.js, espera un poco y clickea cuando te salga discord.js

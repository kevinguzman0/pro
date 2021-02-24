var mqtt = require('mqtt');

console.log("Hola");

var options = {
    host: 'vrvideo.tk',
    port: 8083,
    username: 'vrvideo',
    password: 'admin'
}

var client = mqtt.connect("mqtt://157.230.237.131"); //me conecto por mqtt al servidor, puedo colocar localhost también

client.on('connect', function () {
    console.log("conectando a MQTT");
    client.subscribe('+/#', function (err) { //con esto me suscribo a todos los temas, es sólo para depurar
        console.log("realizado");
    })
    // client.publish('mq_unico', 'a;3');
});
client.publish('mq_unico', 'b;2'); //tema en el que se publica y mensaje
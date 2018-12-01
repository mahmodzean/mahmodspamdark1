const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("518425044221689869")
setInterval(function() {
channel.send(`hi hih ihihihiihihihihihsdhshsh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

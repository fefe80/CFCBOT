const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDA5NzE0MjM4MDcyOTQ2Njkw.DVippg.SOCatccgG4bpUZn1gqvo-tQrw4w');

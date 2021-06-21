const Discord = require('discord.js');
const fs = require("fs");
const Ayarlar = require('./json/ayarlar.json');
const Client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
require('moment-duration-format');
require("./dirc/functions.js")(bot);

const newUsers = new Discord.Collection();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

module.exports = {
  bot: bot,
  Discord: Discord
};

bot.on("ready", () => {   

 console.log("Ready !");  
bot.user.setPresence("dnd");  
  bot.user.setStatus('dnd');
bot.user.setActivity(`31 Çekiyor.`, {type: "WATCHING", status: "dnd"})
});


bot.login(Ayarlar.token);



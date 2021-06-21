const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let ownerID = "723563339334156339";
  let coderID = "389108845349175306";
  if (message.author.id !== ownerID || coderID) return;
  let user = message.mentions.members.first() || message.author;


if(args[0] == 'uyusturucu') {
  db.add(`uyusturucu_${message.guild.id}_${user.id}`, 100)
}
  
  if(args[0] == 'clio') {
  db.add(`clio_${message.guild.id}_${user.id}`, 1)
}
  
  if(args[0] == 'bmw') {
  db.add(`bmw_${message.guild.id}_${user.id}`, 1)
}
  
  if(args[0] == 'mercedes') {
  db.add(`mercedes_${message.guild.id}_${user.id}`, 1)
    message.member.addRole("652565973764800538")
}
  
  if(args[0] == 'tofas') {
  db.add(`tofas_${message.guild.id}_${user.id}`, 1)
}
  if(args[0] == 'bıcakcı') {
  db.add(`bıcakcıhisse_${message.guild.id}_${user.id}`, 1)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"item-ekle",
}
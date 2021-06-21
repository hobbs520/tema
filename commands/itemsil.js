const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let ownerID = "266933190323601408";
  if (message.author.id !== ownerID) return;
  let user = message.mentions.members.first() || message.author;


if(args[0] == 'uyusturucu') {
  db.subtract(`uyusturucu_${message.guild.id}_${user.id}`, 100)
}
  
   if(args[0] == 'clio') {
  db.subtract(`clio_${message.guild.id}_${user.id}`, 1)
}
  
  if(args[0] == 'bmw') {
  db.subtract(`bmw_${message.guild.id}_${user.id}`, 1)
}
  
  if(args[0] == 'mercedes') {
  db.subtract(`mercedes_${message.guild.id}_${user.id}`, 1)
  }
  
   if(args[0] == 'villa') {
  db.subtract(`house_${message.guild.id}_${user.id}`, 1)
}
   if(args[0] == 'tofas') {
  db.subtract(`tofas_${message.guild.id}_${user.id}`, 1)
}
   if(args[0] == 'kucukev') {
  db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"item-sil",
}
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;
  let user = message.author;

  let author = db.fetch(`money_${message.guild.id}_${user.id}`);

  if (!message.member.roles.has("silah-ruhsat-id"))
    return message.channel.send("Ruhsatınız Yok.");

  if (args[0] == "al") {
    let Embed2 = new Discord.MessageEmbed()
      .setColor("#ff7f00")
      .setDescription(`❌ Silah Alacak Paranız Bulunmamaktadır!`);

    if (author < 4000) return message.channel.send(Embed2);

    let Embed3 = new Discord.MessageEmbed()
      .setColor("#ff7f00")
      .setDescription(`:white_check_mark: Başarıyla Silah Aldınız.`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 4000);
    db.fetch(`silah_${message.guild.id}_${user.id}`);
    db.add(`silah_${message.guild.id}_${user.id}`, 1);
    message.member.roles.add("silah-rol-id");
    message.channel.send(Embed3);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"silahal",
}

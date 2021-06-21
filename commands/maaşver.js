const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;
  if (!message.member.roles.has("yönetim-rol-id"))
    return message.reply("Sadece Sunucu Yönetimi Maaş Ekleyebilir");
  let role = "yönetim-rol-id"
  let user = role.members
  if (isNaN(args[1])) return;
  db.add(`money_${message.guild.id}_${user.id}`, args[1]);

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(`Maaş verildi`);
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"maaş-ver",
}
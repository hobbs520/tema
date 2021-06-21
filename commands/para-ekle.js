//korona brlamizi sikcek amk biz bit kodliyak
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;
  if (!message.member.roles.has(""))
    return message.reply("Sadece Sunucu Yönetimi Para Ekleyebilir");
  let user = message.mentions.members.first() || message.author
  if (isNaN(args[1])) return;
  db.add(`money_${message.guild.id}_${user.id}`, args[1]);
  let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(` Eklendi ${args[1]} ₺\n\nYeni Bakiye: ${bal} ₺`);
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"para-ekle",
}
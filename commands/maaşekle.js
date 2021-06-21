1; //korona brlamizi sikcek amk biz bit kodliyak
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;
  if (!message.member.roles.cache.has("yönetim-rol-id"))
    return message.reply("Sadece Sunucu Yönetimi Para Ekleyebilir");
  let rol = message.mentions.roles.first();
  if (isNaN(args[1])) return;
  message.guild.members.forEach(user => {
    if (user.roles.has(rol.id)) {
      db.add(`bank_${message.guild.id}_${user.id}`, args[1]);
    }
  });
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
  name:"maaş-ekle",
}
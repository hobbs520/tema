const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;

  let user = message.mentions.members.first();

  let açlık = await db.fetch(`aç_${message.guild.id}_${user.id}`);
  if (açlık === null) açlık = "0";
  
  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(
      `**${user}'in Durumu**\n\nAçlık: ${açlık}\n`
    );
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name: "durum",
}
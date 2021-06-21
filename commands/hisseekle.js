const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('!'))return;  
  let ownerID = "266933190323601408";
  if (message.author.id !== ownerID) return;
  let user = message.mentions.members.first()

    if (isNaN(args[1])) return;
    db.add(`bıcakcıhisse_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`bıcakcıhisse_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(` Eklendi ${args[1]} \n\nYeni Hisse: ${bal} `);
    message.channel.send(moneyEmbed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"hisseekle-bıçakçı",
}
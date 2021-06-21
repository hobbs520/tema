const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle('ANKA ROLEPLAY')
    .setDescription("**`Evlilik`**\n*•Nişan Yüzüğü:5.000₺* **[!satınal nişanyüzüğü]**\n\n**`Pet Shop`**\n*•Terrier Köpek:5.000₺* **[!satınal terrier]**\n*•Golden Köpek:5.000₺* **[!satinal golden]**\n*•Pitbull Köpek:10.000₺* **[!satınal pitbull]**\n*Scootish Fold Kedi:5.000₺* **[!satınal scootish]**\n\n**`Motorlar`**\n*•Harley Davidson:40.000₺* **[!satınal harleydavidson]**\n*•Honda:30.000₺* **[!satınal honda]**\n*•Yamaha:25.000₺* **[!satınal yamaha]**\n*•Kawasaki:20.000₺* **[!satınal kawasaki]**")
    .setColor("ff7f00")
    .setFooter('\nŞuanda 2. Sayfayı görüyorsunuz. 1. Sayfaya dönmek için; !mağaza yazabilirsiniz')
    .setAuthor(message.author.username,message.author.avatarURL())
    message.channel.send(embed)




}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"mağaza2",
}
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle('ANKA ROLEPLAY')
    .setDescription("**`Evler`**\n*•Apartman Dairesi: 50.000₺* **[!satınal apartmandaire]**\n*•Küçük Ev: 65.000₺* **[!satınal kucukev]**\n*•Bahçeli Ev: 80.000₺* **[!satınal bahceliev]**\n*•Villa : 100.000₺* **[!satınal villa]**\n\n**`Araçlar`**\n*•Tofaş Şahin: 20.000₺* **[!satınal tofas]**\n*•Fiat Doblo: 30.000₺* **[!satınal doblo]**\n*•Renault Clio: 30.000₺* **[!satınal clio]**\n*•Mercedes-Benz A200: 70.000₺* **[!satınal mercedes]**\n*•BMW Gran Coupé: 80.000₺* **[!satınal bmw]**\n\n**`Aile Evi`**\n*•Malikane: 100.000₺* **[!satınal malikane]**")
    .setColor("ff7f00")
    .setAuthor(message.author.username,message.author.avatarURL())
    .setFooter('\nŞuanda 1. Sayfayı görüntülüyorsunuz, 2. sayfayı görmek için !mağaza2 yazabilirsiniz')
    message.channel.send(embed)




}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"mağaza",
}
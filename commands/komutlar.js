const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTitle('ANKA ROLEPLAY')
    .setDescription('**💸Ekonomi Komutları;**\n**`•Para Göndermek İçin;`**\n*!paraver {kişi} {miktar}*\n**`•Paranızı Bankadan Çekmek için;`**\n*!paraçek {miktar}*\n**`•Paranızı Bankaya Yatırmak İçin;`**\n*!parayatır {miktar}*\n\n**🎬Rol İçi Komutlar**\n**`•Birisini Silah ile vurmak için;`**\n*!vur {kişi}*\n**`İhbarda Bulunmak İçin;`**\n*!112 {ihbarınız}*\n**`Şehir Değiştirmek İçin;`**\n*!biletal {şehrin} {gideceğin şehir}*\n\n**📎Diğer Komutlar;**\n**`•Sunucunun Davet Linki için;`**\n*!davet*\n**`•Sunucumuzun İnstagram Adresi için;`**\n*!instagram*\n**`•Sunucumuzun websitesi için`**\n*!website*')
    .setColor("#ff7f00")
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL())
    message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"komutlar",
}
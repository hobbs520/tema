const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;  

    let user = message.author;
    if(!message.member.roles.cache.has("kimyager-rol-id")) return message.reply('Sadece Kimyagerler Depo Alabilir');
    let author = db.fetch(`money_${message.guild.id}_${user.id}`);

    let Embed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(`❌ Depo almak için yeterli paranız bulunmamaktadır!`);

    if (args[0] == 'al') {
        if (author < 30000) return message.channel.send(Embed)
        
        db.fetch(`depo_${message.guild.id}_${user.id}`);
        db.add(`depo_${message.guild.id}_${user.id}`, 1)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark:Başarıyla Depo Satın Aldınız!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.member.roles.add('depo-id')
        message.channel.send(Embed2)
      
    }
}
       
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name: "depo",
}
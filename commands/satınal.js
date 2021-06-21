const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("ff7f00")
    .setDescription(`❌ Apartman Dairesi almak için yeterli paranız bulunmamaktadır!`)
    .setAuthor(message.author.username,message.author.avatarURL());

    if (args[0] == 'daire') {
        if (author < 50000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.add(`bronze_${message.guild.id}_${user.id}`, 1)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Apartman Dairesi Satın Aldınız!`)
        .setAuthor(message.author.username,message.author.avatarURL());

        db.subtract(`money_${message.guild.id}_${user.id}`, 50000)
        message.member.roles.add('eklencek-rol-id')
        message.channel.send(Embed2)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription('❌ Bir eşya seçin')  
    }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"satınal",
}
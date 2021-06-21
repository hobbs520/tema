const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (args[0] == "kayıt") {
    let rUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!message.member.roles.cache.has("polis-rol-id"))
      return message.reply("Polis Değilsiniz");
    if (!rUser) return message.channel.send("Vatandaş Bulunamadı");
    let rreason = args.join(" ").slice(22);
    let reportEmbed = new Discord.MessageEmbed()
      .setDescription("Sabıka")
      .setColor("#15f153")
      .addField("Bildirilen Vatandaş", `${rUser}`)
      .addField("Bildiren Memur", `${message.author}`)
      .addField("Konum", message.channel)
      .addField("Zaman Bilgisi", message.createdAt)
      .addField("Kayıt", rreason);

    let reportschannel = message.guild.channels.find(`name`, "suç-kayıt");
    if (!reportschannel)
      return message.channel.send("Suçlar Kanalı bulunamadı");

    message.delete().catch(O_o => {});
    reportschannel.send(reportEmbed);

    if (args[0] == "kayıtları") {
      let rUser = message.guild.member(message.mentions.users.first());
      let sebep = rreason;
      let reportEmbed = new Discord.MessageEmbed()
        .setDescription("Tüm Kayıtları")
        .setColor("#15f153")
        .addField("Kaydına Bakılan Vatandaş", `${rUser}`)
        .addField("Kayıt", rreason);

      let reportschannel = message.guild.channels.find(`name`, "suç-kayıt");
      if (!reportschannel)
        return message.channel.send("Suçlar Kanalı bulunamadı");
      message.channel.send(reportEmbed);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"suçlar",
}
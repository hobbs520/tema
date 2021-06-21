const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!")) return;

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`);
  if (money === null) money = "0";

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);
  if (bank === null) bank = "0";

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`);
  if (vip === null) vip = "0";

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`);
  if (shoes === null) shoes = "0";

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`);
  if (newcar === null) newcar = "0";

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`);
  if (newhouse === null) newhouse = "0";

  let tofas = await db.fetch(`tofas_${message.guild.id}_${user.id}`);
  if (tofas === null) tofas = "0";

  let doblo = await db.fetch(`doblo_${message.guild.id}_${user.id}`);
  if (doblo === null) doblo = "0";

  let clio = await db.fetch(`clio_${message.guild.id}_${user.id}`);
  if (clio === null) clio = "0";

  let bmw = await db.fetch(`bmw_${message.guild.id}_${user.id}`);
  if (bmw === null) bmw = "0";
  
  let uyusturucu = await db.fetch(`uyusturucu_${message.guild.id}_${user.id}`);
  if (uyusturucu === null) uyusturucu = "0";


  let mercedes = await db.fetch(`mercedes_${message.guild.id}_${user.id}`);
  if (mercedes === null) mercedes = "0";
  
  let bıçakçı = await db.fetch(`bıcakcıhisse_${message.guild.id}_${user.id}`);
  if (bıçakçı === null) bıçakçı = "0";
  
  let ertan = await db.fetch(`ertanholdinghisse_${message.guild.id}_${user.id}`);
  if (ertan === null) ertan = "0";
   
  let kerane = await db.fetch(`kerane_${message.guild.id}_${user.id}`);
  if (kerane === null) kerane = "0";
  
  let lastik = await db.fetch(`lastik_${message.guild.id}_${user.id}`);
  if (lastik === null) lastik = "0";
  
  let bıçakciotel = await db.fetch(`bicakciotel_${message.guild.id}_${user.id}`);
  if (bıçakciotel === null) bıçakciotel = "0";
  

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(
      `*${user}'ın*\n\n**Bıçakçı Holding'den : %${bıçakçı}\nBıçakçı Otel'den: %${bıçakciotel}\nSmoker Holding'den : %${ertan}\nContinental Lastikleri'nden: %${lastik}** *Hissesi bulunuyor.*`
    );
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"hissem",
}
//naber Orhan aşkm bunu görüon mu
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
  
  let harleydavidson = await db.fetch(`harleydavidson_${message.guild.id}_${user.id}`);
  if (harleydavidson === null) harleydavidson = "0";
  
  let honda = await db.fetch(`honda_${message.guild.id}_${user.id}`);
  if (honda === null) honda = "0";
  
  let yamaha = await db.fetch(`yamaha_${message.guild.id}_${user.id}`);
  if (yamaha === null) yamaha = "0";
  
  let kawasaki = await db.fetch(`kawasaki_${message.guild.id}_${user.id}`);
  if (kawasaki === null) kawasaki = "0";
  
  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("ff7f00")
    .setDescription(
      `**${user}'in Mülkiyeti**\n\nCüzdan: ${money}\nBanka Hesabı: ${bank}\n\n**Ev**\nKüçük Ev: ${shoes}\nBahçeli Ev: ${newcar}\nVilla: ${newhouse}\nApartman Daireleri: ${vip}\n\n**Araba**\nTofaş Şahin: ${tofas}\nFiat Doblo: ${doblo}\nRenault Clio: ${clio}\nBMW Gran Coupè: ${bmw}\nMercedes-Benz A-200: ${mercedes}\n\n**Motor**\nHarley Davidson 2020 Softail Standard: ${harleydavidson}\nHonda CBR 600RR: ${honda}\nYamaha MT-10 SP: ${yamaha}\nKawasaki Ninja 250R: ${kawasaki}\n\n**İllegal**\nUyuşturucu : ${uyusturucu} gram`
    );
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"mülk",
}
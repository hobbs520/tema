const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if(!message.content.startsWith('!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setDescription(`Lütfen Bakiyenizi Kontrol Ediniz`);

    if (args[0] == 'istanbul-izmir') {
        if (author < 100) return message.channel.send(Embed)
        
        db.fetch(`ist-izm_${message.guild.id}_${user.id}`);
        db.add(`ist-izm_${message.guild.id}_${user.id}`, 1)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşleminiz Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed2)
    
    } else if(args[0] == 'izmir-istanbul') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Bakiyenizi Kontrol Ediniz, Bilet Alma işlemi iptal edildi.`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`izm-ist_${message.guild.id}_${user.id}`)
        db.add(`izm-ist_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Bilet Alma İşleminiz Onaylanmıştır İyi Yolculuklar Dileriz.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)
     
    } else if(args[0] == 'antalya-ankara') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`ank-izm_${message.guild.id}_${user.id}`)
        db.add(`ank-izm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)    
    
    } else if(args[0] == 'izmir-antalya') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`ank-izm_${message.guild.id}_${user.id}`)
        db.add(`ank-izm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)     
   
    } else if(args[0] == 'ankara-antalya') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`ank-izm_${message.guild.id}_${user.id}`)
        db.add(`ank-izm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)   
    
    } else if(args[0] == 'antalya-izmir') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`ank-izm_${message.guild.id}_${user.id}`)
        db.add(`ank-izm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)   
   
    } else if(args[0] == 'izmir-ankara') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Bilet Alma İşlemi İptal Edildi\n\n Sebep : Yetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`izm-ant_${message.guild.id}_${user.id}`)
        db.add(`izm-ant_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Bilet Alma İşleminiz Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)
    
    } else if(args[0] == 'ankara-izmir') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın alma işlemi iptal edildi\n\nSebep: Yetersiz Bakiye`);
      
      if (author < 100) return message.channel.send(Embed2)
      
        db.fetch(`ist-ank_${message.guild.id}_${user.id}`)
        db.add(`ist-ank_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşleminiz Onaylanmıştır İyi Yolculuklar`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)
      
    } else if(args[0] == 'istanbul-ankara') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`ank-izm_${message.guild.id}_${user.id}`)
        db.add(`ank-izm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)
  
    } else if(args[0] == 'istanbul-antalya') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
        db.fetch(`ist–ant_${message.guild.id}_${user.id}`)
        db.add(`ist–ant_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)      
        
   } else if(args[0] == 'ankara-istanbul') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)
        db.fetch(`ist–ank_${message.guild.id}_${user.id}`)
        db.add(`ist–ank_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3)   
  
   } else if(args[0] == 'antalya-istanbul') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Başarısız\n\nYetersiz Bakiye`);

        if (author < 100) return message.channel.send(Embed2)

        db.fetch(`ant-ist_${message.guild.id}_${user.id}`) 
        db.add(`ant-ist_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Satın Alma İşlemi Onaylanmıştır İyi Yolculuklar Dileriz`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.member.roles.add('gidilcek-rol-id')
        message.member.roles.remove('silincek-rol-id')
        message.channel.send(Embed3) 
   
   }else if(args[0] == 'doblo') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ Doblo Alacak Paranız Bulunmaktadır!`);

        if (author < 30000) return message.channel.send(Embed2)
       
        db.fetch(`doblo_${message.guild.id}_${user.id}`)
        db.add(`doblo_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Doblo Aldınız!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.member.roles.add('gidilcek-rol-id')
        message.channel.send(Embed3)
        
  } else if(args[0] == 'clio') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ Clio Almak için yeterli paran yok!`);

        if (author < 30000) return message.channel.send(Embed2)
       
        db.fetch(`clio_${message.guild.id}_${user.id}`)
        db.add(`clio_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Renault Clio aldınız!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.member.roles.add('gidilcek-rol-id')
        message.channel.send(Embed3)
          
  } else if(args[0] == 'bmw') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ BMW almak için yeterli paran yok!`);

        if (author < 80000) return message.channel.send(Embed2)
       
        db.fetch(`bmw_${message.guild.id}_${user.id}`)
        db.add(`bmw_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla BMW aldın!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 80000)
        message.member.roles.add('gidilcek-rol-id')
        message.channel.send(Embed3)
            
 } else if(args[0] == 'mercedes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ Mercedes Almak için yeterli paranız yok!`);

        if (author < 70000) return message.channel.send(Embed2)
       
        db.fetch(`mercedes_${message.guild.id}_${user.id}`)
        db.add(`mercedes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Mercedes Aldınız!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 70000)
        message.member.roles.add('gidilcek-rol-id')
        message.channel.send(Embed3)  
            
            
  } else if(args[0] == 'malikane') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Malikane Almak için yeterli paranız yok`);

        if (author < 100000) return message.channel.send(Embed2)
       
        db.fetch(`malikane_${message.guild.id}_${user.id}`)
        db.add(`malikane_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Başarıyla Malikane aldınız`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100000)
        message.channel.send(Embed3)
              
              } else if(args[0] == 'ceteevi') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ Çete Evi almak için yeterli paranız yok`);

        if (author < 15000) return message.channel.send(Embed2)
       
        db.fetch(`ceteevi_${message.guild.id}_${user.id}`)
        db.add(`ceteevi_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Çete Evi Aldınız`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 15000)
        message.channel.send(Embed3)
                
   } else if(args[0] == 'nisanyuzugu') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`❌ Nişan Yüzüğü almak için yeterli paran yok!`);

        if (author < 5000) return message.channel.send(Embed2)
       
        db.fetch(`nisan_${message.guild.id}_${user.id}`)
        db.add(`nisan_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`:white_check_mark: Başarıyla Nişan Yüzüğü Aldın`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)
                  
   } else if(args[0] == 'telefon') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`İşlem Gerçekleştirilemedi\nLütfen Bakiyenizi Kontrol Ediniz\n\nTurkcell`);

        if (author < 1000) return message.channel.send(Embed2)
       
        db.fetch(`telefon_${message.guild.id}_${user.id}`)
        db.add(`telefon_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#ff7f00")
        .setDescription(`Telefon Aldığınız İçin Teşekkür eder, Yine Bekleriz\n\nTurkcell`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
        message.member.roles.add('gidilcek-rol-id')
      
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
  name: "bilet-al",
}
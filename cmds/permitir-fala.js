var Discord = require('discord.js');
const moment = require('moment');
        moment.locale('pt-BR');

exports.run = async (client, message, args, database) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) 
   {
       let A_1 = new Discord.RichEmbed()
       .setColor(0xcc0000)
       .setDescription(`${message.author}, sem permissão !`);
       message.channel.send(A_1);
       return;
   }

   let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member) 
   {
    let A_2 = new Discord.RichEmbed()
    .setColor(0xcc0000)
    .setDescription(`${message.author}, mencione ou providencie o ID de um membro valido !`);
    message.channel.send(A_2);
    return;
  }

  if(!member.roles.some(r=>["Muted/Cantinho da Vergonha"].includes(r.name)) ) {
      let nnnvaidarcaralho = new Discord.RichEmbed()
      .setColor(0xcc0000)
      .setDescription(`${message.author}, o membro mencionado não esta silenciado.`)
      message.channel.send(nnnvaidarcaralho);
      return;
  }

  let A_4 = new Discord.RichEmbed()
  .setColor(0x4BB543)
  .setDescription(`${message.author}, o membro ${member.user.username} agora pode falar novamente !`)
  message.channel.send(A_4);
  member.removeRole('520651707697463312');

  let A_5 =  new Discord.RichEmbed()
  .addField('Membro que pode falar novamente', `${member.user.username}#${member.user.discriminator}`)
  .addField('Moderador', message.author)
  .setColor('RANDOM')
  client.channels.get(client.auditlog).send(A_5);
}
//402216351885950977
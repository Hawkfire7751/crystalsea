const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'ODI4MDQ2OTc2OTgxMjcwNTQ5.YGj41w.xi5qdaGo1Ze3xpW5UpUxaJQsr6Y';

client.on('ready', () => {
  console.log('Bot is online.');
});

client.on('message', message => {
// Detects if it was sent in a server channel, whether the user was a bot, and for the prefix.
   if (message.channel.type != 'text' || message.author.bot || !message.content.startsWith('c!'))
    return;
  
  if (message.content === 'c!test') {
    message.channel.send('Yes, I\'m alive.');
  }
    
    else if (message.content === 'c!poll') {
      message.react('✅')
         .then(() => message.react('❌'));      
    }
  
   else if (message.content === 'c!pollhelp') {
        message.channel.send ('Yes/No poll reactor');
      }
   else if (message.content === 'c!avatar') {
        message.channel.send(message.author.displayAvatarURL());
      }
  
});
    
client.login(token);
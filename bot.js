const Discord = require('discord.js');
const client = new Discord.Client();

const bot = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
    console.log('I am ready!');
client.user.setActivity("on SourceCade!");    
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

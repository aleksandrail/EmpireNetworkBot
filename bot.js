const Discord = require('discord.js');
const client = new Discord.Client();

const bot = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
    console.log('I am ready!');
client.user.setPresence("empirenetwork.tk | !help"), type: "STREAMING";
}); 
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

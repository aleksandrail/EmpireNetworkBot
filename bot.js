const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
  
});

client.login(process.env.BOT_TOKEN);

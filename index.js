// require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    console.log(msg.content)
    console.log(msg.content.indexOf("I'm"));

    if (msg.author === "<@175647516329508864>") {
        msg.reply("You're adopted.")

    } else if (msg.content.includes("I'm")) {
        if (msg.author.bot) return
        var message = msg.content.replace("I'm", '');
        var newMessage = "Hi," + message + ", I'm Dad!"
        msg.reply(newMessage);
    }

});
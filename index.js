// require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

jokes = ["What did the drummer call his twin daughters? Anna one, Anna two!", "How did Darth Vader know what Luke got him for Christmas? He felt his presents!", "Did you hear about the chameleon who couldn't change color? He had a reptile dysfunction.", "Did you hear about the chameleon who couldn't change color? He had a reptile dysfunction.", "I wanted to go on a diet, but I feel like I have way too much on my plate right now.", "Want to hear a joke about construction? I'm still working on it.", "What’s Forrest Gump’s password? 1forrest1,", "What sound does a witches car make? Broom Broom", "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!", "What does a zombie vegetarian eat? “GRRRAAAIINS!”", "This graveyard looks overcrowded. People must be dying to get in there.", "What does a nosey pepper do? It gets jalapeno business!", "I tell dad jokes, but I don't have any kids. I'm a faux pa.", 'Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, "No, just leave it in the carton!"', "What’s that Nevada city where all the dentists visit? Floss Vegas.", "Why did the picture go to jail? Because it was framed.", "What do you call a bear without any teeth? A gummy bear!", "What do you call a hippie's wife? Mississippi.", "The shovel was a ground-breaking invention.", "Dad, can you put the cat out? I didn't know it was on fire.", "Does anyone need an ark? I Noah guy!", "How do you make holy water? You boil the hell out of it.", "5/4 of people admit that they’re bad with fractions.", "What do you call a man with a rubber toe? Roberto.", "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.", "I’ve never gone to a gun range before. I decided to give it a shot!", "The rotation of earth really makes my day."]

bot.on('message', msg => {
    console.log(msg.content)
    console.log(msg.author.id);

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(randomJoke);



    if (msg.content === "<@175647516329508864>" + " joke") {
        msg.reply(randomJoke);
    }

    if (msg.author.id === "175647516329508864") {
        msg.reply("You're adopted.")

    } else if (msg.content.includes("I'm")) {
        if (msg.author.bot) return
        var message = msg.content.replace("I'm", '');
        var newMessage = "Hi," + message + ", I'm Dad!"
        msg.reply(newMessage);
    }

});
const Discord = require('discord.js'), bot = new Discord.Client();
const config = require("./data/config.json");

bot.login(config.token);

let prefix = config.prefix;

let bot_version = "0.0.1";

function entierAleatoire(min, max) { //Pour avoir un entier aléatoire avec les paramètres passés
	
	return Math.floor(Math.random() * (max - min + 1)) + min
}

bot.on('ready', function() {
	bot.user.setActivity("Undercover Bot | *help")
	//bot.user.setStatus('dnd');
	console.log("bot 'Undercover' has been connected sucessfully!")
	console.log("bot lancé le: " + new Date() + " ");

	let InitializeVariable = 1;
});

//Main

bot.on('message', async message => {

	if (message.content === prefix + "ping") {
		const m = await message.channel.send("Calcul en cours...");
        m.edit( ":ping_pong: | Pong!\nTemps de réponse : **" + `${m.createdTimestamp - message.createdTimestamp}ms` + "**");
	}
});
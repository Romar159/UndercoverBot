const Discord = require('discord.js'), bot = new Discord.Client();
const config = require("./data/config.json");
const fs = require("fs");

bot.login(config.token);

let prefix = config.prefix;

let bot_version = "0.0.1";

function entierAleatoire(min, max) { //Pour avoir un entier aléatoire avec les paramètres passés
	
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
      throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}


bot.on('ready', function() {
	bot.user.setActivity("Undercover Bot | *help")
	//bot.user.setStatus('dnd');
	console.log("bot 'Undercover' has been connected sucessfully!")
	console.log("bot lancé le: " + new Date() + " ");

	let InitializeVariable = 1;
});

//Main

bot.on('message', async (message) => {

	if (message.content === prefix + "ping") {
		const m = await message.channel.send("Calcul en cours...");
        m.edit( ":ping_pong: | Pong!\nTemps de réponse : **" + `${m.createdTimestamp - message.createdTimestamp}ms` + "**");
	}

	if (message.content === prefix + "getWord") {
			let lineRandom = entierAleatoire(0, 49)
			
			get_line("./words/liste.txt", lineRandom, function(err, line) { 
				if(err) { 
					console.log(err); 
				} 

				message.channel.send("Ligne complète : " + line)
				mot1 = line.split(" -> ")[0];
				mot2 = line.split(" -> ")[1];
				message.channel.send("Mot 1 : " + mot1 + "\nMot 2 : " + mot2);

				// Envoyer en dm ici !


			});
				/*message.guild.members.get("421400262423347211").send("Mot 1 : " + mot1);
				message.guild.members.get("335339983298625536").send("Mot 2 : " + mot2);*/
	}
});
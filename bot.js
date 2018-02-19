const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {st_admin: "371003132983115777", ml_admin: "371003796454899712", st_moder: "394505884266528788", ml_moder: "371003753781788684", creator: "406442606273363990"};
const creators = ['207821802431315968', '168255014282854401'];
const log_channels = ['414479694453407744', '414506590889312280'];
const black_list = [''];


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

function objDump(object) {
    var out = "";
    if(object && typeof(object) == "object"){
        for (var i in object) {
            out += i + ": " + object[i] + "\n";
        }
    } else {
        out = object;
    }
        return out;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


client.on("messageDelete", message => {
	if (message.channel.name == undefined) return;
	if (log_channels.includes(message.channel.id)) return;
	let nick = message.author.username;
	if (message.member.nickname != null) nick = message.member.nickname;
	let params = {};
	if (message.embeds[0]) {
		const embed = new Discord.RichEmbed();
		embed.setColor(message.embeds[0].color);
		if (message.embeds[0].title)
			embed.setTitle(message.embeds[0].title);
		if (message.embeds[0].author)
			embed.setAuthor(message.embeds[0].author);
		if (message.embeds[0].description)
			embed.setDescription(message.embeds[0].description);
		if (message.embeds[0].url)
			embed.setURL(message.embeds[0].url);
		if (message.embeds[0].image)
			embed.setImage(message.embeds[0].image.url);
		if (message.embeds[0].thumbnail)
			embed.setThumbnail(message.embeds[0].thumbnail.url);
		if (message.embeds[0].footer)
			embed.setFooter(message.embeds[0].footer.text, message.embeds[0].footer.iconURL)
		if (message.embeds[0].author)
			embed.setAuthor(message.embeds[0].author.name, message.embeds[0].author.iconURL, message.embeds[0].author.url);
		for (i=0;i!=message.embeds[0].fields.length;i++) {
			embed.addField(message.embeds[0].fields[i].name, message.embeds[0].fields[i].value, message.embeds[0].fields[i].inline);
		}
		params = {embed: embed}
	}
	message.guild.channels.get('414479694453407744').send(`\`У пользователя ${nick} было удалено сообщение:\`\n\n${message.content}`, params);
});

client.on('ready', () => {
	console.log('Bot loaded');
	client.user.setPresence({ game: { name: `${process.env.PREFIX}помощь`, type: 0 } });
})


client.on("messageUpdate", (old_message, new_message) => {
	if (old_message.channel.name == undefined) return;
	if (log_channels.includes(old_message.channel.id)) return;
	if (old_message.content === new_message.content && old_message.attachments === new_message.attachments && old_message.embeds === new_message.embeds) return;
	let nick = old_message.author.username;
	if (old_message.member.nickname != null) nick = old_message.member.nickname;
	const rand = getRandomInt(0, 234234243);
	let old_params = {};
	let new_params = {};
	if (old_message.embeds[0]) {
		const old_embed = new Discord.RichEmbed();
		old_embed.setColor(old_message.embeds[0].color);
		if (old_message.embeds[0].title)
			old_embed.setTitle(old_message.embeds[0].title);
		if (old_message.embeds[0].author)
			old_embed.setAuthor(old_message.embeds[0].author);
		if (old_message.embeds[0].description)
			old_embed.setDescription(old_message.embeds[0].description);
		if (old_message.embeds[0].url)
			old_embed.setURL(old_message.embeds[0].url);
		if (old_message.embeds[0].image)
			old_embed.setImage(old_message.embeds[0].image.url);
		if (old_message.embeds[0].thumbnail)
			old_embed.setThumbnail(old_message.embeds[0].thumbnail.url);
		if (old_message.embeds[0].footer)
			old_embed.setFooter(old_message.embeds[0].footer.text, old_message.embeds[0].footer.iconURL)
		if (old_message.embeds[0].author)
			old_embed.setAuthor(old_message.embeds[0].author.name, old_message.embeds[0].author.iconURL, old_message.embeds[0].author.url);
		for (i=0;i!=old_message.embeds[0].fields.length;i++) {
			old_embed.addField(old_message.embeds[0].fields[i].name, old_message.embeds[0].fields[i].value, old_message.embeds[0].fields[i].inline);
		}
		old_params = {embed: old_embed}
	}
	if (new_message.embeds[0]) {
		const new_embed = new Discord.RichEmbed();
		new_embed.setColor(new_message.embeds[0].color);
		if (new_message.embeds[0].title)
			new_embed.setTitle(new_message.embeds[0].title);
		if (new_message.embeds[0].author)
			new_embed.setAuthor(new_message.embeds[0].author);
		if (new_message.embeds[0].description)
			new_embed.setDescription(new_message.embeds[0].description);
		if (new_message.embeds[0].url)
			new_embed.setURL(new_message.embeds[0].url);
		if (new_message.embeds[0].image)
			new_embed.setImage(new_message.embeds[0].image.url);
		if (new_message.embeds[0].thumbnail)
			new_embed.setThumbnail(new_message.embeds[0].thumbnail.url);
		if (new_message.embeds[0].footer)
			new_embed.setFooter(new_message.embeds[0].footer.text, new_message.embeds[0].footer.iconURL)
		if (new_message.embeds[0].author)
			new_embed.setAuthor(new_message.embeds[0].author.name, new_message.embeds[0].author.iconURL, new_message.embeds[0].author.url);
		for (i=0;i!=new_message.embeds[0].fields.length;i++) {
			new_embed.addField(new_message.embeds[0].fields[i].name, new_message.embeds[0].fields[i].value, new_message.embeds[0].fields[i].inline);
		}
		new_params = {embed: new_embed}
	}
	old_message.guild.channels.get('414506590889312280').send(`\`${nick} изменил сообщение:\``);old_message.guild.channels.get('414506590889312280').send(`\`${rand}\` ***Было:***\n${old_message.content}`, old_params);old_message.guild.channels.get('414506590889312280').send(`\`${rand}\` ***Стало:***\n${new_message.content}`, new_params);
})

// client.on("messageBulkDelete")

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setTitle('Добро пожаловать')
  .setColor("#ee83ac")
  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
  .setFooter("JonedVoice")
  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
  .setTimestamp()
  member.send({embed});
});
client.on("message", message => {
	if (message.channel.id == '409054265626329105') {
		if (!black_list.includes(message.author.id))
      	message.react("✅");
      	message.react("❌");
	}

	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();


	if (command == 'тест_приветствия') {
	  const embed = new Discord.RichEmbed()
	  .setTitle('Добро пожаловать')
	  .setColor("#ee83ac")
	  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
	  .setFooter("JonedVoice")
	  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
	  .setTimestamp()
	  message.author.send({embed});
	} else if ((command === "скажи" || command === "say") && (creators.includes(message.author.id) || message.member.roles.some(r=>[rule.st_admin, rule.creator].includes(r.id)))) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(O_o=>{message.reply('ты ебобо?');});
  	} else if (command === "очистить" || command == "clear" || command == "del") {
  		if(!message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Извините, ебобобам слово не давали!");
		let content = message.content.slice(process.env.PREFIX.length + 8);
		let messagecount = parseInt(args[0])+1;
		let msc = messagecount -1;
		if (messagecount > 2) {
			message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
		let lol = declOfNum(msc, ['сообщение', 'сообщения', 'сообщений']);
		message.channel.send(`Удалено ${msc} ${lol}!`).then(msg => {msg.delete(5000)});
		message.delete();
		} else {
			message.author.send({embed: {
				color: 16711680,
				title: "Ошибка удаления сообщений",
				description: `\`${content}\` либо меньше двух, либо не является числом.`,
				footer: {
				  	text: "JonedVoice",
			  	},
			}});
		}
	} else if (command === "аватарка" || command === "avatar") {
		let member = message.mentions.members.first();
		if (!member) 
		return message.author.send({embed: {
				color: 16711680,
				title: "Ошибка кражи",
				description: `Тот, у кого вы пытались украсть аватарку или не существует, или украл у вас мозг.`,
				footer: {
				  	text: "JonedVoice",
			  	},
			}});
		const embed = new Discord.RichEmbed()
		.setTitle(`Аватарка пользователя ${member.user.tag}`)
		.setImage(member.user.avatarURL)
		.setFooter("JonedVoice")
		.setColor(parseInt(getRandomInt(0,16777214)));
		message.channel.send({embed});
		message.delete();
	} else if (command == "помощь" || command == "помошь" || command == "помощ" || command == "помош" || command == "помоги" || command == "памаги" || command == "помаги" || command == "хэлп" || command == "хелп" || command == "help") {
		var cmds = '';
		if (creators.includes(message.author.id)) {
			cmds = cmds + `\`${process.env.PREFIX}скажи [текст]\` - написать сообщение от имени бота.\n`;
		}
		if(message.member.roles.some(r=>[rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)) || creators.includes(message.author.id)) {
			cmds = cmds + `\`${process.env.PREFIX}очистить [кол-во]\` - очистить определённое кол-во сообщений.\n`;
		}
		cmds = cmds + `\`${process.env.PREFIX}аватарка [упоминание человека]\` - украсть аватарку.\n`;
		const embed = new Discord.RichEmbed()
		.setTitle(`Помощь`)
		.setFooter("JonedVoice")
		.setColor(parseInt(getRandomInt(0,16777214)))
		.setDescription(cmds);
		message.channel.send({embed});
	} else if (command === "юзеринфо" || command === "userinfo") {
		let member = message.mentions.members.first();
		if (!member) 
		return message.author.send({embed: {
			color: 16711680,
			title: "Ошибка получения иформации",
			description: `Тот, чью информацию вы хотели получить или не существует, или поимел вас.`,
			footer: {
			  	text: "JonedVoice",
		  	},
		}});
		const embed = new Discord.RichEmbed()
		.setColor(member.displayColor)
		.setDescription(`Присоединился ${member.joinedAt.getDate()}.${member.joinedAt.getMonth()}.${member.joinedAt.getFullYear()}`);
		message.channel.send({embed});
	} else if (command == "remote_say") {
		if(!message.member.roles.some(r=>[rule.st_admin, rule.creator].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Извините, ебобобам слово не давали!");
		if (message.channel.id = undefined) return message.author.send('Ты ебобо?');
		let new_args = args;
		const chat = new_args.shift();
	 	const sayMessage = new_args.join(" ");
	 	console.log(chat);
	    message.guild.channels.get(chat).send(sayMessage).catch(O_o=>{message.reply('ты ебобо?');});
	    message.delete().catch(O_o=>{}); 
	} else {
		message.reply({embed: {
			color: 16711680,
			title: "Ошибка",
			description: `ЭЭЭЭ! Команды \`${command}\` нету! Алло, ты шо, ебобо?`,
			footer: {
			  	text: "JonedVoice",
		  	},
		}})
	}
});

client.login(process.env.BOT_TOKEN);

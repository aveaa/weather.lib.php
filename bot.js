const Discord = require('discord.js');
const client = new Discord.Client();
const rule = {music_dj:"416468571196227584", st_admin: "371003132983115777", ml_admin: "371003796454899712", st_moder: "394505884266528788", ml_moder: "371003753781788684", creator: "406442606273363990"};
const creators = ['207821802431315968', '168255014282854401'];
const log_channels = ['414479694453407744', '414506590889312280', '415524508091416576'];
const black_list = [''];
const music_channels = ['', '415577705636167694', '415578104724193300', '415578300505915393', '415578533511823370', '415578661023121408'];
const jvbot_channel = '415524508091416576';
const music_emojis = {play: client.emojis.get('')};
let music_bot_messages = ['', '', '', '', '', ''];
let music_bot_channels = ['', '', '', '', '', ''];

/** @namespace process.env.PREFIX */
/** @namespace process.env.BOT_TOKEN */


function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function multipleReact(message, array) {
    if (!message.id) return;
    let interval = setInterval(() => {
        if (array !== []) {
            message.react(array.shift());
        } else {
            clearInterval(interval);
        }
    }, 10);
}


// let interval = setInterval (function () {
// 	client.guilds.get('370998450285707275').channels.get('415524508091416576').fetchMessage('415526023543914507').then(message => {const embed = new Discord.RichEmbed().setFooter('JonedVoice').setTitle(message.embeds[0].title);embed.setDescription(`Кол-во участников: \`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\`/\`${message.guild.memberCount}\``);message.edit({embed})});
// }, 10000); 

client.on("messageReactionAdd", (reaction, user) => {
    if (music_channels.indexOf(reaction.message.guild.members.get(user.id).voiceChannelID) !== -1 && music_bot_messages.includes(reaction.message.id) && !user.bot) {
        if (reaction.emoji.name === '✅') {
            console.log('ok');
        }
    }
});

client.on("messageDelete", message => {
    if (message.author.bot) return;
	if (message.channel.name === undefined) return;
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
        /** @namespace message.embeds[0].footer.iconURL */
        if (message.embeds[0].footer)
			embed.setFooter(message.embeds[0].footer.text, message.embeds[0].footer.iconURL);
		if (message.embeds[0].author)
			embed.setAuthor(message.embeds[0].author.name, message.embeds[0].author.iconURL, message.embeds[0].author.url);
		for (let i=0;i!==message.embeds[0].fields.length;i++) {
			embed.addField(message.embeds[0].fields[i].name, message.embeds[0].fields[i].value, message.embeds[0].fields[i].inline);
		}
		params = {embed: embed}
	}
	message.guild.channels.get('414479694453407744').send(`\`У пользователя ${nick} было удалено сообщение:\`\n\n${message.content}`, params);
});

client.on('ready', () => {
	console.log('Bot loaded');
	client.user.setPresence({ game: { name: `по сторонам`, type: 3 } }).catch();
});


client.on("messageUpdate", (old_message, new_message) => {
    if (old_message.author.bot) return;
	if (old_message.channel.name === undefined) return;
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
        /** @namespace old_message.embeds[0].footer.iconURL */
        if (old_message.embeds[0].footer)
			old_embed.setFooter(old_message.embeds[0].footer.text, old_message.embeds[0].footer.iconURL);
		if (old_message.embeds[0].author)
			old_embed.setAuthor(old_message.embeds[0].author.name, old_message.embeds[0].author.iconURL, old_message.embeds[0].author.url);
		for (let i=0;i!==old_message.embeds[0].fields.length;i++) {
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
        /** @namespace new_message.embeds[0].footer.iconURL */
        if (new_message.embeds[0].footer)
			new_embed.setFooter(new_message.embeds[0].footer.text, new_message.embeds[0].footer.iconURL);
		if (new_message.embeds[0].author)
			new_embed.setAuthor(new_message.embeds[0].author.name, new_message.embeds[0].author.iconURL, new_message.embeds[0].author.url);
		for (let i=0;i!==new_message.embeds[0].fields.length;i++) {
			new_embed.addField(new_message.embeds[0].fields[i].name, new_message.embeds[0].fields[i].value, new_message.embeds[0].fields[i].inline);
		}
		new_params = {embed: new_embed}
	}
	old_message.guild.channels.get('414506590889312280').send(`\`${nick} изменил сообщение:\``);old_message.guild.channels.get('414506590889312280').send(`\`${rand}\` ***Было:***\n${old_message.content}`, old_params);old_message.guild.channels.get('414506590889312280').send(`\`${rand}\` ***Стало:***\n${new_message.content}`, new_params);
});

// client.on("messageBulkDelete")

client.on("guildMemberAdd", member => {
// client.guilds.get('370998450285707275').channels.get('415524508091416576').fetchMessage('415526023543914507').then(message => {const embed = new Discord.RichEmbed().setFooter('JonedVoice').setTitle(member.user.tag);embed.setDescription(`Кол-во участников: \`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\`/\`${message.guild.memberCount}\``);message.edit({embed})});
  const embed = new Discord.RichEmbed()
  .setTitle('Добро пожаловать')
  .setColor("#ee83ac")
  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
  .setFooter("JonedVoice")
  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
  .setTimestamp();
  member.send({embed});
});
client.on("message", async message => {
	if (message.channel.id === '409054265626329105') {
		if (!black_list.includes(message.author.id))
      	message.react("✅").catch(err => {console.log(err)});
      	message.react("❌").catch(err => {console.log(err)});
	}

	if(message.author.bot) return;
    if(message.content.indexOf(process.env.PREFIX) !== 0) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();


	if (command === 'тест_приветствия') {
	  const embed = new Discord.RichEmbed()
	  .setTitle('Добро пожаловать')
	  .setColor("#ee83ac")
	  .setDescription("\nПриветсвуем тебя,наш новый участник!\nНадеемся, что тебе у нас понравится.\n\nТы попал на сервер __#JonedVoice__\nСервер, где находят друзей, играют с ними, да и просто проводят свободное время.\n\nДля того чтобы ты не запутался, администрация составила список каналов, которые ты должен обязательно\nпосетить, ибо там находится полезная информация для новичков, вроде тебя.\nИ так, перечень важных каналов:\n\nКанал **#info** - в основном предназначен для новичков сервера. Здесь находятся все ответы на твои вопросы,связаные с нашим сервером.\n\nВ разделе **#News** - ты можешь прочитать информацию об обновлениях нашего сервера и посмотреть на приятные плюшки.\n\nЕсли ты хочешь проверить свою удачу, то тебе в канал **#Contestchannel** - здесь ты можешь поучаствовать в конкурсе на внутрисерверную валюту и не только.\n\nТекстовый канал **#Chatik** - предназначен для общения между игроками.\n\nДругой текстовый канал, именуемый **#commands** - используется для команд ботов, которые присуствуют на сервере.\n\n**#fapchannel** - канал для клубнички.")
	  .setFooter("JonedVoice")
	  .setThumbnail("https://cdn.discordapp.com/attachments/332255338805854208/411963427972579328/neon231.png")
	  .setTimestamp();
	  message.author.send({embed});
	} else if ((command === "скажи" || command === "say" || command === "s") && (creators.includes(message.author.id) || message.member.roles.some(r=>[rule.st_admin, rule.creator].includes(r.id)))) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).catch(()=>{message.reply('ты ебобо?');});
  	} else if (command === "очистить" || command === "clear" || command === "del" || command === "clr") {
  		if(!message.member.roles.some(r=>[rule.ml_moder, rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Извините, ебобобам слово не давали!");
		let content = message.content.slice(process.env.PREFIX.length + 8);
		let messagecount = parseInt(args[0]);
		let msc = messagecount;
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
	} else if (command === "аватарка" || command === "avatar" || command === "av" || command === "ав") {
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
	} else if (command === "помощь" || command === "помошь" || command === "помощ" || command === "помош" || command === "помоги" || command === "памаги" || command === "помаги" || command === "хэлп" || command === "хелп" || command === "help") {
		
		
		let limit = 5;
		let cmds = [''];
		if (creators.includes(message.author.id) || message.member.roles.some(r=>[rule.st_admin, rule.creator].includes(r.id)))
			cmds.push(`\`${process.env.PREFIX}скажи [текст]\` - написать сообщение от имени бота.`);

		if(message.member.roles.some(r=>[rule.ml_moder, rule.st_moder, rule.ml_admin, rule.st_admin, rule.creator].includes(r.id)) || creators.includes(message.author.id))
			cmds.push(`\`${process.env.PREFIX}очистить [кол-во]\` - очистить определённое кол-во сообщений.`);

		cmds.push(`\`${process.env.PREFIX}аватарка [упоминание человека]\` - украсть аватарку.`);
        cmds.push(`\`${process.env.PREFIX}инфо\` - информация.`);
		cmds.push(`\`${process.env.PREFIX}роли\` - информация о ролях.`);
        cmds.push(`\`${process.env.PREFIX}войс\` - информация о голосовых каналах.`);
        cmds.push(`\`${process.env.PREFIX}экономика\` - информация о экономике.`);
        cmds.push(`\`${process.env.PREFIX}игры\` - информация о играх.`);
		cmds.push(`\`${process.env.PREFIX}музыка добавить [ссылка на видео]\` - добавить трек в очередь.`);
		cmds.push(`\`${process.env.PREFIX}музыка играть\` - Начать воспроизведение треков.`);
		cmds.push(`\`${process.env.PREFIX}музыка пауза\` - Поставить трек на паузу.`);
		cmds.push(`\`${process.env.PREFIX}музыка дальше\` - Продолжить воспроизведение трека.`);
		cmds.push(`\`${process.env.PREFIX}музыка пропустить\` - Пропустить трек.`);
		let all_pages = Math.ceil(cmds.length/limit);

		let page = parseInt(args[0]);
		if (parseInt(args[0]) > all_pages || parseInt(args[0]) < 1 || args.length === 0) page = 1;
		let cmds_list = cmds.slice(1+((page-1)*limit), 6+((page-1)*limit));
		if (all_pages > page) cmds_list.push(`\n**Для просмотра следующей страницы напишите \`${process.env.PREFIX}${command} ${page+1}\`**`);
		const embed = new Discord.RichEmbed()
		.setTitle(`Помощь пользователя ${message.author.tag}`)
		.setFooter(`Страница ${page}/${all_pages}`)
		.setColor(parseInt(getRandomInt(0,16777214)))
		.setDescription(cmds_list.join('\n'));
		message.channel.send({embed});
		message.delete();

	} else if (command==='roles' || command === 'роли') {
		const embed = new Discord.RichEmbed()
		.setTitle()
		.setColor(parseInt(getRandomInt(0,16777214)))
		.setDescription('**Роли выдают: \\🅰️ Jr.Admins | \\🎩 St.Moderators | \\👍 St.Admins**\n' +
            '  **Что-бы получить роли \\🎬 Youtubers | \\📹 Streamers, у вас должно быть 500 подписчиков на YouTube, либо у вас должно быть хотябы 4 стрима на Twitch**\n' +
            '\n' +
            ' **\\🔥 Nether - 1 Уровень\n' +
            ' \\💀 Demon - 5 Уровень\n' +
            ' \\🔪Come with us.. - 5 Уровень\n' +
            ' \\👿 Archdemon - 10 Уровень\n' +
            ' \\🌠 Lucifer - 15 Уровень\n' +
            ' \\👹 Infernal Demon - 20 Уровень\n' +
            '\n' +
            '  \\👻 Soul - 25 Уровень\n' +
            '  \\🔑 Key into the World - 25 Уровень\n' +
            '\n' +
            '  \\🌟 Heavenly - 30 Уровень\n' +
            '  \\🔮 Crystal Key - 30 Уровень\n' +
            '\n' +
            '  \\👼 Angel - 35 Уровень\n' +
            '  \\🍀 Arcangel - 40 Уровень\n' +
            '  \\⚜️ Divine - 45 Уровень**');
		message.reply({embed});
		message.delete();
	} else if (command==='info' || command === 'инфо' || command === 'information' || command === "информация") {
        const embed = new Discord.RichEmbed()
            .setTitle('')
            .setColor(parseInt(getRandomInt(0,16777214)))
            .setDescription('***Привет! Если ты новенький, то не забудь прочитать правила:*** \n' +
                '**<#371013741480771594> и <#416537364106838027>\n' +
                'Имеются новости, в чате: <#416506915422732288>\n' +
                'У нас иногда проходят конкурсы! Информацию о конкурсах можете посмотреть в чате: <#416504429852753930>\n' +
                'И да не забудь поставить нам лайк [тут](https://discord-server.com/servers/370998450285707275)\n' +
                'Если вы хотите цветную роль то зайдите на текст канал   <#416504592155672576>\n' +
                'Если вы хотите узнать на как получить актив роль, то припишите `jv!роли`\n' +
                'Если вы хотите узнать, какое описание у голосовых каналов, то пишите `jv!войс`\n' +
                'Если вы хотите узнать, какие игра есть у нас на сервере, пишите команду `jv!игры`\n' +
                'Если вы не поняли, как зарабатывать Jd\\💸, то подробно написано в команде `jv!экономика`\n' +
                'Создатель #Joned\\🌏Voice: <@!220467659332911104>**');
        message.reply({embed});
        message.delete();
    } else if (command=== 'voice' || command === 'войс' || command === 'voices' || command === "войсы" || command === "голосовой" || command === "голосовые") {
        const embed = new Discord.RichEmbed()
            .setTitle('')
            .setColor(parseInt(getRandomInt(0,16777214)))
            .setDescription(' **Голосовой чат Admins\\👿 предназначен только для Админов... Но и для обсуждений!\n' +
                '   Голосовой чат Mod\\🎩 предназначен для Модеров и Админов... Что-бы спрятаться))\n' +
                '   Голосовой чат Разговорка🌈 имеет ограниченное кол-во человек (99 чел.) и предназначен для разговора.\n' +
                '\n' +
                '\n' +
                '\n' +
                '   Есть еще \\🎶 Музыка и \\🎶 Радио категории, там есть радио у Медии и Пончика, а музыка у 5 серверных ботов и 6 муз. ботов\n' +
                '   Есть также и \\🔐 Приваты где есть ограниченное кол-во человек (2-10 чел.) их 5.\n' +
                '   И есть \\🚪 Афк категория, где находится Толчок\\🚾, приятно вам просрать там время ;)**');
        message.reply({embed});
        message.delete();
    } else if (command=== 'games' || command === 'игры') {
        const embed = new Discord.RichEmbed()
            .setTitle('')
            .setColor(parseInt(getRandomInt(0,16777214)))
            .setDescription('**Бои петухов ~~не админов~~\n' +
                'Чтобы участвовать в боях петухов, вы должны приобрести собственного петуха.\n' +
                '- Приобрести собственного петуха `s!buy-item Chicken`(Цена- 1500 Jd💸)\n' +
                'После вы можете участвовать в петушиных боях.\n' +
                '- Участвовать в петушиных боях `s!cock-fight {Ставка}`\n' +
                '\n' +
                ' Рулетка:\n' +
                'Вы можете поставить ставку в игре.\n' +
                '- Поставить ставку `s!roulette \<сумма\> \{игровая площадка\}`\n' +
                '\n' +
                'Игровые площадки:\n' +
                '[x36]** Номера { любой номер от 1-36}\n' +
                '**[x 3]** Множества`{1-12} {13-24} {25-36}`\n' +
                '**[x 3]** Столбцы `{1st} {2nd} {3rd}`\n' +
                '**[x 2]** Половины `{1} {2}`\n' +
                '**[x 2]** Нечетный - `{odd}` , четный - `{even}`\n' +
                '**[x 2]** Цвета `{red} {black}`\n' +
                '\n' +
                '**x** - умножение вашей ставки при победе.\n' +
                '\n' +
                '***Примеры:***\n' +
                '`s!roulette 200 odd`\n' +
                '`s!roulette 600 2nd`**');
        message.reply({embed});
        message.delete();
    } else if (command=== 'economy' || command === 'экономика') {
        const embed = new Discord.RichEmbed()
            .setTitle('')
            .setColor(parseInt(getRandomInt(0,16777214)))
            .setDescription('***FAQ по экономике на сервере***\n' +
                '**Для чего она нужна?\n' +
                'За внутрисерверную валюту вы можете купить цветные роли и предметы.\n' +
                '\n' +
                'Команды бота\n' +
                '- Проверка вашего баланса.  `s!money`\n' +
                '- Передать деньги участнику `s!give-money <@ник> <сумма>`\n' +
                'cash** - *кол-во наличных денег.*\n' +
                '**bank** - *счет в банке.*\n' +
                '(P.S- Не стоит хранить все деньги на счету cash, эти деньги у вас могут украсть!(\n' +
                '\n' +
                '**Банковская система:\n' +
                'Банк хранит деньги под небольшим процентом ( каждые 12 часов от всей сумму на счету прибавляется 1.5% )\n' +
                '- Информация о банке и его проценте `s!bank`\n' +
                '- Вы можете положить деньги на счет в банке `s!deposit <сумма>`\n' +
                '- А так же обналичить счет `s!withdraw <сумма>`**\n' +
                '\n' +
                '**Способы получения денег**\n' +
                '**- Писать сообщения в чате (2-5 Jd \\💸)**\n' +
                '*P.S- Можете не спамить, установлена спам-защита. Деньги не будут начисляются.*\n' +
                '**- Работа `s!work`\n' +
                '- Удача `s!slut`**\n' +
                '*P.S- имеет шанс 80% на удачу*\n' +
                '***Успешно- вы получите (200-500 Jd\\💸)***\n' +
                '**Провал- у вас заберут до 10% имеющихся денег\n' +
                '- Криминал [s!crime]**\n' +
                '*P.S- имеет шанс 50% на удачу.*\n' +
                '***Успешно- вы получите (400-1500 Jd\\💸)***\n' +
                '**Провал- у вас заберут до 40% имеющихся денег**\n' +
                '~~**- Кража денег у других игроков [s!rob @ник]**~~\n' +
                '\n' +
                '**Существуют различные игры, о них вы можете узнать введя команду jv!игры **');
        message.reply({embed});
        message.delete();
    } else if (command === "greet") {
		client.guilds.get('370998450285707275').channels.get('415524508091416576').fetchMessage('415526023543914507').then(message => {const embed = new Discord.RichEmbed().setFooter('JonedVoice').setTitle(args.join(" "));embed.setDescription(`Кол-во участников: \`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\`/\`${message.guild.memberCount}\``);message.edit({embed})});
	} else if (command === "music" || command === "музыка") {
		let new_args = args;
		let new_command = args.shift();
		if (new_command === "add" || new_command === "добавить") {
			if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
				message.channel.send('Эй! Ты не в канале бота!');
			} else {
				client.channels.get(jvbot_channel).send(`+jvdjbot+${music_channels.indexOf(message.member.voiceChannelID)}+add ${message.channel.id} ${new_args.join(' ')}`)
			}
		} else if (new_command === "play" || new_command === "играй" || new_command === "играть" || new_command === "воспроизвести") {
			if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
				message.channel.send('Эй! Ты не в канале бота!');
			} else {
				client.channels.get(jvbot_channel).send(`+jvdjbot+${music_channels.indexOf(message.member.voiceChannelID)}+play ${message.channel.id}`)
			}
		} else if ((new_command === "pause" || new_command === "пауза") && message.member.roles.has('416468571196227584')) {
			if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
				message.channel.send('Эй! Ты не в канале бота!');
			} else {
				client.channels.get(jvbot_channel).send(`+jvdjbot+${music_channels.indexOf(message.member.voiceChannelID)}+pause ${message.channel.id}`)
			}
		} else if ((new_command === "resume" || new_command === "дальше") && message.member.roles.has('416468571196227584')) {
			if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
				message.channel.send('Эй! Ты не в канале бота!');
			} else {
				client.channels.get(jvbot_channel).send(`+jvdjbot+${music_channels.indexOf(message.member.voiceChannelID)}+pause ${message.channel.id}`)
			}
		} else if ((new_command === "skip" || new_command === "пропустить") && message.member.roles.has('416468571196227584')) {
			if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
				message.channel.send('Эй! Ты не в канале бота!');
			} else {
				client.channels.get(jvbot_channel).send(`+jvdjbot+${music_channels.indexOf(message.member.voiceChannelID)}+skip ${message.channel.id}`)
			}
		} else if (new_command === "" || new_command === "control") {
            if (music_channels.indexOf(message.member.voiceChannelID) === -1) {
                let msg = message.channel.send('Эй! Ты не в канале бота!');
            } else {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Пульт управления • Ðжон DJ ${music_channels.indexOf(message.member.voiceChannelID)}`)
                    .setDescription(`Сейчас играет: `);
                if (music_bot_messages[music_channels.indexOf(message.member.voiceChannelID)] !== '' && music_bot_channels[music_channels.indexOf(message.member.voiceChannelID)] !== '') {
                    client.channels.get(music_bot_channels[music_channels.indexOf(message.member.voiceChannelID)]).fetchMessage(music_bot_messages[music_channels.indexOf(message.member.voiceChannelID)]).then(msg1=>{msg1.delete();});
                    music_bot_messages[music_channels.indexOf(message.member.voiceChannelID)] = '';
                    music_bot_channels[music_channels.indexOf(message.member.voiceChannelID)] = '';
                }
                message.channel.send({embed}).then(msg => {
                	music_bot_messages[music_channels.indexOf(message.member.voiceChannelID)] = msg.id;
                	music_bot_channels[music_channels.indexOf(message.member.voiceChannelID)] = msg.channel.id;
                	multipleReact(msg, ['🇦', '🇧', '🇨']);
                });
            }

		} else if (new_command === "test") {
		    console.log(music_bot_messages[1]);
            console.log(music_bot_messages[2]);
            console.log(music_bot_messages[3]);
            console.log(music_bot_messages[4]);
            console.log(music_bot_messages[5]);
        }
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
		.setDescription(`Присоединился ${member.joinedAt.getDate()}.${member.joinedAt.getMonth()}.${member.joinedAt.getFullYear()}`)
		.setThumbnail(member.user.avatarURL)
		.setTitle(member.user.tag, member.user.avatarURL);
		message.channel.send({embed});
	} else if (command === "remote_say" || command === "rs") {
		if(!message.member.roles.some(r=>[rule.st_admin, rule.creator].includes(r.id)) && !creators.includes(message.author.id))
  			return message.reply("Извините, ебобобам слово не давали!");
		if (message.channel.id = undefined) return message.author.send('Ты ебобо?');
		let new_args = args;
		const chat = new_args.shift();
	 	const sayMessage = new_args.join(" ");
	 	console.log(chat);
	    message.guild.channels.get(chat).send(sayMessage).catch(()=>{message.reply('ты ебобо?');});
	    message.delete().catch(O_o=>{}); 
	} else {
		message.reply({embed: {
			color: 16711680,
			title: "Ошибка",
			description: `ЭЭЭЭ! Команды \`${command.replace(/`/g , "\'")}\` нету! Алло, ты шо, ебобо?`,
			footer: {
			  	text: "JonedVoice",
		  	},
		}})
	}
});

client.login(process.env.BOT_TOKEN).catch(err => {console.log(err)});
